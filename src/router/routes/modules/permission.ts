import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const PERMISSION: AppRouteRecordRaw = {
  path: '/permisson',
  name: 'permisson',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.system_manage',
    requiresAuth: true,
    icon: 'icon-folder-add',
    order: 1,
  },
  children: [
    {
        path: 'orgs',
        name: 'orgs',
        component: () => import('@/views/permission/orgs.vue'),
        meta: {
          locale: 'menu.orgs_manage',
          requiresAuth: true,
        },
    },
    {
        path: 'users',
        name: 'users',
        component: () => import('@/views/permission/users.vue'),
        meta: {
            locale: 'menu.users_manage',
            requiresAuth: true,
        },
    },
    {
        path: 'roles',
        name: 'roles',
        component: () => import('@/views/permission/roles.vue'),
        meta: {
            locale: 'menu.roles_manage',
            requiresAuth: true,
        },
    },
    {
        path: 'routers',
        name: 'routers',
        component: () => import('@/views/permission/routers.vue'),
        meta: {
            locale: 'menu.routers_manage',
            requiresAuth: true,
        },
    },
    {
        path: 'apis',
        name: 'apis',
        component: () => import('@/views/permission/apis.vue'),
        meta: {
            locale: 'menu.apis_manage',
            requiresAuth: true,
        },
    },
  ],
};
export default PERMISSION;