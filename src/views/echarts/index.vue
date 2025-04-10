<template>
    <div>
        <!-- <sanDianTu></sanDianTu> -->

        <!-- <sanDianZheXian> </sanDianZheXian> -->

        <!-- <MySanDianZhexian> </MySanDianZhexian> -->
        
        <!-- 数据值间隔不大，如何查看明显趋势 -->
        <!-- <quShiTU></quShiTU> -->

        <!-- 柱状图分层 -->
        <Barfenceng :id='"Barfenceng"' :theme='"macarons"'></Barfenceng>

        <!-- 双y轴 -->
        <DoubleYxixs :id='"DoubleYxixs"' :theme='"macarons"'></DoubleYxixs>
    </div>
</template>


<script setup>

import { ref, reactive } from 'vue'
import sanDianTu from './components/sanDianTu.vue';
import sanDianZheXian from './components/sanDianZhexian.vue'
import MySanDianZhexian from './components/MySanDianZhexian.vue'
import quShiTU from './components/quShiTU.vue'
import Barfenceng from './components/Barfenceng.vue'
import DoubleYxixs from './components/DoubleYxixs.vue'


</script>