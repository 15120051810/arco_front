import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
    path: '/dj_echarts',
    name: 'dj_echarts',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.dj_echarts',
        requiresAuth: true,
        icon: 'icon-list',
        order: 4000,
    },
    children: [
        {
            path: 'demo',  // The midline path complies with SEO specifications
            name: 'demo',
            component: () => import('@/views/dj_echarts/index.vue'),
            meta: {
                locale: 'menu.dj_echarts.demo',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
};

export default LIST;
