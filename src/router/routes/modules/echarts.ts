import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
    path: '/echarts',
    name: 'echarts',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.echarts',
        requiresAuth: true,
        icon: 'icon-list',
        order: 4000,
    },
    children: [
        {
            path: 'demo',  // The midline path complies with SEO specifications
            name: 'demo',
            component: () => import('@/views/echarts/index.vue'),
            meta: {
                locale: 'menu.echarts.demo',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
};

export default LIST;
