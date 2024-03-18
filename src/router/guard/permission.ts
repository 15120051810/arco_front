import type { Router, RouteRecordNormalized } from 'vue-router';
import NProgress from 'nprogress'; // progress bar

import usePermission from '@/hooks/permission';
import { useUserStore, useAppStore } from '@/store';
import { appRoutes } from '../routes';
import { WHITE_LIST, NOT_FOUND } from '../constants';


//定义了一个名为 setupPermissionGuard 的函数，该函数接收一个 router 参数，表示 Vue Router 实例。
export default function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    
    // 获取了应用程序、用户和权限相关的存储对象或实例。这可能是 Store 或其他状态管理库的实例，用于管理应用程序状态、用户信息和权限配置。
    const appStore = useAppStore();
    const userStore = useUserStore();
    const Permission = usePermission();

    // 使用权限相关的实例来检查用户是否有权限访问目标路由 to。
    // accessRouter 方法根据用户的角色和权限配置来确定是否允许访问目标路由。
    const permissionsAllow = Permission.accessRouter(to);


    // 根据应用程序是否从服务端获取菜单配置进行条件判断。
    // 如果应用程序已经从服务端获取了菜单配置，则执行第一个分支；否则执行第二个分支。
    if (appStore.menuFromServer) {
      // 针对来自服务端的菜单配置进行处理
      // 根据需要自行完善来源于服务端的菜单配置的permission逻辑

      // 第一个分支处理来自服务端的菜单配置。它首先检查是否需要从服务端获取菜单配置，
      // 并调用 appStore.fetchServerMenuConfig() 方法获取菜单配置。
      // 然后根据菜单配置和权限判断决定是否允许访问目标路由，并进行相应的路由导航。
      if (
        !appStore.appAsyncMenus.length &&
        !WHITE_LIST.find((el) => el.name === to.name)
      ) {
        await appStore.fetchServerMenuConfig();
      }
      const serverMenuConfig = [...appStore.appAsyncMenus, ...WHITE_LIST];

      let exist = false;
      while (serverMenuConfig.length && !exist) {
        const element = serverMenuConfig.shift();
        if (element?.name === to.name) exist = true;

        if (element?.children) {
          serverMenuConfig.push(
            ...(element.children as unknown as RouteRecordNormalized[])
          );
        }
      }
      if (exist && permissionsAllow) {
        next();
      } else next(NOT_FOUND);
    } else {
      // 应用程序没有从服务端获取了菜单配置，执行该分支。
      if (permissionsAllow) next();
      else {
        const destination =
          Permission.findFirstPermissionRoute(appRoutes, userStore.role) ||
          NOT_FOUND;
        next(destination);
      }
    }
    NProgress.done();
  });
}
