import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Message, Modal } from '@arco-design/web-vue';
import { useUserStore } from '@/store';
import { getToken } from '@/utils/auth';

export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  data: T;
}

export interface RefreshResponse {
  access: string;
}

import { setToken, clearToken } from '@/utils/auth';

if (import.meta.env.VITE_API_BASE_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
}
// axios.defaults.withCredentials = true

const filePath = new URL('', import.meta.url).pathname


// 在 Axios 请求拦截器中，config 参数是由 Axios 在执行请求时自动传递给拦截器的。具体来说，当你发起请求时，Axios 会生成一个请求配置对象 config，这个对象包含了请求的各种配置信息，比如 URL、请求头、请求方法等。
// 拦截器的作用就是在请求真正发送之前，修改或处理这个配置对象 config，你可以在此处添加一些额外的逻辑，如加入认证 token、修改请求头、打印调试信息等。

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // let each request carry token
    // this example using the JWT token
    // Authorization is a custom headers key
    // please modify it according to the actual situation
    const token = getToken();
    const base_token = localStorage.getItem('base_token');
    console.log(filePath, '请求拦截前,获取token 获取config','token->',token,'base_token->',base_token)

    // console.log(filePath, '请求拦截前,获取token',token)
    // console.log(filePath, '请求拦截前,获取config', JSON.stringify(config))

    // 点击登录时拦截的config参数
    // {"transitional":{"silentJSONParsing":true,"forcedJSONParsing":true,"clarifyTimeoutError":false},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1,"headers":{"common":{"Accept":"application/json, text/plain, */*"},"delete":{},"get":{},"head":{},"post":{"Content-Type":"application/x-www-form-urlencoded"},"put":{"Content-Type":"application/x-www-form-urlencoded"},"patch":{"Content-Type":"application/x-www-form-urlencoded"}},"baseURL":"http://localhost:8686","method":"post","url":"/api/user/login/","data":{"username":"liuxiangyu","password":"Miao13456"}}

    if (token) {
      if (!config.headers) { // 如果没有请求头
        config.headers = {}; // 在这里添加请求头信息
      }
      // console.log(filePath,'请求头设置认证token格式', token)
      config.headers.Authorization = `Bearer ${token}`; // 设置token
      config.headers.BaseToken = base_token || ''; // 设置base_token,如何这里加自定义请求头，会触发CORS（跨域资源共享）策略，详情查看chatGpt解答，
      // 后端需要搭配 django-cors-headers 才可以使用。还没调试好
    }
    console.log(filePath, '配置后的config,请求头添加了Authorization认证 Bearer token ')
    console.log(filePath, '请求拦截,配置后的config,请求头添加了Authorization认证 Bearer ... ', JSON.stringify(config))
    return config;
  },
  (error) => {
    // do something
    return Promise.reject(error);
  }
);
// add response interceptors
axios.interceptors.response.use(
  async (response) => {
    const res = response.data;
    // console.log('返回信息--->',res)
    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //   Message.error({
    //     content: res.msg || 'Error',
    //     duration: 5 * 1000,
    //   });
    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (
    //     [50008, 50012, 50014].includes(res.code) &&
    //     response.config.url !== '/api/user/info'
    //   ) {
    //     Modal.error({
    //       title: 'Confirm logout',
    //       content:
    //         'You have been logged out, you can cancel to stay on this page, or log in again',
    //       okText: 'Re-Login',
    //       async onOk() {
    //         const userStore = useUserStore();

    //         await userStore.logout();
    //         window.location.reload();
    //       },
    //     });
    //   }
    //   return Promise.reject(new Error(res.msg || 'Error'));
    // }
    return res;
  },
  async (error) => {
    let originalRequest = error.config // 当你请求报错（比如返回了 401 错误），axios 会把请求的详细信息放在 error.config 里，也就是你原本发出去的请求对象。
    let errInfo = error.response.data.message;  // 获取错误信息（假设后端返回的 JSON 包含 message 字段）
    let status = error.response.status
    // originalRequest._retry  这是自己人为加的一个“标记”。作用防止死循环重复刷新 token。
    console.log(filePath, '请求错误返回状态码', status, errInfo, originalRequest, originalRequest._retry)

    switch (status) {
      case 400:
        errInfo = '后端请求出错'
        break;
      case 404:
        errInfo = '请求地址错误'
        break;
      case 500:
        errInfo = '服务端错误'
        break;
      case 401:
        errInfo = 'REFRESH TOKEN过期'
        console.log('401401401401401401401')
        // 👇 自动刷新 access token，防止refresh也过期造成死循环，多添加一层判断
        if (!originalRequest._retry && !originalRequest.url.includes('/api/token/refresh') ) {
          originalRequest._retry = true
          const refresh = localStorage.getItem('refresh')
          if (!refresh) {
            // window.location.href = '/login'
            window.location.href = import.meta.env.VITE_API_BASE_PT_URL
            return Promise.reject(error)
          }

          try {
            const res: RefreshResponse = await axios.post('/api/token/refresh/', { refresh })
            const newAccess = res.access
            setToken(newAccess)

            originalRequest.headers.Authorization = `Bearer ${newAccess}`
            return axios(originalRequest) // ⬅️ 重新发起原请求
          } catch (err) {
            localStorage.removeItem('token')
            localStorage.removeItem('refresh')
            // window.location.href = '/login'
            window.location.href = import.meta.env.VITE_API_BASE_PT_URL
            return Promise.reject(err)
          }
        }
        window.location.href = import.meta.env.VITE_API_BASE_PT_URL
        break;
      case 403:
        errInfo = '无权访问'
        break;
    }

    console.log(filePath, '请求错误返回', errInfo)

    Message.error({
      content: error.msg || errInfo,
      duration: 5 * 1000,
    });

    return Promise.reject(error);
  }
);
