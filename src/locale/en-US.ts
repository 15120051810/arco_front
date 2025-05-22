import localeMessageBox from '@/components/message-box/locale/en-US';
import localeLogin from '@/views/login/locale/en-US';

import localeWorkplace from '@/views/dashboard/workplace/locale/en-US';

import localeSettings from './en-US/settings';

export default {
  'menu.dashboard': 'Dashboard',
  'menu.server.dashboard': 'Dashboard-Server',
  'menu.server.workplace': 'Workplace-Server',
  'menu.server.monitor': 'Monitor-Server',
  'menu.list': 'List',
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

  'menu.dj_table':'表格练习',
  'menu.dj_table.practice': '练习场',

  'menu.dj_list': 'List',
  'menu.dj_list.demo1': 'List Demo1',
  'menu.calendar': 'Calendar',
  'menu.calendar.demo': 'Calendar Demo',

  'menu.v3_demos': '案例',
  'menu.v3_demos.RefAndReactive': 'ref和reactive嵌套响应',
  'menu.v3_demos.JiSuanShuXing':'计算属性',
  'menu.v3_demos.tongxinDemo.props':'通讯props',
  'menu.v3_demos.SkickyToTop':'查询固定在顶端'

};
