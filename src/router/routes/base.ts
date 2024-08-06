import type { RouteRecordRaw } from 'vue-router'; // 从 vue-router 导入的类型，用于定义路由记录。
import { REDIRECT_ROUTE_NAME } from '@/router/constants'; // 导入的常量，用于定义重定向路由的名称。


// 默认布局 一个函数，返回一个动态导入的组件 default-layout.vue。这是一个布局组件，通常用作应用的主要布局。
export const DEFAULT_LAYOUT = () => import('@/layout/default-layout.vue');


// 路由重定向 ：一个 RouteRecordRaw 对象，定义了路由重定向的主要路由。
export const REDIRECT_MAIN: RouteRecordRaw = {
  path: '/redirect', // 路由路径为 /redirect。
  name: 'redirectWrapper', // 路由路径为 /redirect。
  component: DEFAULT_LAYOUT, //  使用 DEFAULT_LAYOUT 作为主要布局组件。
  meta: { // 路由元数据
    requiresAuth: true, // 表示需要身份验证。
    hideInMenu: true, // 表示不在菜单中显示
  },
  children: [
    {
      path: '/redirect/:path', // 子路由路径为 /redirect/:path，path 是动态参数
      name: REDIRECT_ROUTE_NAME, // 子路由名称为 REDIRECT_ROUTE_NAME。 
      component: () => import('@/views/redirect/index.vue'), // 动态导入的组件 index.vue，用于处理重定向。
      meta: { // 与父路由相同的元数据。
        requiresAuth: true,
        hideInMenu: true,
      },
    },
  ],
};

// 访问不存在的路由 一个 RouteRecordRaw 对象，定义了处理未匹配路由的配置。
export const NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:pathMatch(.*)*', //  使用通配符 /:pathMatch(.*)* 来匹配所有未定义的路径。
  name: 'notFound', // 路由名称为 notFound。
  component: () => import('@/views/not-found/index.vue'), // 动态导入的组件 index.vue，用于显示 404 错误页面。
};
