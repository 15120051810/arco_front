import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
    path: '/table',
    name: 'table',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.table',
        requiresAuth: true,
        // icon: 'icon-list',
        // order: 6000,
    },
    children: [
        {
            path: 'table_demo',  // The midline path complies with SEO specifications
            name: 'table_demo',
            component: () => import('@/views/table/index.vue'),
            meta: {
                locale: 'menu.table.table_demo',
                requiresAuth: true,
                // roles: ['*'],
            },
        },
    ],
};

export default LIST;
