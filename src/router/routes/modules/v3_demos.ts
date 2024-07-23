import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
    path: '/v3_demos',
    name: 'v3_demos',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.v3_demos',
        requiresAuth: true,
        icon: 'icon-list',
        order: 10,
    },
    // src/views/v3_ demos/RefAndReactive.vue
    children: [
        {
            path: 'RefAndReactive',  // 不同目录下的子路径name也要不一样
            name: 'RefAndReactive',
            component: () => import('@/views/v3_demos/RefAndReactive.vue'),
            meta: {
                locale: 'menu.v3_demos.RefAndReactive',
                requiresAuth: true,
            },
        },
        {
            path: 'JiSuanShuXing',  
            name: 'JiSuanShuXing',
            component: () => import('@/views/v3_demos/JiSuanShuXing.vue'),
            meta: {
                locale: 'menu.v3_demos.JiSuanShuXing',
                requiresAuth: true,
            },
        },

    ],
    
};

export default LIST;
