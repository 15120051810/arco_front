// main.ts 这段代码是 Vue 3 应用程序的入口文件，负责创建和配置 Vue 应用实例。以下是对这段代码的详细解释：

import { createApp } from 'vue'; // 从 Vue 库中导入 createApp 函数，用于创建 Vue 应用实例。
import ArcoVue from '@arco-design/web-vue'; //  导入 Arco Design 的 Vue 组件库 ArcoVue。
import ArcoVueIcon from '@arco-design/web-vue/es/icon'; // 导入 Arco Design 的图标组件库 ArcoVueIcon。
import globalComponents from '@/components'; // 导入自定义的全局组件注册模块 globalComponents。
import router from './router'; // 导入 Vue Router 实例 router，用于处理应用中的路由。
import store from './store';
import i18n from './locale';
import directive from './directive';
import { Message } from '@arco-design/web-vue';

// import './mock'; // 不要mock
import App from './App.vue';
// Styles are imported via arco-plugin. See config/plugin/arcoStyleImport.ts in the directory for details
// 样式通过 arco-plugin 插件导入。详见目录文件 config/plugin/arcoStyleImport.ts
// https://arco.design/docs/designlab/use-theme-package
import '@/assets/style/global.less';
import '@/api/interceptor';

const app = createApp(App);

app.use(ArcoVue, {});
app.use(ArcoVueIcon);

// 注册路由
app.use(router);
// Message._context = app._context;

app.use(store);
app.use(i18n);
app.use(globalComponents);
app.use(directive);

app.mount('#app');
