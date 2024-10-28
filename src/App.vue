<template>
  <!-- a-config-provider： 这个组件来自 Arco Design Vue，用于提供全局配置。通过 :locale="locale"，为组件树中的所有组件设置语言环境 -->
  <a-config-provider :locale="locale">
    <!-- router-view：页面路径改变就会匹配相应的路由，在占位的地方展示 -->
    <router-view /> 
    <!-- global-setting：是一个全局设置的组件，可能用于提供语言切换、主题设置等。 -->
    <global-setting /> 
  </a-config-provider>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';
  import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
  import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';
  import GlobalSetting from '@/components/global-setting/index.vue';

  // useLocale 这个自定义 hook 用来获取当前语言 currentLocale。
  import useLocale from '@/hooks/locale';

  const { currentLocale } = useLocale();
  const locale = computed(() => {
    switch (currentLocale.value) {
      case 'zh-CN':
        return zhCN;
      case 'en-US':
        return enUS;
      default:
        return enUS;
    }
  });
</script>
