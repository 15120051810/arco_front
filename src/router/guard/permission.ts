// 这段代码是一个 Vue Router 的权限守卫（Permission Guard）设置函数 setupPermissionGuard 的实现。
// 这个函数用于处理应用程序中的路由访问权限，确保用户只能访问他们有权限查看的路由。


import type { Router, RouteRecordNormalized } from 'vue-router';
import NProgress from 'nprogress'; // progress bar

import usePermission from '@/hooks/permission';
import { useUserStore, useAppStore } from '@/store';
import { appRoutes } from '../routes';
import { WHITE_LIST, NOT_FOUND } from '../constants';


// 该函数接收一个 router 参数，表示 Vue Router 实例，并对其进行配置以实现权限控制。
export default function setupPermissionGuard(router: Router) {
  router.beforeEach(async (to, from, next) => { // router.beforeEach：在每次路由切换之前执行的钩子函数。
    
    const appStore = useAppStore(); // 用于获取应用程序的状态，例如菜单配置。
    const userStore = useUserStore(); // 用于获取用户的状态，例如用户角色。
    const Permission = usePermission(); // 用于处理权限相关的逻辑。

    const permissionsAllow = Permission.accessRouter(to); // 通过 Permission.accessRouter(to) 方法检查目标路由是否被允许访问。这个方法根据用户的角色和权限配置来决定是否允许访问目标路由。

    console.log('开始判断是否从服务器获取菜单路由',appStore.menuFromServer)
    console.log('准备去的路由路径名称->to.name',to.name,'是否有权限',permissionsAllow)

    if (appStore.menuFromServer) { // 如果应用程序已经从服务器获取了菜单配置

      // 如果 appStore.appAsyncMenus为空 且目标路由不在 WHITE_LIST 中，则调用 appStore.fetchServerMenuConfig() 方法从服务器获取菜单配置。
      if (
        !appStore.appAsyncMenus.length &&
        !WHITE_LIST.find((el) => el.name === to.name)
      ) {
        console.log(`访问的是`,to.name,'开始获取服务器菜单')
        await appStore.fetchServerMenuConfig();
      }
      const serverMenuConfig = [...appStore.appAsyncMenus, ...WHITE_LIST]; // 将从服务器获取的菜单配置和白名单合并

      let exist = false;
      // 这段代码是用于检查目标路由 (to) 是否存在于 从服务器获取的菜单配置 (serverMenuConfig) 中，并根据权限决定是否允许访问目标路由。如果目标路由存在且权限允许，则允许访问目标路由；否则，重定向到 NOT_FOUND 路由。
      while (serverMenuConfig.length && !exist) { // 条件是 serverMenuConfig 数组不为空 (serverMenuConfig.length) 且目标路由 to 尚未找到 (!exist)。只要这两个条件都满足，循环就会继续。
        const element = serverMenuConfig.shift();  // 从 serverMenuConfig 数组中移除并返回第一个元素
        if (element?.name === to.name) exist = true; // 这行代码检查当前 element 的 name 属性是否与目标路由 to 的 name 相同。如果相同，将 exist 设置为 true，表示找到了目标路由。element?.name 使用了可选链操作符 (?.) 来安全地访问 element 的 name 属性，避免 element 为 undefined 或 null 时抛出错误。

        if (element?.children) { // 这段代码检查当前 element 是否有子路由 (element.children)。如果有，将其子路由推入 serverMenuConfig 数组中。
          serverMenuConfig.push( // 将子路由展开并添加到 serverMenuConfig 中，以便进一步检查。
            ...(element.children as unknown as RouteRecordNormalized[]) // 是为了确保类型安全，将 element.children 转换为 RouteRecordNormalized[] 类型。
          );
        }
      }
      if (exist && permissionsAllow) {
        next();
      } else next(NOT_FOUND);
    } else {
      // 应用程序 没有从服务端获取了菜单配置，执行该分支。
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
