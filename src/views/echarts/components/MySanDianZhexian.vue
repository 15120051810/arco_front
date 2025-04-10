<template>
    <a-card title="双Y轴（散点图+折线图）自定义封装组件，自动触发tooltip">


        <MyChart custom_id="aaaa" :custom_style="{ height: '300px', width: '100%' }" :data="option"
            :trigger_tooltip="true" />

    </a-card>
</template>


<script setup lang="ts">

import { ref, reactive } from 'vue'
import MyChart from './myChart.vue'
const loading = ref<boolean>(false)

// 示例数据
var xAxisData = ['1', '2', '3', '4'];
// var lineData1 = [3, 200, 40]; // 第一条折线图数据

var lineData1 = [
    {
        value: 3, min_bill_date: "2024-03-07", min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司",
    },
    {
        value: 200, min_bill_date: "2024-03-07", min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司",
    },
    {},
    {
        value: 40, min_bill_date: "2024-03-07", min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司",
    },
    {
        value: 40, min_bill_date: "2024-03-07", min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司",
    },

]; // 第一条折线图数据


// var lineData2 = [100, 35, 45]; // 第二条折线图数据
var lineData2 = [
    {
        value: 100, min_bill_date: "2024-03-07",
        min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司",
    },
    {
        value: 35, min_bill_date: "2024-03-07",
        min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司",
    },
    {
        value: 45, min_bill_date: "2024-03-07",
        min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司",
    },

]; // 第一条折线图数据


// var scatterData = [[8, 4], [3, 200]]; // 散点图数据
var scatterData = [
    {
        value: ['1', 3], min_bill_date: "2024-03-07", min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司"
        
    },
    {
        value: ['2', 200], min_bill_date: "2024-03-07", min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司"},
]

// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'axis', // 设置触发条件为悬停在数据项上
        show: false // 设置初始时不显示tooltip

        // axisPointer: {
        //     type: 'cross'
        // },
        // formatter: function (params: any) {

        //     console.log('params',params)
        //     var t = params[0]; 
        //     var tooltipContent = "";
        //     tooltipContent += "供应商名称：" + t.data.min_business_name + "<br/>";
        //     tooltipContent += "日期：" +  t.data.min_bill_date + "<br/>";
        //     tooltipContent += "人：" + t.data.min_saleman_name + "<br/>";
        //     tooltipContent += "价格：" + t.data.value + "<br/>";
        //     return tooltipContent;
        // }
    },

    xAxis: {
        type: 'category',
        data: xAxisData
    },
    yAxis: [{
        type: 'value',
        name: '最小值含税价',
        axisLabel: {
            formatter: '{value}'
        }
    }, {
        type: 'value',
        name: '最值标记',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '折线图1',
        type: 'line',
        data: lineData1,
        yAxisIndex: 0
    }, {
        name: '折线图2',
        type: 'line',
        data: lineData2,
        yAxisIndex: 0
    },
    {
        name: '散点图',
        type: 'scatter',
        data: scatterData,
        yAxisIndex: 1,
        symbol: 'circle', 
        symbolSize: 20, 
        itemStyle: { color: 'blue' },
        tooltip: {
            show: true, // 设置显示tooltip
            // trigger: 'none', // 设置触发条件为悬停在数据项上
            // alwaysShowContent:true,
            trigger: 'item', // 设置触发条件为悬停在数据项上
            // trigger: 'always', // 设置触发条件为悬停在数据项上

            formatter: function (params: any) {

                console.log('params', params)
                var tooltipContent = "";
                tooltipContent += "供应商名称：" + params.data.min_business_name + "<br/>";
                tooltipContent += "日期：" + params.data.min_bill_date + "<br/>";
                tooltipContent += "人：" + params.data.min_saleman_name + "<br/>";
                tooltipContent += "价格：" + params.data.value[1] + "<br/>";
                return tooltipContent;

            },

        },
    }]
};



</script>