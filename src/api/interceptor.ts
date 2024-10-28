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

if (import.meta.env.VITE_API_BASE_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // let each request carry token
    // this example using the JWT token
    // Authorization is a custom headers key
    // please modify it according to the actual situation
    const token = getToken();
    console.log('请求拦截前,获取token',token)
    console.log('请求拦截前,配置config', JSON.stringify(config))

    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('请求拦截,配置后的config', JSON.stringify(config))
    return config;
  },
  (error) => {
    // do something
    return Promise.reject(error);
  }
);
// add response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
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
  (error) => {
    let errInfo = error.response.data.message;  // 获取错误信息（假设后端返回的 JSON 包含 message 字段）
    let status = error.response.status
    console.log('请求错误返回状态码', status,errInfo)

    switch (status) {
      case 400:
        errInfo = '已经具有重名'
        break;
      case 404:
        errInfo = '请求地址错误'
        break;
      case 500:
        errInfo = '服务端错误'
        break;
      case 401:
        errInfo = 'TOKEN过期'
        break;
      case 403:
        errInfo = '无权访问'
        break;
    }

    console.log('请求错误返回', errInfo)

    Message.error({
      content: error.msg || errInfo,
      duration: 5 * 1000,
    });

    return Promise.reject(error);
  }
);
