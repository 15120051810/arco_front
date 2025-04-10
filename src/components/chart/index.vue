<template>
  <VCharts
    v-if="renderChart"
    :option="options"
    :autoresize="autoResize"
    :theme="chartTheme"
    :style="{ width, height }"
  />
</template>

<script lang="ts" setup>
import { ref, nextTick, computed } from 'vue';
import VCharts from 'vue-echarts';
  // import { useAppStore } from '@/store';

const props = defineProps({
    id: String,
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    autoResize: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '100%',
    },
    theme: {
        type: String,
        default: '',  // 默认主题为空
    },
  });
  // const appStore = useAppStore();
  // const theme = computed(() => {
  //   if (appStore.theme === 'dark') return 'dark';
  //   return '';
  // });
  const renderChart = ref(false);

  // 下面 这段代码的作用是在下一个 DOM 更新周期时，将 renderChart 变量的值设置为 true，以触发某些逻辑来渲染图表或进行其他操作。
  //  这是 Vue 3 提供的一个全局函数 nextTick，它接收一个回调函数作为参数，并在 DOM 更新之后执行这个回调函数。它的作用是确保在下一个 DOM 更新周期时执行回调，这样可以避免在当前更新周期中直接操作DOM，从而确保操作的稳定性和正确性。
  nextTick(() => {
    // 在 nextTick 的回调函数中，将 renderChart 的值设置为 true。这个变量可能是一个响应式的变量，用于控制图表的渲染。通过将其设置为 true，
    // 可能会触发某些逻辑，导致图表被渲染或重新渲染。
    renderChart.value = true;
  });

  const chartTheme = computed(() => {
    return props.theme || 'macarons'; // 如果未指定主题，则使用 'macarons'
});
</script>

<style scoped lang="less"></style>
