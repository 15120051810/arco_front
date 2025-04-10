<!-- 柱状图分层 -->
<template>
    <a-spin :loading="loading" style="width: 100%">
    <a-card
        class="general-card"
        :header-style="{ paddingBottom: 0 }"
        :body-style="{
            paddingTop: '20px',
        }"
        title="柱状分层图-项目为x轴"
    >
    <Chart height="289px" :option="optionsNoT" />
    </a-card>
  </a-spin>


  <a-spin :loading="loading" style="width: 100%">
    <a-card
        class="general-card"
        :header-style="{ paddingBottom: 0 }"
        :body-style="{
            paddingTop: '20px',
        }"
        title="柱状分层图-日期为x轴"
    >
    <Chart height="289px" :option="optionsT" />
    </a-card>
  </a-spin>

</template>


<script setup lang="ts">
import * as echarts from 'echarts';
import { ref, reactive } from 'vue'

const loading = ref<boolean>(false)

const grid = {
    left: 100,
    right: 100,
    top: 50,
    bottom: 50
};


const optionsNoT = {
    legend: {
        selectedMode: true,
        data: ['0-3', '4-6', '7-9','10-12','14-16'], // 图例的数据数组，每一项对应一个系列的名称
    },
    grid,
    tooltip: {
        trigger: 'axis',
        formatter: function (params:any) {
        let total = params.reduce((sum:any, item:any) => sum + item.value, 0);
        let result = `${params[0].name} (总计: ${total.toFixed(2)})<br/>`;
        params.forEach((item: { marker: any; seriesName: any; value: any; }) => {
            result += `${item.marker} ${item.seriesName}: ${item.value}<br/>`;
        });
        return result;
    }
    },
    yAxis: {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6', '项目7']
    },
    series:[
    {
        "name": "0-3",
        "type": "bar",
        "stack": "total",
        "barWidth": "60%",
        "label": {
            "show": true
        },
        "data": [
            0.062,
            0.1,
            0.1,
            0.18,
            0.17,
            0.12,
            0.1
        ]
    },
    {
        "name": "4-6",
        "type": "bar",
        "stack": "total",
        "barWidth": "60%",
        "label": {
            "show": true
        },
        "data": [
            0.19,
            0.07,
            0.05,
            0.07,
            0.04,
            0.09,
            0.08
        ]
    },
    {
        "name": "7-9",
        "type": "bar",
        "stack": "total",
        "barWidth": "60%",
        "label": {
            "show": true
        },
        "data": [
            0.13,
            0.10,
            0.11,
            0.13,
            0.1,
            0.12,
            0.12
        ]
    },
    {
        "name": "10-12",
        "type": "bar",
        "stack": "total",
        "barWidth": "60%",
        "label": {
            "show": true
        },
        "data": [
            0.093,
            0.12,
            0.11,
            0.08,
            0.08,
            0.12,
            0.15
        ]
    },
    {
        "name": "14-16",
        "type": "bar",
        "stack": "total",
        "barWidth": "60%",
        "data": [
            0.50,
            0.50,
            0.53,
            0.52,
            0.57,
            0.52,
            0.51
        ]
    }
]
    
};

const optionsT = {
    legend: {
        selectedMode: true,
        data: ['项目1', '项目2', '项目3', '项目4', '项目5'], // 图例的数据数组，每一项对应一个系列的名称

    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params:any) {
        let total = params.reduce((sum:any, item:any) => sum + item.value, 0);
        let result = `${params[0].name} (总计: ${total.toFixed(2)})<br/>`;
        params.forEach((item: { marker: any; seriesName: any; value: any; }) => {
            result += `${item.marker} ${item.seriesName}: ${item.value}<br/>`;
        });
        return result;
    }
    },
    grid,
    yAxis: {
        type: 'value'
    },
    xAxis: {
        type: 'category',
        data: ['0-3', '4-6', '7-9','10-12','14-16','16-18','20-24']
    },
    series: [
    {
        "name": "项目1",
        "type": "bar",
        "stack": "total",
        "barWidth": "60%",
        "label": {
            "show": true
        },
        "data": [
            0.062,
            0.1,
            0.1,
            0.18,
            0.17,
            0.12,
            0.1
        ]
    },
    {
        "name": "项目2",
        "type": "bar",
        "stack": "total",
        "barWidth": "60%",
        "label": {
            "show": true
        },
        "data": [
            0.19,
            0.07,
            0.05,
            0.07,
            0.04,
            0.09,
            0.08
        ]
    },
    {
        "name": "项目3",
        "type": "bar",
        "stack": "total",
        "barWidth": "60%",
        "label": {
            "show": true
        },
        "data": [
            0.13,
            0.10,
            0.11,
            0.13,
            0.1,
            0.12,
            0.12
        ]
    },
    {
        "name": "项目4",
        "type": "bar",
        "stack": "total",
        "barWidth": "60%",
        "label": {
            "show": true
        },
        "data": [
            0.093,
            0.12,
            0.11,
            0.08,
            0.08,
            0.12,
            0.15
        ]
    },
    {
        "name": "项目5",
        "type": "bar",
        "stack": "total",
        "barWidth": "60%",
        "label": {
            "show": true
        },
        "data": [
            0.50,
            0.50,
            0.53,
            0.52,
            0.57,
            0.52,
            0.51
        ]
    }
] 
    
};



</script>