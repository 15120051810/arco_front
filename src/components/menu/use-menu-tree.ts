
// 这段代码定义了一个自定义 Vue 3 组合式函数 useMenuTree，用于生成和管理应用程序的菜单树。以下是对该代码的详细解释：

import { computed } from 'vue';
import { RouteRecordRaw, RouteRecordNormalized } from 'vue-router'; // 是路由类型，用于描述 Vue Router 路由记录。
import usePermission from '@/hooks/permission'; // 是一个自定义的钩子，用于处理权限相关的逻辑。
import { useAppStore } from '@/store'; // 用于访问 Pinia 状态管理中的 app store。
import appClientMenus from '@/router/app-menus'; //  是客户端菜单的数据。
import { cloneDeep } from 'lodash'; // 是 Lodash 的一个方法，用于深拷贝对象。


//  创建了一个组合式 API useMenuTree函数，用于生成菜单树。
export default function useMenuTree() { 
  const permission = usePermission(); //  通过 usePermission 获取权限处理逻辑。
  const appStore = useAppStore(); //  通过 useAppStore 获取 Pinia 中的 app store。
  const appRoute = computed(() => { //  是一个计算属性，根据 appStore.menuFromServer 的值返回从服务端或者本地 获取菜单数据
    if (appStore.menuFromServer) {
      console.log('从后端获取菜单树-->',appStore.appAsyncMenus)
      console.log('后端菜单 追加 前端菜单')
      return appStore.appAsyncMenus;
    }
    console.log('从前端获取菜单树-->',appClientMenus)
    return appClientMenus;
  });
  // 计算属性生成最终的菜单树。
  const menuTree = computed(() => {
    // 通过 cloneDeep 深拷贝 appRoute.value，以避免直接修改原始数据。
    const copyRouter = cloneDeep(appRoute.value) as RouteRecordNormalized[];
    // 对拷贝的路由数据按 meta.order 进行排序。
    copyRouter.sort((a: RouteRecordNormalized, b: RouteRecordNormalized) => {
      return (a.meta.order || 0) - (b.meta.order || 0);
    });

    // travel 函数递归地遍历路由数据，构建菜单树。
    function travel(_routes: RouteRecordRaw[], layer: number) {
      console.log('_routes',_routes)
      if (!_routes) return null; // 如果没有路由，则返回 null。

      const collector: any = _routes.map((element) => {
        // no access
        // 如果当前路由没有访问权限，则返回 null。
        if (!permission.accessRouter(element)) {
          return null;
        }

        // leaf node
        // 如果是叶子节点（没有子路由或者 hideChildrenInMenu 为 true），将 children 置为空数组并返回。
        if (element.meta?.hideChildrenInMenu || !element.children) {
          element.children = [];
          return element;
        }

        // route filter hideInMenu true
        // 过滤掉 hideInMenu 为 true 的子路由。
        element.children = element.children.filter(
          (x) => x.meta?.hideInMenu !== true
        );

        // Associated child node
        // 递归处理子路由。
        const subItem = travel(element.children, layer + 1);

        if (subItem.length) {
          element.children = subItem;
          return element;
        }
        // the else logic
        // 根据层级 决定是否包含该路由。
        if (layer > 1) {
          element.children = subItem;
          return element;
        }
        // 根据hideInMenu 属性决定是否包含该路由。
        if (element.meta?.hideInMenu === false) {
          return element;
        }

        return null;
      });
      return collector.filter(Boolean);
    }
    return travel(copyRouter, 0);
  });

  // useMenuTree 函数返回 menuTree 计算属性，以供组件使用。
  return {
    menuTree,
  };
}
