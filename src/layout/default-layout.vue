<template>
  <!-- 你的代码是一个使用 Vue 3 的布局结构，其中包含了 NavBar、Menu、TabBar 和 Footer 等组件。
   整个布局支持响应式设计，并且根据 appStore 中的状态动态调整菜单、侧边栏和内容的显示与隐藏。 -->
   
  <!-- a-layout 包含顶部导航栏（NavBar）、侧边菜单（Menu）、内容区域（PageLayout）、页签栏（TabBar）和底部（Footer） -->
  <a-layout class="layout" :class="{ mobile: appStore.hideMenu }">
    <!-- 这是整个页面的主容器，layout 是 Arco 提供的布局组件，:class="{ mobile: appStore.hideMenu }" 是动态设置是否为移动模式的样式。 -->
    <div v-if="navbar" class="layout-navbar"> 
      <!-- 受 appStore.navbar 控制是否显示。 -->
      <NavBar />
    </div>
    <a-layout>
      <a-layout>
        <!-- appStore配置 {
          "theme": "light",
          "colorWeak": false,
          "navbar": true,
          "menu": true,
          "topMenu": false,
          "hideMenu": false,
          "menuCollapse": false,
          "footer": true,
          "themeColor": "#165DFF",
          "menuWidth": 220,
          "globalSettings": false,
          "device": "desktop",
          "tabBar": false,
          "menuFromServer": false,
          "serverMenu": []
        }
        -->
        <!--  Sider（侧边菜单栏） -->
        <a-layout-sider
          v-if="renderMenu" 
          v-show="!hideMenu"
          class="layout-sider"
          breakpoint="xl"
          :collapsed="collapsed"
          :collapsible="true"
          :width="menuWidth"
          :style="{ paddingTop: navbar ? '60px' : '' }"
          :hide-trigger="true"
          @collapse="setCollapsed"
        >
          <div class="menu-wrapper">
            <Menu />
          </div>
        </a-layout-sider>
        <!-- 🔹 Drawer（移动端抽屉菜单） 当在小屏幕或移动端时，侧边栏以弹出形式呈现，用 Drawer 替代 Sider。-->
        <a-drawer
          v-if="hideMenu"
          :visible="drawerVisible"
          placement="left"
          :footer="false"
          mask-closable
          :closable="false"
          @cancel="drawerCancel"
        >
          <Menu />
        </a-drawer>
        <!--  内容区（主体）-->
        <a-layout class="layout-content" :style="paddingStyle">
          <TabBar v-if="appStore.tabBar" />
          <a-layout-content>
            <!-- 这个组件里有viewroute 组件的占位符，匹配到啥路由就呈现 -->
            <PageLayout /> 
          </a-layout-content>
          <Footer v-if="footer" />
        </a-layout>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
  const filePath = new URL('', import.meta.url).pathname 
  console.log(filePath,'此文件开始执行.....')
  import { ref, computed, watch, provide, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useAppStore, useUserStore } from '@/store';
  import NavBar from '@/components/navbar/index.vue';
  import Menu from '@/components/menu/index.vue';
  import Footer from '@/components/footer/index.vue';
  import TabBar from '@/components/tab-bar/index.vue';
  import usePermission from '@/hooks/permission';
  import useResponsive from '@/hooks/responsive';
  import PageLayout from './page-layout.vue';

  const isInit = ref(false);
  const appStore = useAppStore(); // appStore 管理布局、菜单、设置等全局状态。
  const userStore = useUserStore(); // userStore 管理用户信息（例如角色）。
  const router = useRouter(); // permission 是权限 Hook，用于判断是否有访问某个路由的权限。
  const route = useRoute();
  const permission = usePermission();
  useResponsive(true);
  const navbarHeight = `60px`;
  const navbar = computed(() => appStore.navbar);
  const renderMenu = computed(() => appStore.menu && !appStore.topMenu);
  const hideMenu = computed(() => appStore.hideMenu);
  const footer = computed(() => appStore.footer);
  const menuWidth = computed(() => {
    return appStore.menuCollapse ? 48 : appStore.menuWidth;
  });
  const collapsed = computed(() => {
    return appStore.menuCollapse;
  });
  // 这个是给内容区域加内边距，避免 NavBar 和 Menu 遮住内容。
  const paddingStyle = computed(() => {
    const paddingLeft =
      renderMenu.value && !hideMenu.value
        ? { paddingLeft: `${menuWidth.value}px` }
        : {};
    const paddingTop = navbar.value ? { paddingTop: navbarHeight } : {};
    return { ...paddingLeft, ...paddingTop };
  });
  // 点击菜单收缩/展开按钮触发。  侧边栏收缩控制
  const setCollapsed = (val: boolean) => {
    if (!isInit.value) return; // for page initialization menu state problem
    appStore.updateSettings({ menuCollapse: val });
  };
  // 权限控制 当用户角色变化时，判断当前路由是否有权限访问，没权限就跳转到 404 页面。
  watch(
    () => userStore.role, // 第一个参数：监听的值 这是一个getter 函数，Vue 会自动收集里面用到的响应式数据（这里是 userStore.role），并在它变化时触发回调。
    (roleValue) => { // 第二个参数：回调函数。当 role 变化时：1 如果新角色存在（roleValue 有值） 2  但是 当前路由 route 不是他能访问的（判断权限）3 就跳转去 404 页面（表示无权访问）
      if (roleValue && !permission.accessRouter(route))
        router.push({ name: 'notFound' });
    }
  );
  // 提供一个 toggleDrawerMenu 方法给子组件（例如 NavBar 上的菜单按钮）调用，切换抽屉显示状态。
  const drawerVisible = ref(false);
  const drawerCancel = () => {
    drawerVisible.value = false;
  };
  provide('toggleDrawerMenu', () => {
    drawerVisible.value = !drawerVisible.value;
  });
  onMounted(() => {
    isInit.value = true;
  });
</script>

<style scoped lang="less">
  @nav-size-height: 60px;
  @layout-max-width: 1100px;

  .layout {
    width: 100%;
    height: 100%;
  }

  .layout-navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: @nav-size-height;
  }

  .layout-sider {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    height: 100%;
    transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
    &::after {
      position: absolute;
      top: 0;
      right: -1px;
      display: block;
      width: 1px;
      height: 100%;
      background-color: var(--color-border);
      content: '';
    }

    > :deep(.arco-layout-sider-children) {
      overflow-y: hidden;
    }
  }

  .menu-wrapper {
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    :deep(.arco-menu) {
      ::-webkit-scrollbar {
        width: 12px;
        height: 4px;
      }

      ::-webkit-scrollbar-thumb {
        border: 4px solid transparent;
        background-clip: padding-box;
        border-radius: 7px;
        background-color: var(--color-text-4);
      }

      ::-webkit-scrollbar-thumb:hover {
        background-color: var(--color-text-3);
      }
    }
  }

  .layout-content {
    min-height: 100vh;
    overflow-y: hidden;
    background-color: var(--color-fill-2);
    transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
  }
</style>
