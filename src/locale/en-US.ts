import localeMessageBox from '@/components/message-box/locale/en-US';
import localeLogin from '@/views/login/locale/en-US';

import localeWorkplace from '@/views/dashboard/workplace/locale/en-US';

import localeSettings from './en-US/settings';

export default {
  'menu.dashboard': 'Dashboard',
  'menu.server.dashboard': 'Dashboard-Server',
  'menu.server.workplace': 'Workplace-Server',
  'menu.server.monitor': 'Monitor-Server',
  // 'menu.list': 'List',
  'menu.result': 'Result',
  'menu.exception': 'Exception',
  'menu.form': 'Form',
  'menu.profile': 'Profile',
  'menu.visualization': 'Data Visualization',
  'menu.user': 'User Center',
  // 'menu.arcoWebsite': 'Arco Design',
  // 'menu.faq': 'FAQ',
  'navbar.docs': 'Docs',
  'navbar.action.locale': 'Switch to English',
  ...localeSettings,
  ...localeMessageBox,
  ...localeLogin,
  ...localeWorkplace,


  'menu.system_manage': '系统管理',
  'menu.system_manage.orgs_manage': '组织管理',
  'menu.system_manage.user_manage': '用户管理',
  'menu.system_manage.role_manage': '角色管理',
  'menu.system_manage.routers_manage': '菜单管理',
  'menu.system_manage.apis_manage': '接口管理',

  'menu.table':'表格练习',
  'menu.table.practice': '练习场',
  'menu.table.table_permission':'权限案例',
  
  'menu.list': 'List',
  'menu.list.demo1': 'List Demo1',
  'menu.calendar': 'Calendar',
  'menu.calendar.demo': 'Calendar Demo',

  'menu.vue3': '案例',
  'menu.vue3.RefAndReactive': 'ref和reactive嵌套响应',
  'menu.vue3.JiSuanShuXing':'计算属性',
  'menu.vue3.tongxinDemo.props':'通讯props',
  'menu.vue3.SkickyToTop':'查询固定在顶端'

};
