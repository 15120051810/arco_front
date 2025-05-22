import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

// 代码是在定义一个 Vue 路由配置，它包含一个 dashboard 的父路由和一个子路由 workplace。
// 它使用了一个 DEFAULT_LAYOUT 作为父路由的布局，并且对 workplace 路由进行了权限控制和元数据设置。

const DASHBOARD: AppRouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  // DEFAULT_LAYOUT 是一个布局组件，通常包含侧边栏、导航栏等。它作为 dashboard 路由的主组件。
  component: DEFAULT_LAYOUT, 
  meta: {
    locale: 'menu.dashboard', // 用于国际化，指向菜单的本地化文本。
    requiresAuth: true, // 表示该路由需要用户登录才能访问。
    icon: 'icon-dashboard', // 用于在菜单中显示图标。
    order: 1000,  // order: 用于控制菜单中的排序。
  }, 
  children: [ // children 定义了 dashboard 路由的子路由。
    {
      path: 'workplace',
      name: 'workplace',
      component: () => import('@/views/dashboard/workplace/index.vue'), //  子路由 workplace 懒加载了对应的视图组件
      meta: {
        locale: 'menu.dashboard.workplace',
        requiresAuth: true,
        roles: ['*'], // roles: ['*'] 表示该路由对所有角色开放。
      },
    },
  ],
};

export default DASHBOARD;
