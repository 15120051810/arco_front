<template>

    <a-card>
        <div style="margin-bottom: 10px">
            <a-switch v-model="scrollbar" />
            Virtual Scrollbar
        </div>
        <a-list :max-height="2000"
            
             @reach-bottom="fetchData" 
            :scrollbar="scrollbar">
            <template #header>
                List title
            </template>
            <template #scroll-loading>
                <div v-if="bottom">No more data</div>
                <a-spin v-else />
            </template>
            <a-list-item v-for="item of data">{{ item }}</a-list-item>
        </a-list>
    </a-card>

</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const current = ref(1);
const bottom = ref(false);
const data = reactive<any>([]);
const scrollbar = ref(true);

const fetchData = () => {
    console.log('reach bottom!');
    if (current.value <= 5) {
        window.setTimeout(() => {
            let index: number = data.length

            data.push(
                `Beijing Bytedance Technology Co., Ltd. ${index + 1}`,
                `Bytedance Technology Co., Ltd. ${index + 2}`,
                `Beijing Toutiao Technology Co., Ltd. ${index + 3}`,
                `Beijing Volcengine Technology Co., Ltd. ${index + 4}`,
                `China Beijing Bytedance Technology Co., Ltd. ${index + 5}`
            );
            current.value += 1
        }, 2000)
    } else {
        console.log('没数了!');
        bottom.value = true
    }
}

</script>