<template>
    <div :id="custom_id" :style="custom_style"></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts';

import { ref, onMounted, watch, onUnmounted } from 'vue';

const props = defineProps({
    data: {
        require: true,
        type: [String, Number, Boolean, Object, Array]
    },
    custom_style: {
        require: true,
        type: Object
    },
    custom_id: {
        require: true,
        type: String
    },
    echarts_type: {
        require: false,
        default: 'line',
        type: String
    },
    trigger_tooltip: {
        require: false,
        default: false,
        type: Boolean
    }
})

const resize = () => {
    let el: any = document.getElementById(props.custom_id as any)
    echarts.getInstanceByDom(el)?.resize();
}

watch(() => props.data, (newValue: any, oldValue) => {
    let el: any = document.getElementById(props.custom_id as any)
    echarts.getInstanceByDom(el)?.setOption(newValue)
}, { deep: true });

onMounted(() => {
    let el: any = document.getElementById(props.custom_id as any)

    console.log("el", echarts.getInstanceByDom(el))
    console.log("props", props.data)

    if (echarts.getInstanceByDom(el)) {
        console.log("props", props.data)

        echarts.getInstanceByDom(el)?.setOption(props.data as any);

    }
    else {
        let mychart = echarts.init(el)

        mychart.setOption(props.data as any)
        console.log('触发')
        // 初始化时手动触发显示散点图的 tooltip

        try {
            mychart.dispatchAction({
                type: 'showTip',
                seriesIndex: 2, // 散点图所在的 series 索引
                dataIndex: [0, 1] // 最小值和最大值的数据索引
            });
            console.log('触发成功')
        }
        catch {
            console.log('触发失败')

        }


    }
    //在浏览器窗口大小发生改变时，即触发了 resize 事件时，执行 resize 函数。

    window.addEventListener('resize', resize)
})

onUnmounted(() => {
    window.removeEventListener("resize", resize);
})
</script>