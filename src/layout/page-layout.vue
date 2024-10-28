<template>
  <!-- 使用插槽语法将 Component 和 route 解构出来，Component 是当前路由对应的组件，route 是当前路由对象。 -->
  <router-view v-slot="{ Component, route }"> 
    <!--  name="fade"指定过渡效果的名称，这里使用了 fade 动画。
          mode="out-in"确保组件在过渡时先退出后进入。 
          appear: 使过渡在组件首次渲染时也会生效。
      -->
    <transition name="fade" mode="out-in" appear>
      <!-- 动态组件，根据 Component 渲染当前路由组件。
       v-if="route.meta.ignoreCache": 如果路由的 meta 中的 ignoreCache 属性为 true，不使用缓存，直接渲染组件。
      :key="route.fullPath": 使用路由的完整路径作为组件的 key，确保路由切换时组件能重新渲染。
      -->
      <component
        :is="Component"
        v-if="route.meta.ignoreCache"
        :key="route.fullPath"
      />
      <!-- 
        <keep-alive>:
        用于缓存组件，以提升性能和避免重复渲染。
        v-else: 如果 ignoreCache 不为 true，则使用缓存。
        :include="cacheList": 只缓存 cacheList 中列出的组件。
        cacheList 是从 tabBarStore 中获取的缓存列表。
        -->
      <keep-alive v-else :include="cacheList">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import { useTabBarStore } from '@/store';

  const tabBarStore = useTabBarStore();

  const cacheList = computed(() => tabBarStore.getCacheList);
</script>

<style scoped lang="less"></style>
