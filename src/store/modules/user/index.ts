import { defineStore } from 'pinia';
import {
  login as userLogin,
  logout as userLogout,
  getUserInfo,
  getUserPermission,
  LoginData,
} from '@/api/user';

import { setToken, clearToken } from '@/utils/auth';
import { removeRouteListener } from '@/utils/route-listener';
import { UserState } from './types';
import useAppStore from '../app';
import useTabBarStore from '../tab-bar';

import imageUrl from '@/assets/images/avatar.jpg';
import permission from '@/directive/permission';

const filePath = new URL('', import.meta.url).pathname

// 这个 Pinia store 主要用于管理用户相关的状态和操作，包括用户的基本信息、角色切换、登录、登出等。
// 通过 actions 方法提供了对用户状态的管理和异步操作的处理，同时提供了 getters 用于获取用户信息。
const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: undefined,
    avatar: imageUrl, // 使用本地固定图片，需要导入
    job: undefined,
    organization: undefined,
    location: undefined,
    email: undefined,
    introduction: undefined,
    personalWebsite: undefined,
    jobName: undefined,
    organizationName: undefined,
    locationName: undefined,
    phone: undefined,
    registrationDate: undefined,
    accountId: undefined,
    certification: undefined,
    homepage:'workplace',
    role: [],
    permission: [],
  }),

  // 返回当前用户状态的一个拷贝。
  getters: {
    userInfo(state: UserState): UserState {
      return { ...state };
    },
  },

  actions: {
    // 切换用户角色，返回一个 Promise 以便异步处理。
    // switchRoles() {
    //   return new Promise((resolve) => {
    //     this.role = this.role === 'user' ? 'admin' : 'user';
    //     resolve(this.role);
    //   });
    // },
    // Set user's information 更新用户信息，通过 this.$patch 更新部分状态。
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    },

    // Reset user's information 重置用户信息，通过 this.$reset 清除状态。
    resetInfo() {
      this.$reset();
    },

    // Get user's information  异步获取用户信息并更新状态。
    async info() {
      const res = await getUserInfo();
      this.setInfo(res.data);
      console.log(filePath, '获取用户信息成功,并更新用户state', JSON.stringify(this.$state),this.role)
      console.log('获取到的 permission 类型：', typeof res.data.permission, Array.isArray(res.data.permission), res.data.permission);
    },

    // Get user's information  异步获取用户信息并更新状态。
    // async permission() {
    //   const res = await getUserPermission();
    //   this.setInfo(res.data);
    //   console.log(filePath, '获取用户权限成功,并更新用户state', JSON.stringify(res))
    // },

    // Login 异步用户登录，成功后设置 token，并将用户角色保存到 localStorage。如果登录失败，清除 token 并抛出错误。
    async login(loginForm: LoginData) {
      try {
        console.log(filePath,'登录loginForm',loginForm.username)

        const res = await userLogin(loginForm);
        console.log(filePath,'登录返回结果',res)
        window.localStorage.setItem('username', loginForm.username);
        setToken(res.data.token);
        await this.info() // 登录后就更新用户store
      } catch (err) {
        clearToken();
        throw err;
      }
    },
    // 登出后的回调函数，重置用户信息，清除 token，移除路由监听器，并清空应用的菜单。
    logoutCallBack() {
      const appStore = useAppStore();
      const tabBarStore = useTabBarStore();
      this.resetInfo();
      clearToken();
      removeRouteListener();
      appStore.clearServerMenu();
      console.log('清空tabstore')
      tabBarStore.resetTabList();

      window.localStorage.clear();  // 清空 所有 的 localStorage 数据
      window.localStorage.removeItem('username');

    },
    // Logout 异步用户登出，成功后执行 logoutCallBack。
    async logout() {
      try {
        await userLogout();
      } finally {
        this.logoutCallBack();
      }
    },
  },
});

export default useUserStore;
