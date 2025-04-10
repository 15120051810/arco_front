import { App } from 'vue';
import { use } from 'echarts/core'; // 这是 ECharts 的核心库，用于手动注册 ECharts 所需的模块。 通过 use() 函数将不同的渲染器、图表类型和组件注册到 ECharts。

// 引入 Canvas 渲染器，用于 ECharts 图表的渲染。
import { CanvasRenderer } from 'echarts/renderers';

// 引入不同类型的图表（条形图、折线图、饼图、雷达图、散点图），这些图表需要显式导入才能使用。
import { BarChart, LineChart, PieChart, RadarChart,ScatterChart } from 'echarts/charts';


// 引入 ECharts 的核心组件，这些组件提供了图表的布局、提示、图例、缩放功能等。
import {
  GridComponent, // 网格组件，用于定义图表的布局和边界。
  TooltipComponent, // 工具提示组件，用于显示鼠标悬停在图表上时的提示信息。
  LegendComponent, // 图例组件，用于显示不同系列的标记及其名称。
  DataZoomComponent, // 数据区域缩放组件，用于在数据较多时进行缩放和平移操作。
  GraphicComponent,  // 图形组件，用于在图表中添加自定义的图形元素。
} from 'echarts/components';
import Chart from './chart/index.vue'; // 导入自定义的 Chart 组件，这个组件将用于展示 ECharts 图表。
import Breadcrumb from './breadcrumb/index.vue'; // 导入自定义的 Breadcrumb 组件，用于展示面包屑导航。


// Manually introduce ECharts modules to reduce packing size
// 这里手动将 ECharts 的各个渲染器、图表类型和组件注册到 ECharts 中。通过这种方式，ECharts 只加载你需要的模块，减少了打包的大小，优化了性能。
use([
  CanvasRenderer,
  BarChart,
  LineChart,
  PieChart,
  RadarChart,
  ScatterChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  GraphicComponent,
]);


//  Vue 插件安装：
// 在 install 方法中，Vue.component('Chart', Chart) 和 Vue.component('Breadcrumb', Breadcrumb) 将 Chart 和 Breadcrumb 组件注册为全局组件，使得你可以在 Vue 应用中的任何地方使用这两个组件：

// <Chart />：用于展示 ECharts 图表。
// <Breadcrumb />：用于显示导航。
// 插件导出：最后，插件作为 install 方法的形式导出，使得它可以通过 app.use() 调用install 就可以 在 Vue 应用中安装和使用。
export default {
  install(Vue: App) { 
    Vue.component('Chart', Chart);
    Vue.component('Breadcrumb', Breadcrumb);
  },
};
