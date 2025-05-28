import { App } from 'vue';
import permission from './permission';
import my_permission from './my_permission';

export default {
  install(Vue: App) {
    // Vue.directive('permission', permission);
    Vue.directive('has', my_permission);
  },
};
