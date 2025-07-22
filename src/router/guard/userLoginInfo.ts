import type { Router, LocationQueryRaw } from 'vue-router';
import NProgress from 'nprogress'; // progress bar

import { useUserStore } from '@/store';
import { isLogin } from '@/utils/auth';

const filePath = new URL('', import.meta.url).pathname + '路由守卫2'

export default function setupUserLoginInfoGuard(router: Router) {
  // 使用 beforeEach 方法注册了一个全局前置守卫函数。这意味着每次路由跳转之前都会执行这个函数。
  router.beforeEach(async (to, from, next) => {

    console.log(filePath, '用户登录信息前置守卫-to', to.name)
    console.log(filePath, '用户登录信息前置守卫->from', from.name)
    console.log(filePath, '用户登录信息前置守卫->next函数')

    NProgress.start(); // ：在路由跳转之前，开始显示页面加载进度条。这通常用于显示页面加载状态。

    // 获取了一个名为 userStore 的用户存储对象。这可能是一个 Vuex Store 或其他状态管理库的实例，用于管理用户的登录状态和信息。
    const userStore = useUserStore();
    console.log(filePath, '✅ userStore 初始化完成', userStore);


    if (to.path == "/dashboard/workplace" && to.query.token) {
      console.log("请求验证 token ",to.query.token);
      await userStore.skip_auth_login({ base_token: to.query.token }).then(
        (resp: any) => {
          console.log('开始跳转到首页---》', resp)
          Object.keys(resp).length > 0
            ? next({ name: resp.name })
            : next({ path: "/dashboard/workplace" });
        }
      );
      // 防止一个路由守卫（如 beforeEach）中多次调用了 next()，这是不允许的行为。在 Vue Router 中，每个守卫只能调用一次 next()，否则在生产环境下会抛出错误，导致跳转失败。
      return;
    }

    // debugger;
    if (isLogin()) {
      console.log(filePath, '用户已登陆->当前角色', userStore.role)

      // 用户登录后
      // 检查用户存储中是否存在用户角色信息。如果存在角色信息，则表示用户已经获取了完整的用户信息，
      // 可以直接跳转到目标页面；否则，需要通过 userStore.info() 方法获取用户信息。
      if (userStore.role.length > 0) { // 刷新页面的时候 会重置store，role就没有了
        console.log(filePath, '发现用户角色信息', userStore.role)
        next(); // 继续路由跳转到目标页面。
      } else

      // 没有发现角色信息,需要通过 userStore.info() 方法获取用户信息。 
      {
        try {
          console.log(filePath, '没有发现角色信息,开始获取用户信息')
          await userStore.info(); // 调用 userStore.info() 方法获取用户信息。这可能是一个异步操作，因此使用 await 等待获取用户信息完成。
          // await userStore.permission(); // 将获取权限放在 获取用户信息的时候

          next(); // 等待用户信息获取完成后，继续路由跳转到目标页面。
        } catch (error) {
          // 如果获取用户信息时出现错误，可能意味着用户登录状态已失效，因此需要调用 userStore.logout() 方法登出用户。
          await userStore.logout();
          // 重定向到登录页面，并携带重定向前的路由信息和查询参数。
          next({
            name: 'login',
            query: {
              redirect: to.name,
              ...to.query,
            } as LocationQueryRaw,
          });
        }
      }
    }

    else
    // 用户未登录 
    {
      console.log('用户还未登录，去调用登录按钮')
      // 如果用户尝试访问的页面是登录页面，则允许继续访问。
      if (to.name === 'login') {
        console.log('用户还未登录,但是访问的是登录页,直接放行')
        next();
        return;
      }
      // 如果用户尝试访问的页面不是登录页面，则重定向到登录页面，并携带重定向前的路由信息和查询参数。
      console.log('用户还未登录,并且访问的不是登录页,让页面跳转到登录页，并且携带路径后面的参数,以便登录后直接重定向过去')
      next({
        name: 'login',
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      });
    }
  });
}
