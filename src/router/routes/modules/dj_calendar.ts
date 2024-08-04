import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const LIST: AppRouteRecordRaw = {
    path: '/dj_calendar',
    name: 'dj_calendar',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.dj_calendar',
        requiresAuth: true,
        icon: 'icon-list',
        order: 2,
    },
    children: [
        {
            path: 'calendar_demo',  // 不同目录下的子路径name也要不一样
            name: 'calendar_demo',
            component: () => import('@/views/dj_calendar/index.vue'),
            meta: {
                locale: 'menu.dj_calendar.demo',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
};

export default LIST;
