import type { RouteLocationNormalized } from 'vue-router'; // 来自 vue-router 的类型，用于表示路由的详细信息
import { defineStore } from 'pinia'; 
import {
  DEFAULT_ROUTE,
  DEFAULT_ROUTE_NAME,
  REDIRECT_ROUTE_NAME,
} from '@/router/constants'; // 从路由常量文件中导入，表示默认路由、默认路由名称和重定向路由名称。
import { isString } from '@/utils/is'; // 从工具函数中导入，用于判断一个值是否是字符串。
import { TabBarState, TagProps } from './types'; // 从 types 文件中导入，用于定义状态和标签属性的类型。


// 格式化标签函数 将路由对象格式化为标签属性对象。返回的对象包含标签的标题、名称、完整路径、查询参数和是否忽略缓存的信息。
const formatTag = (route: RouteLocationNormalized): TagProps => {
  const { name, meta, fullPath, query } = route;
  return {
    title: meta.locale || '',
    name: String(name),
    fullPath,
    query,
    ignoreCache: meta.ignoreCache,
  };
};

//  排除列表 包含不允许被添加到标签页的路由名称。
const BAN_LIST = [REDIRECT_ROUTE_NAME];

// 定义了 state，返回一个 TabBarState 类型的对象
// 这个 Pinia store 主要用于管理应用中的标签页状态，包括标签页的列表、缓存的标签页和各种操作（如添加、删除、更新标签页及其缓存）。
// 通过 formatTag 函数格式化路由为标签属性，并根据需要更新标签页和缓存列表。
const useTabBarStore = defineStore('tabBar', {
  state: (): TabBarState => ({
    cacheTabList: new Set([DEFAULT_ROUTE_NAME]), // 一个 Set 对象，用于存储缓存的标签页名称，初始化包含默认路由名称。
    tagList: [DEFAULT_ROUTE], // 存储标签页的数组，初始化包含默认路由。
  }),

  getters: {
    // 返回标签页的列表。
    getTabList(): TagProps[] {
      return this.tagList;
    },
    // 返回缓存的标签页名称列表，将 Set 转换为数组。
    getCacheList(): string[] {
      return Array.from(this.cacheTabList);
    },
  },

  actions: {
    // 更新标签页列表。如果路由名称在 BAN_LIST 中，则不进行操作。否则，将格式化后的标签添加到标签列表中，并根据路由的 ignoreCache 属性决定是否添加到缓存列表中。
    updateTabList(route: RouteLocationNormalized) {
      if (BAN_LIST.includes(route.name as string)) return;
      this.tagList.push(formatTag(route));
      if (!route.meta.ignoreCache) {
        this.cacheTabList.add(route.name as string);
      }
    },
    // 删除指定索引的标签页，并从缓存列表中移除该标签页。
    deleteTag(idx: number, tag: TagProps) {
      this.tagList.splice(idx, 1);
      this.cacheTabList.delete(tag.name);
    },
    // 将标签页名称添加到缓存列表中（仅当名称是非空字符串时）。
    addCache(name: string) {
      if (isString(name) && name !== '') this.cacheTabList.add(name);
    },
    // 从缓存列表中删除指定标签页的名称。
    deleteCache(tag: TagProps) {
      this.cacheTabList.delete(tag.name);
    },
    // 刷新标签页列表，将传入的标签页列表设置为新的标签页列表，并清除缓存列表。仅将 ignoreCache 为 false 的标签页名称添加到缓存列表中。
    freshTabList(tags: TagProps[]) {
      this.tagList = tags;
      this.cacheTabList.clear();
      // 要先判断ignoreCache
      this.tagList
        .filter((el) => !el.ignoreCache)
        .map((el) => el.name)
        .forEach((x) => this.cacheTabList.add(x));
    },
    // 重置标签页列表为默认路由，并清空缓存列表，仅保留默认路由名称在缓存列表中。
    resetTabList() {
      this.tagList = [];
      this.cacheTabList.clear();
      this.cacheTabList.add(DEFAULT_ROUTE_NAME);
    },
  },
});

export default useTabBarStore;
