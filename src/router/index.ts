
// 前沿
// 这段代码配置了 Vue 3 应用的路由，包括设置路由历史记录、路由守卫、进度条等功能。以下是详细解释：


import { createRouter, createWebHistory } from 'vue-router'; // 从 vue-router 导入的函数，用于创建路由实例和配置路由历史记录。
import NProgress from 'nprogress'; // 从第三方库 nprogress 中导入 NProgress，用于在路由切换时显示进度条。
import 'nprogress/nprogress.css'; // 导入 nprogress 的样式文件。
import { appRoutes,appExternalRoutes } from './routes'; // 从 routes 文件中导入应用的路由配置。
import { REDIRECT_MAIN, NOT_FOUND_ROUTE } from './routes/base'; // 从 routes/base 文件中导入重定向和未找到路由的配置。
import createRouteGuard from './guard';  // 自定义路由守卫函数，从 ./guard 导入。

NProgress.configure({ showSpinner: false }); // 配置 NProgress，设置 showSpinner 为 false，以隐藏进度条的旋转器。设置不显示进度条的加载效果。


// 创建路由实例。传入一个对象作为参数，包括以下配置：
const router = createRouter({
  history: createWebHistory(), //使用 createWebHistory 创建一个基于 HTML5 History API 的路由历史模式。
  
  // 路由表的配置，包括应用内部路由、外部路由、重定向和未找到路由。
  routes: [
    {
      path: '/', // 根路径，重定向到 /login。
      redirect: 'login',
    },
    {
      path: '/login', //  登录页面路径，组件通过动态导入方式加载。
      name: 'login', // 命名路由 做路由（菜单的）的权限
      component: () => import('@/views/login/index.vue'),// 路由懒加载
      meta: {
        requiresAuth: false,
      },
    },
    ...appRoutes, // 导入的应用路由配置
    ...appExternalRoutes,
    REDIRECT_MAIN, // 路由重定向配置。 访问类似路径会重定向 http://localhost:6888/redirect/123 重定向
    NOT_FOUND_ROUTE, // 访问不存在的路径会 
  ],
  scrollBehavior() { // 路由跳转时的滚动行为。这里配置为每次跳转时将页面滚动到顶部。
    return { top: 0 };
  },
});

createRouteGuard(router); // 调用自定义的路由守卫函数，传入路由实例 router，用于添加全局的路由守卫逻辑（例如：权限检查、进度条管理等）。

export default router; // 将创建的路由实例导出，以便在 Vue 应用中使用。

