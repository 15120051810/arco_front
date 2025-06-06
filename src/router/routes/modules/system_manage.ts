import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const PERMISSION: AppRouteRecordRaw = {
  path: '/system_manage',
  name: 'system_manage',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.system_manage',
    requiresAuth: true,
    icon: 'icon-folder-add',
    order: 2000,
},
  children: [
    {
        path: 'orgs_manage',
        name: 'orgs_manage',
        component: () => import('@/views/system_manage/orgs.vue'),
        meta: {
          locale: 'menu.system_manage.orgs_manage',
          requiresAuth: true,
        },
    },
    {
        path: 'users_manage',
        name: 'users_manage',
        component: () => import('@/views/system_manage/users.vue'),
        meta: {
            locale: 'menu.system_manage.user_manage',
            requiresAuth: true,
        },
    },
    {
        path: 'role_manage',
        name: 'role_manage',
        component: () => import('@/views/system_manage/role.vue'),
        meta: {
            locale: 'menu.system_manage.role_manage',
            requiresAuth: true,
        },
    },
    {
        path: 'routers_manage',
        name: 'routers_manage',
        component: () => import('@/views/system_manage/routers.vue'),
        meta: {
            locale: 'menu.system_manage.routers_manage',
            requiresAuth: true,
        },
    },
    {
        path: 'apis_manage',
        name: 'apis_manage',
        component: () => import('@/views/system_manage/apis.vue'),
        meta: {
            locale: 'menu.system_manage.apis_manage',
            requiresAuth: true,
        },
    },
  ],
};
export default PERMISSION;