export const WHITE_LIST = [
  { name: 'notFound', children: [] },
  { name: 'login', children: [] },
];

export const NOT_FOUND = {
  name: 'notFound',
};

export const REDIRECT_ROUTE_NAME = 'Redirect';

export const DEFAULT_ROUTE_NAME = 'Workplace';

export const DEFAULT_ROUTE = {
  title: 'menu.dashboard.workplace',
  name: DEFAULT_ROUTE_NAME,
  fullPath: '/dashboard/workplace',
};


export const COMPANENT_MAP = {

  'layout': ()=>import('@/layout/default-layout.vue'),
  'workplace': () => import('@/views/dashboard/workplace/index.vue'),
  // 'dashboard/analysis/index': () => import('@/views/list/index.vue'),
  // 'system/user/index': () => import('@/views/system/user/index.vue'),
  // 'system/role/index': () => import('@/views/system/role/index.vue'),
}