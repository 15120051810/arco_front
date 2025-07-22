<!-- 这段代码是一个 Vue 3 组件的实现，使用 TypeScript 和 JSX（TSX）语法。这个组件是一个侧边菜单栏的实现，具体功能包括：

菜单的展开与折叠：支持在桌面设备上折叠和展开菜单。
菜单的导航：点击菜单项可以进行页面导航，包括外部链接和内部路由。
动态菜单渲染：根据路由配置动态生成菜单项。 -->


<script lang="tsx">
  const filePath = new URL('', import.meta.url).pathname
  console.log(filePath,'此文件开始执行....')

  import { defineComponent, ref, h, compile, computed } from 'vue';
  import { useI18n } from 'vue-i18n';
  // Vue Router 中的钩子，用于获取当前路由信息和操作路由跳转。RouteRecordRaw Vue Router 中的路由记录类型，定义路由的结构。
  import { useRoute, useRouter, RouteRecordRaw } from 'vue-router'; 
  import type { RouteMeta } from 'vue-router'; // RouteMeta: 路由元信息类型，包含路由的自定义配置。
  import { useAppStore } from '@/store';
  import { listenerRouteChange } from '@/utils/route-listener'; // listenerRouteChange: 用于监听路由变化，执行相应的处理函数。
  import { openWindow, regexUrl } from '@/utils'; // openWindow 和 regexUrl: 实用工具函数，用于处理外部链接打开和 URL 校验。
  import useMenuTree from './use-menu-tree'; // 自定义函数，用于获取菜单树的数据。
  import { join } from 'lodash';

  export default defineComponent({
    emit: ['collapse'],
    setup() {
      const { t } = useI18n();
      const appStore = useAppStore();
      const router = useRouter();
      const route = useRoute();
      const { menuTree } = useMenuTree();
      console.log(filePath,'获取到后端的路由树菜单useMenuTree',JSON.stringify(menuTree.value))
      const collapsed = computed({ //计算属性，用于控制菜单的展开和折叠状态。根据 appStore.device 判断是否是桌面设备来决定菜单的折叠状态。

        get() {
          if (appStore.device === 'desktop') return appStore.menuCollapse;
          return false;
        },
        set(value: boolean) {
          appStore.updateSettings({ menuCollapse: value });
        },
      });

      const topMenu = computed(() => appStore.topMenu); // 计算属性，用于获取顶级菜单配置。
      const openKeys = ref<string[]>([]); // 响应式数据，用于控制展开的菜单项
      const selectedKey = ref<string[]>([]); // 响应式数据，用于控制选中的菜单项。

      const goto = (item: RouteRecordRaw) => { // 根据菜单项的 path 进行页面导航。处理了外部链接和内部路由。
        // Open external link
        if (regexUrl.test(item.path)) {
          openWindow(item.path);
          selectedKey.value = [item.name as string];
          return;
        }
        // Eliminate external link side effects
        const { hideInMenu, activeMenu } = item.meta as RouteMeta;
        if (route.name === item.name && !hideInMenu && !activeMenu) {
          selectedKey.value = [item.name as string];
          return;
        }
        // Trigger router change
        router.push({
          name: item.name,
        });
      };
      const findMenuOpenKeys = (target: string) => { // 递归查找需要展开的菜单项的 key。
        const result: string[] = [];
        let isFind = false;
        const backtrack = (item: RouteRecordRaw, keys: string[]) => {
          if (item.name === target) {
            isFind = true;
            result.push(...keys);
            return;
          }
          if (item.children?.length) {
            item.children.forEach((el) => {
              backtrack(el, [...keys, el.name as string]);
            });
          }
        };
        menuTree.value.forEach((el: RouteRecordRaw) => {
          if (isFind) return; // Performance optimization
          backtrack(el, [el.name as string]);
        });
        return result;
      };
      listenerRouteChange((newRoute) => { // 监听路由变化，并更新菜单的展开状态和选中状态。
        // console.log(filePath,'newRoute',JSON.stringify(newRoute))

        const { requiresAuth, activeMenu, hideInMenu } = newRoute.meta;
        console.log(filePath,'requiresAuth, activeMenu, hideInMenu',requiresAuth, activeMenu, hideInMenu )
        if (requiresAuth && (!hideInMenu || activeMenu)) {
          const menuOpenKeys = findMenuOpenKeys(
            (activeMenu || newRoute.name) as string
          );

          const keySet = new Set([...menuOpenKeys, ...openKeys.value]);
          openKeys.value = [...keySet];

          selectedKey.value = [
            activeMenu || menuOpenKeys[menuOpenKeys.length - 1],
          ];
        }
      }, true);
      const setCollapse = (val: boolean) => { // 设置菜单的折叠状态，只在桌面设备上更新 appStore 中的设置。
        if (appStore.device === 'desktop')
          appStore.updateSettings({ menuCollapse: val });
      };

      const renderSubMenu = () => { // 递归渲染子菜单，基于 menuTree 数据。
        function travel(_route: RouteRecordRaw[], nodes = []) {
          if (_route) {
            _route.forEach((element) => {
              // This is demo, modify nodes as needed
              // 这个渲染会读取后端配置的信息
              const icon = element?.meta?.icon
                ? () => h(compile(`<${element?.meta?.icon}/>`))
                : null;
              const node =
                element?.children && element?.children.length !== 0 ? (
                  <a-sub-menu
                    key={element?.name}
                    v-slots={{
                      icon,
                      title: () => h(compile(t(element?.meta?.locale || ''))),
                    }}
                  >
                    {travel(element?.children)}
                  </a-sub-menu>
                ) : (
                  <a-menu-item
                    key={element?.name}
                    v-slots={{ icon }}
                    onClick={() => goto(element)}
                  >
                    {t(element?.meta?.locale || '')}
                  </a-menu-item>
                );
              nodes.push(node as never);
            });
          }
          return nodes;
        }
        return travel(menuTree.value);
      };

      return () => (
        // 使用 a-menu 组件来渲染菜单。通过 mode、v-model:collapsed、v-model:open-keys、selected-keys 等属性来控制菜单的显示和行为。
        <a-menu 
          mode={topMenu.value ? 'horizontal' : 'vertical'}
          v-model:collapsed={collapsed.value}
          v-model:open-keys={openKeys.value}
          show-collapse-button={appStore.device !== 'mobile'}
          auto-open={false}
          selected-keys={selectedKey.value}
          auto-open-selected={true}
          level-indent={34}
          style="height: 100%;width:100%;"
          onCollapse={setCollapse}
        >
          {renderSubMenu()}
        </a-menu>
      );
    },
  });
</script>

<style lang="less" scoped>
:deep(.arco-menu-inner) {
  .arco-menu-inline-header {
    display: flex;
    align-items: center;
  }

  .arco-icon {
    &:not(.arco-icon-down) {
      font-size: 18px;
    }
  }
}

// 如果没有icon 会太靠后 所以修改这个
:deep(.arco-menu-indent) {
  width: 19px !important;
}

</style>
