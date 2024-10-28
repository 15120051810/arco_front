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
        order: 3000,
    },
    // 如果使用前端返回的路由列表，菜单的顺序按照编写顺序，order没起作用
    children: [
        {
            path: '1VModel',
            name: '1VModel',
            component: () => import('@/views/v3_demos/1VModel.vue'),
            meta: {
                locale: 'menu.v3_demos.1VModel',
                requiresAuth: true,
                icon: 'icon-list',
                order: 3006,
            },
        },
        {
            path: '2toRefs',
            name: '2toRefs',
            component: () => import('@/views/v3_demos/2toRefs.vue'),
            meta: {
                locale: 'menu.v3_demos.2toRefs',
                requiresAuth: true,
                icon: 'icon-list',
                order: 3006,            },
        },
        {
            path: '3DateSelected',
            name: '3DateSelected',
            component: () => import('@/views/v3_demos/3DateSelected.vue'),
            meta: {
                locale: 'menu.v3_demos.3DateSelected',
                requiresAuth: true,
                icon: 'icon-list',
                order: 3006,            },
        },
        {
            path: '4RefTagZuJian',
            name: '4RefTagZuJian',
            component: () => import('@/views/v3_demos/4RefTagZuJian.vue'),
            meta: {
                locale: 'menu.v3_demos.4RefTagZuJian',
                requiresAuth: true,
                icon: 'icon-list',
                order: 3006,
            },
        },
        {
            path: '5RefAndReactive',  // 不同目录下的子路径name也要不一样
            name: '5RefAndReactive',
            component: () => import('@/views/v3_demos/5RefAndReactive.vue'),
            meta: {
                locale: 'menu.v3_demos.5RefAndReactive',
                requiresAuth: true,
                icon: 'icon-list',
                order: 3006,
            },
        },
        {
            path: '6JiSuanShuXing',
            name: '6JiSuanShuXing',
            component: () => import('@/views/v3_demos/6JiSuanShuXing.vue'),
            meta: {
                locale: 'menu.v3_demos.6JiSuanShuXing',
                requiresAuth: true,
                icon: 'icon-list',
                order: 3006,
            },
        },
        {
            path: '7SkickyToTop',
            name: '7SkickyToTop',
            component: () => import('@/views/v3_demos/7SkickyToTop.vue'),
            meta: {
                locale: 'menu.v3_demos.7SkickyToTop',
                requiresAuth: true,
                icon: 'icon-list',
                order: 3006,
            },
        },
        {
            path: '8Form',
            name: '8Form',
            component: () => import('@/views/v3_demos/8Form.vue'),
            meta: {
                locale: 'menu.v3_demos.8Form',
                requiresAuth: true,
                icon: 'icon-list',
                order: 3006,
            },
        },
        {
            path: '9Tree',
            name: '9Tree',
            component: () => import('@/views/v3_demos/9Tree.vue'),
            meta: {
                locale: 'menu.v3_demos.9Tree',
                requiresAuth: true,
                icon: 'icon-list',
                order: 3007,
            },
        },
        {
            path: 'tongxun',
            name: 'TongXun',
            component: () => import('@/views/v3_demos/tongxun/index.vue'), // 二级路由不需要绑定组件，只需要作为子路由的容器。要不然一点就空白了
            // redirect: '/tongxun/props', // 访问一级路由 重定向到里面的第一个路由
            meta: {
                locale: 'menu.v3_demos.tongxun',
                requiresAuth: true,
                icon: 'icon-list',
                order: 3000,
            },
            children: [
                {
                    path: 'props',
                    name: 'Props',
                    component: () => import('@/views/v3_demos/tongxun/props/parent.vue'),
                    meta: {
                        locale: 'menu.v3_demos.tongxun.props',
                        requiresAuth: true,
                    },
                },
                {
                    path: 'emit',
                    name: 'Emit',
                    component: () => import('@/views/v3_demos/tongxun/emit/index.vue'),
                    meta: {
                        locale: 'menu.v3_demos.tongxun.emit',
                        requiresAuth: true,
                    },
                }
            ]
        },
        {
            path: 'slot',
            name: 'Slot',
            component: () => import('@/views/v3_demos/slot/index.vue'), // 二级路由不需要绑定组件，只需要作为子路由的容器。要不然一点就空白了
            redirect: '/slot/moren', // 访问一级路由 重定向到里面的第一个路由    
            meta: {
                locale: 'menu.v3_demos.slot',
                requiresAuth: true,
                order: 0,
            },
            children: [
                {
                    path: 'moren',
                    name: 'Moren',
                    component: () => import('@/views/v3_demos/slot/1moren/index.vue'),
                    meta: {
                        locale: 'menu.v3_demos.slot.1moren',
                        requiresAuth: true,
                    },
                },
                {
                    path: 'juming',
                    name: 'Juming',
                    component: () => import('@/views/v3_demos/slot/2juming/index.vue'),
                    meta: {
                        locale: 'menu.v3_demos.slot.2juming',
                        requiresAuth: true,
                    },
                },
                {
                    path: 'zuoyongyu',
                    name: 'Zuoyongyu',
                    component: () => import('@/views/v3_demos/slot/3zuoyongyu/index.vue'),
                    meta: {
                        locale: 'menu.v3_demos.slot.3zuoyongyu',
                        requiresAuth: true,
                    },
                }

            ]
        },
    ],

};

export default LIST;
