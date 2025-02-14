<template>
    <a-spin :loading="loading" style="width: 100%">
        <a-card title="双Y轴（散点图+折线图）自定义封装组件，自动触发tooltip">

        <Chart :options="options" :width="'100%'" :height="'300px'" ></Chart>
        </a-card>
    </a-spin>
</template>


<script setup lang="ts">

import { ref, reactive } from 'vue'
import Chart from '@/components/chart/index.vue'



const loading = ref<boolean>(false)

const options = reactive({
    tooltip: {
        trigger: 'axis',
        formatter: function (params:any) {
            let tooltipText = '';
            params.forEach(function (item:any) {
                console.log('item',item)
                tooltipText += item.seriesName + ': ' + item.value.toLocaleString() + '<br>';
            });
            return tooltipText;
        }
    },
    xAxis: {
        type: 'category',
        data: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5', 'Point 6']
    },
    yAxis: {
        type: 'value',
        min: 976000, // 设置 y 轴最小值
        max: 990000  // 设置 y 轴最大值
    },
    series: [
        {
            name: 'Trend',
            type: 'line',
            data: [988000, 986000, 984000, 981000, 979000, 977000],
            label: {
                show: true,
                position: 'top',
                formatter: function (params:any) {
                    return params.value.toLocaleString();
                },
                color: 'black', // 标签颜色
                fontSize: 12  // 标签字体大小
            }
        }
    ]
});


</script>