<template>
    <a-spin :loading="loading" style="width: 100%">
        <a-card class="general-card" :header-style="{ paddingBottom: 0 }" :body-style="{
        paddingTop: '20px',
    }" title="双Y轴（散点图+折线图）">
            <Chart height="289px" :option="option"  />

        </a-card>
    </a-spin>
</template>


<script setup lang="ts">

import { ref, reactive } from 'vue'

const loading = ref<boolean>(false)

// 示例数据
var xAxisData = ['1', '2', '3','4','5'];
// var lineData1 = [3, 200, 40]; // 第一条折线图数据

var lineData1 = [
    {
        value: 3, min_bill_date: "2024-03-07",min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司",
    },
    {
        value: 200, min_bill_date: "2024-03-07",min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司",
    },
    {},
    {
        value: 40, min_bill_date: "2024-03-07",min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司",
    },
    {
        value: 40, min_bill_date: "2024-03-07",min_saleman_name: "王晓燕",
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
    {},
    {
        value: 45, min_bill_date: "2024-03-07",
        min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司",
    },

]; // 第一条折线图数据


// var scatterData = [[8, 4], [3, 200]]; // 散点图数据
var scatterData = [
    { value: ['1', 3], min_bill_date: "2024-03-07",min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司",symbol: 'circle', symbolSize: 20, itemStyle: { color: 'blue' } },
    { value: ['2', 200], min_bill_date: "2024-03-07",min_saleman_name: "王晓燕",
        min_business_name: "重庆医药集团（甘肃）有限公司",symbol: 'circle', symbolSize: 20, itemStyle: { color: 'blue' } },
]

// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'axis', // 设置触发条件为悬停在数据项上
        // show: true // 设置初始时不显示tooltip

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
        nameLocation: 'middle', // 将名称放在轴线末端 right，
        nameGap: 40, // 设置名称与轴线的距离
        nameRotate: 90, // 将名称旋转 90 度
        nameTextStyle: { // 设置名称的字体样式
            fontSize: 18 // 设置字体大小为 18px
        },
        axisLabel: {
            formatter: '{value}',
            rotate: 0 // 旋转角度，默认为 0，表示水平显示

        }
    }, 
    {
        type: 'value',
        name: '最值标记',
        nameLocation: 'middle', // 将名称放在轴线末端 right，
        nameGap: 40, // 设置名称与轴线的距离
        nameRotate: 90, // 将名称旋转 90 度
        nameTextStyle: { // 设置名称的字体样式
            fontSize: 18 // 设置字体大小为 18px
        },
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
        tooltip: {
            show: true, // 设置显示tooltip
            // trigger: 'none', // 设置触发条件为悬停在数据项上
            trigger: 'item', // 设置触发条件为悬停在数据项上
            formatter: function (params: any) {

                console.log('params', params)
                var tooltipContent = "";
                tooltipContent += "供应商名称：" + params.data.min_business_name + "<br/>";
                tooltipContent += "日期：" + params.data.min_bill_date + "<br/>";
                tooltipContent += "人：" +params.data.min_saleman_name + "<br/>";
                tooltipContent += "价格：" + params.data.value[1] + "<br/>";
                return tooltipContent;

            },

        },
    }]
};



</script>