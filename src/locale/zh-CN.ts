import localeMessageBox from '@/components/message-box/locale/zh-CN';
import localeLogin from '@/views/login/locale/zh-CN';

import localeWorkplace from '@/views/dashboard/workplace/locale/zh-CN';

import localeSettings from './zh-CN/settings';

export default {
  'menu.dashboard': '仪表盘',
  'menu.server.dashboard': '仪表盘-服务端',
  'menu.server.workplace': '工作台-服务端',
  'menu.server.monitor': '实时监控-服务端',
  'menu.list': '列表页',
  'menu.result': '结果页',
  'menu.exception': '异常页',
  'menu.form': '表单页',
  'menu.profile': '详情页',
  'menu.visualization': '数据可视化',
  'menu.user': '个人中心',
  // 'menu.arcoWebsite': 'Arco Design',
  // 'menu.faq': '常见问题',
  'navbar.docs': '文档中心',
  'navbar.action.locale': '切换为中文',
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

  
  'menu.dj_table':'表格',
  'menu.dj_table.practice': 'table Demo',


  'menu.echarts': 'Echarts',
  'menu.echarts.demo': 'echarts Demo',


  'menu.dj_list': '列表',
  'menu.dj_list.demo1': 'List Demo',

  'menu.dj_calendar': '日历',
  'menu.dj_calendar.demo': 'Calendar Demo',

  'menu.v3_demos': 'vue3_案例',
  'menu.v3_demos.1VModel':'1 双向绑定值如何更新',
  'menu.v3_demos.2toRefs':'2 toRefs和toRef',  
  'menu.v3_demos.3DateSelected':'3 日期选择器',
  'menu.v3_demos.4RefTagZuJian':'4 ref绑定标签或者组件',
  'menu.v3_demos.5RefAndReactive': '5 ref和reactive嵌套响应',
  'menu.v3_demos.6JiSuanShuXing':'6 计算属性',
  'menu.v3_demos.7SkickyToTop':'7 查询固定在顶端',
  'menu.v3_demos.8Form':'8 表单',
  'menu.v3_demos.9Tree':'9 树组件',

  'menu.v3_demos.tongxun':'通讯',
  'menu.v3_demos.tongxun.props':'props',
  'menu.v3_demos.tongxun.emit':'emit',

  'menu.v3_demos.slot':'插槽',
  'menu.v3_demos.slot.1moren':'默认插槽',
  'menu.v3_demos.slot.2juming':'具名插槽',
  'menu.v3_demos.slot.3zuoyongyu':'作用域插槽'

};
