import type { Router, LocationQueryRaw } from 'vue-router';
import NProgress from 'nprogress'; // progress bar

import { useUserStore } from '@/store';
import { isLogin } from '@/utils/auth';

export default function setupUserLoginInfoGuard(router: Router) {
  // 使用 beforeEach 方法注册了一个全局前置守卫函数。这意味着每次路由跳转之前都会执行这个函数。
  router.beforeEach(async (to, from, next) => {
    
    NProgress.start(); // ：在路由跳转之前，开始显示页面加载进度条。这通常用于显示页面加载状态。
    
    // 获取了一个名为 userStore 的用户存储对象。这可能是一个 Vuex Store 或其他状态管理库的实例，用于管理用户的登录状态和信息。
    const userStore = useUserStore();
    if (isLogin()) {

      // 用户登录后
      // 检查用户存储中是否存在用户角色信息。如果存在角色信息，则表示用户已经获取了完整的用户信息，
      // 可以直接跳转到目标页面；否则，需要通过 userStore.info() 方法获取用户信息。
      if (userStore.role) {
        next(); // 继续路由跳转到目标页面。
      } else 
      
      // 没有发现角色信息,需要通过 userStore.info() 方法获取用户信息。
      {
        try {
          await userStore.info(); // 调用 userStore.info() 方法获取用户信息。这可能是一个异步操作，因此使用 await 等待获取用户信息完成。
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
      // 如果用户尝试访问的页面是登录页面，则允许继续访问。
      if (to.name === 'login') {
        next();
        return;
      }
      // 如果用户尝试访问的页面不是登录页面，则重定向到登录页面，并携带重定向前的路由信息和查询参数。
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
