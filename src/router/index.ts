
// 用于创建路由实例和路由历史模式
import { createRouter, createWebHistory } from 'vue-router';
// 从第三方库 nprogress 中导入 NProgress，用于在路由切换时显示进度条。
import NProgress from 'nprogress'; // progress bar
// 导入 nprogress 的样式文件。
import 'nprogress/nprogress.css';

// 从 routes 文件中导入应用的路由配置。
import { appRoutes,appExternalRoutes } from './routes';
// 从 routes/base 文件中导入重定向和未找到路由的配置。
import { REDIRECT_MAIN, NOT_FOUND_ROUTE } from './routes/base';
import createRouteGuard from './guard';

// 配置 NProgress，设置不显示进度条的加载效果。
NProgress.configure({ showSpinner: false }); // NProgress Configuration

// 创建路由实例。传入一个对象作为参数，包括以下配置：
const router = createRouter({
  // 使用 createWebHistory 创建一个基于 HTML5 History API 的路由历史模式。
  history: createWebHistory(),
  
  // 路由表的配置，包括应用内部路由、外部路由、重定向和未找到路由。
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login', // 命名路由 做路由（菜单的）的权限
      component: () => import('@/views/login/index.vue'),// 路由懒加载
      meta: {
        requiresAuth: false,
      },
    },
    ...appRoutes,
    ...appExternalRoutes,
    REDIRECT_MAIN, // 访问类似路径会重定向 http://localhost:6888/redirect/123 重定向
    NOT_FOUND_ROUTE, // 访问不存在的路径会 
  ],
  // 设置滚动行为，每次路由切换时滚动到页面顶部。
  scrollBehavior() {
    return { top: 0 };
  },
});

// 调用 createRouteGuard 函数创建路由守卫，传入路由实例作为参数。
createRouteGuard(router);

// 导出路由实例，以便在应用的入口文件中使用
export default router;
