import { App } from 'vue';
import { use } from 'echarts/core'; // 导入 echarts 核心库
// 导入渲染器
import { CanvasRenderer } from 'echarts/renderers';

// 在 ECharts 中，每种图表类型都需要显式导入才能使用。导入散点图（scatter）系列类型
import { BarChart, LineChart, PieChart, RadarChart,ScatterChart } from 'echarts/charts';


// 这些组件是 ECharts 提供的核心组件，用于构建和定制图表。通过导入这些组件，您可以在图表中使用它们提供的功能和特性。
import {
  GridComponent, // 网格组件，用于定义图表的布局和边界。
  TooltipComponent, // 工具提示组件，用于显示鼠标悬停在图表上时的提示信息。
  LegendComponent, // 图例组件，用于显示不同系列的标记及其名称。
  DataZoomComponent, // 数据区域缩放组件，用于在数据较多时进行缩放和平移操作。
  GraphicComponent,  // 图形组件，用于在图表中添加自定义的图形元素。
} from 'echarts/components';
import Chart from './chart/index.vue';
import Breadcrumb from './breadcrumb/index.vue';

// Manually introduce ECharts modules to reduce packing size

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

export default {
  install(Vue: App) {
    Vue.component('Chart', Chart);
    Vue.component('Breadcrumb', Breadcrumb);
  },
};
