
// 从 Vue Router 中导入 Router 类型，用于定义路由实例的类型。
import type { Router } from 'vue-router';

// 从应用的工具函数模块中导入 setRouteEmitter 函数，用于设置路由变化的事件监听器。
import { setRouteEmitter } from '@/utils/route-listener';

// 从 userLoginInfo 和 permission 模块中分别导入设置用户登录信息守卫和权限守卫的函数。
import setupUserLoginInfoGuard from './userLoginInfo';
import setupPermissionGuard from './permission';

// 定义了一个名为 setupPageGuard 的函数，用于设置页面守卫。它接收一个 Router 类型的参数 router，表示路由实例。
function setupPageGuard(router: Router) {
  // 在路由导航之前注册全局前置守卫。该守卫会在每次路由切换前执行，用于触发路由变化的事件监听器。
  router.beforeEach(async (to) => {
    // 调用 setRouteEmitter 函数，将当前路由信息 to 传递给事件监听器，以触发路由变化的事件。
    
    console.log('注册发布订阅-->to',to)
    setRouteEmitter(to);
  });
}

// 定义了一个名为 createRouteGuard 的函数，用于创建路由守卫。它接收一个 Router 类型的参数 router，表示路由实例。
export default function createRouteGuard(router: Router) {
  console.log("设置路由守卫",router)
  // 依次调用了设置页面守卫、用户登录信息守卫和权限守卫的函数，以完成路由守卫的设置。
  setupPageGuard(router);
  setupUserLoginInfoGuard(router);
  setupPermissionGuard(router);
}
