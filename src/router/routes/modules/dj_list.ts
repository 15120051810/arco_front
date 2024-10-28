import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
    path: '/dj_list',
    name: 'dj_list',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.dj_list',
        requiresAuth: true,
        icon: 'icon-list',
        order: 5000,
    },
    children: [
        {
            path: 'demo1',  // The midline path complies with SEO specifications
            name: 'demo1',
            component: () => import('@/views/dj_list/index.vue'),
            meta: {
                locale: 'menu.dj_list.demo1',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
};

export default LIST;
