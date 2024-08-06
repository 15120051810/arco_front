import { defineStore } from 'pinia'; // 从 pinia 引入，用于定义一个 Pinia store
import { Notification } from '@arco-design/web-vue'; // 从 @arco-design/web-vue 引入，用于显示通知。
import type { NotificationReturn } from '@arco-design/web-vue/es/notification/interface'; //通知返回的类型，用于通知实例的类型声明
import type { RouteRecordNormalized } from 'vue-router'; // RouteRecordNormalized：从 vue-router 引入，用于类型声明路由记录。
import defaultSettings from '@/config/settings.json'; // 从配置文件导入默认设置
import { getMenuList } from '@/api/user'; // 从 API 模块导入，用于获取菜单列表的函数
import { AppState } from './types'; // 从 types 模块导入，用于定义应用状态的类型。


// 这个 Pinia store 主要用于管理应用的全局状态，包括应用设置、设备类型、菜单数据等。
// 通过定义 getters 和 actions，可以方便地获取状态和进行状态更新。
// 使用 Notification 提供用户反馈，例如在异步操作中显示加载或错误信息。


const useAppStore = defineStore('app', {

  // 定义了 state，返回一个 AppState 类型的对象，并初始化为 defaultSettings。
  state: (): AppState => ({ ...defaultSettings }),

  getters: {
    //返回当前的应用设置。
    appCurrentSetting(state: AppState): AppState {
      return { ...state };
    },
    // 返回设备类型
    appDevice(state: AppState) {
      return state.device;
    },
    // 返回服务器菜单数据，类型为 RouteRecordNormalized[]。
    appAsyncMenus(state: AppState): RouteRecordNormalized[] {
      return state.serverMenu as unknown as RouteRecordNormalized[];
    },
  },

  actions: {
    // Update app settings 更新应用设置。使用 this.$patch 更新部分状态。
    updateSettings(partial: Partial<AppState>) {
      // @ts-ignore-next-line
      this.$patch(partial);
    },

    // Change theme color 切换主题。根据参数设置主题并修改 document.body 的属性。
    toggleTheme(dark: boolean) {
      if (dark) {
        this.theme = 'dark';
        document.body.setAttribute('arco-theme', 'dark');
      } else {
        this.theme = 'light';
        document.body.removeAttribute('arco-theme');
      }
    },
    //切换设备类型。
    toggleDevice(device: string) {
      this.device = device;
    },
    // 显示或隐藏菜单。
    toggleMenu(value: boolean) {
      this.hideMenu = value;
    },
    // 异步获取服务器菜单配置，使用通知显示加载状态和结果。
    async fetchServerMenuConfig() {
      let notifyInstance: NotificationReturn | null = null;
      try {
        notifyInstance = Notification.info({
          id: 'menuNotice', // Keep the instance id the same
          content: 'loading',
          closable: true,
        });
        const { data } = await getMenuList();
        this.serverMenu = data;
        notifyInstance = Notification.success({
          id: 'menuNotice',
          content: 'success',
          closable: true,
        });
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        notifyInstance = Notification.error({
          id: 'menuNotice',
          content: 'error',
          closable: true,
        });
      }
    },
    //  清空服务器菜单数据。
    clearServerMenu() {
      this.serverMenu = [];
    },
  },
});

export default useAppStore;
