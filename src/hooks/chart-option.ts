import { computed } from 'vue';
import { EChartsOption } from 'echarts';
import { useAppStore } from '@/store';

// for code hints
// import { SeriesOption } from 'echarts';
// Because there are so many configuration items, this provides a relatively convenient code hint.
// When using vue, pay attention to the reactive issues. It is necessary to ensure that corresponding functions can be triggered, TypeScript does not report errors, and code writing is convenient.

// 定义了一个名为 optionsFn 的接口，表示一个函数类型，该函数接收一个布尔类型参数 isDark，并返回 EChartsOption 类型的配置选项。
interface optionsFn {
  (isDark: boolean): EChartsOption;
}

export default function useChartOption(sourceOption: optionsFn) {
  console.log("sourceOption--->",sourceOption)
  const appStore = useAppStore(); // 调用 useAppStore Hook 获取应用的状态管理对象。
  
  // 创建一个计算属性 isDark，用于根据应用的主题状态（appStore.theme）动态计算当前是否为暗黑主题。
  const isDark = computed(() => {
    return appStore.theme === 'dark';
  });
  // echarts support https://echarts.apache.org/zh/theme-builder.html
  // It's not used here
  // TODO echarts themes
  // 创建一个计算属性 chartOption，根据 sourceOption 函数和 isDark 计算属性的值生成图表的配置选项
  const chartOption = computed<EChartsOption>(() => {
    return sourceOption(isDark.value);
  });
  // 返回一个包含 chartOption 计算属性的对象，使其可以在组件中使用。
  return {
    chartOption,
  };
}
