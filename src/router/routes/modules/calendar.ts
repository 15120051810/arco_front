import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
    path: '/calendar',
    name: 'calendar',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.calendar',
        requiresAuth: true,
        // icon: 'icon-list',
        // order: 5000,
    },
    children: [
        {
            path: 'calendar_demo',  // 不同目录下的子路径name也要不一样
            name: 'calendar_demo',
            component: () => import('@/views/calendar/index.vue'),
            meta: {
                locale: 'menu.calendar.demo',
                requiresAuth: true,
                // roles: ['*'],
            },
        },
    ],
};

export default LIST;
