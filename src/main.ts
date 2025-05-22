// main.ts 这段代码是 Vue 3 应用程序的入口文件，负责创建和配置 Vue 应用实例。以下是对这段代码的详细解释：
const filePath = new URL('', import.meta.url).pathname
console.log(filePath,'此文件开始执行')

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
import App from './App.vue'; // 导入根组件（App.vue）
// Styles are imported via arco-plugin. See config/plugin/arcoStyleImport.ts in the directory for details
// 样式通过 arco-plugin 插件导入。详见目录文件 config/plugin/arcoStyleImport.ts
// https://arco.design/docs/designlab/use-theme-package
import '@/assets/style/global.less';
import '@/api/interceptor';


const app = createApp(App);

app.use(ArcoVue, {});
app.use(ArcoVueIcon);

// 注册路由
console.log(filePath,'开始注册路由')
app.use(router);
// Message._context = app._context;

app.use(store);
app.use(i18n);
app.use(globalComponents);
app.use(directive);

// 在 Vue 3 中，挂载过程通常发生在 main.ts（或 main.js）文件中。在这个文件中，你需要导入 Vue，并将根组件挂载到 #app 元素上。

app.mount('#app');

// 详细步骤：
// 第一步 导入 Vue：使用 createApp 函数来创建 Vue 应用实例。
// 第二步 导入根组件：根组件通常是 App.vue，它是应用的入口。
// 第三步 挂载应用：使用 mount('#app') 将应用实例挂载到页面中的 <div id="app"></div> 元素上。

// 解释挂载过程
// createApp(App)：创建一个 Vue 应用实例，传入的 App 是 Vue 组件，它将作为整个应用的根组件。
// .mount('#app')：将应用挂载到页面上 id="app" 的 DOM 元素中。此时，Vue 会将 App.vue 渲染到该 DOM 元素。

// 运行 Vue 应用
// 当你运行这个 Vue 项目时，Vue 会自动解析并渲染 App.vue，并将其内容插入到 #app 元素中。
// 总结： 挂载的过程就是通过 createApp 创建 Vue 应用实例，并使用 .mount('#app') 方法将应用渲染到 HTML 页面上的指定 DOM 元素（这里是 #app）中。
// 在这个过程中，Vue 会管理和更新挂载点中的内容，确保其与应用的状态同步。
console.log(filePath,'main.ts===========此文件执行完毕==============')
