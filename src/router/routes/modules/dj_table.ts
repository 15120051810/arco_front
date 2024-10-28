import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
    path: '/dj_table',
    name: 'dj_table',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.dj_table',
        requiresAuth: true,
        icon: 'icon-list',
        order: 6000,
    },
    children: [
        {
            path: 'practice',  // The midline path complies with SEO specifications
            name: 'practice',
            component: () => import('@/views/dj_table/index.vue'),
            meta: {
                locale: 'menu.dj_table.practice',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
};

export default LIST;
