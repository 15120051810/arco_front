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
            path: '1VModel',  
            name: '1VModel',
            component: () => import('@/views/v3_demos/1VModel.vue'),
            meta: {
                locale: 'menu.v3_demos.1VModel',
                requiresAuth: true,
            },
        },
        {
            path: '2toRefs',  
            name: '2toRefs',
            component: () => import('@/views/v3_demos/2toRefs.vue'),
            meta: {
                locale: 'menu.v3_demos.2toRefs',
                requiresAuth: true,
            },
        },
        {
            path: '3DateSelected',  
            name: '3DateSelected',
            component: () => import('@/views/v3_demos/3DateSelected.vue'),
            meta: {
                locale: 'menu.v3_demos.3DateSelected',
                requiresAuth: true,
            },
        },
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
        // {
        //     path: 'TongXunProps',  
        //     name: 'TongXunProps',
        //     component: () => import('@/views/v3_demos/tongxunDemo/props/parent.vue'),
        //     meta: {
        //         locale: 'menu.v3_demos.tongxinDemo.props',
        //         requiresAuth: true,
        //     },
        // }
        {
            path: 'SkickyToTop',  
            name: 'SkickyToTop',
            component: () => import('@/views/v3_demos/SkickyToTop.vue'),
            meta: {
                locale: 'menu.v3_demos.SkickyToTop',
                requiresAuth: true,
            },
        }
    ],
    
};

export default LIST;
