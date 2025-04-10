<template>
    <a-spin :loading="loading" style="width: 100%">
    <a-card
        class="general-card"
        :header-style="{ paddingBottom: 0 }"
        :body-style="{
            paddingTop: '20px',
        }"
        title="双Y轴"
    >
    <Chart height="289px" :option="chartOption" />

    </a-card>
  </a-spin>
</template>


<script setup lang="ts">

import { ref, reactive } from 'vue'

const loading = ref<boolean>(false)
const colors = ['#5470C6', '#EE6666'];

const chartOption = {

tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'cross',
    },
},
legend: {
    data: ['选择指标', '对比指标'],
},
xAxis: {
    type: 'category',
    data: ['一月', '二月', '三月', '四月', '五月'],
},
yAxis: [
    {
        type: 'value',
        name: 'Y轴1',
        position: 'left',
    },
    {
        type: 'value',
        name: 'Y轴2',
        position: 'right',
    },
],
series: [
    {
        name: '选择指标',
        type: 'line',
        data: [100, 200, 150, 300, 25],
        yAxisIndex: 0, // 使用左侧的Y轴
    },
    {
        name: '对比指标',
        type: 'line',
        data: [10, 2, 3, 4, 5],
        yAxisIndex: 1, // 使用右侧的Y轴
    },
],
};

</script>