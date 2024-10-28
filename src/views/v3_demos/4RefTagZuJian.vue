<template>

<div>

    <div ref="my_stick">
        <a-card  style="top: 5px;">
            <h1>需要固定</h1>
        </a-card>
    </div>

    <div>
        <a-card style="top: 5px;height: 1000px;">
            <h1> {{ demoData }}</h1>
            <button @click="demoData++">加</button>
        </a-card>


    </div>


</div>

</template>

<script setup>
import { ref, onMounted } from 'vue'

const my_stick = ref('my_stick')

const demoData = ref(0)

function handleScroll() {
    if (my_stick.value) {
        // 获取滚动位置和元素顶部位置
        const scrollTop = window.scrollY;
        const height = my_stick.value.offsetHeight; // 或者 use getBoundingClientRect().height

        // 根据滚动位置决定是否固定元素
        if (scrollTop > height) {
            my_stick.value.classList.add('fixed');
        } else {
            my_stick.value.classList.remove('fixed');
        }
    }
}

onMounted(() => {
    console.log('my_stick', my_stick)
    window.addEventListener('scroll', handleScroll);


})

</script>

<style scoped>
.my_stick {
    background-color: #f8f9fa;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
}

/* 固定位置样式 */
.fixed {
    position: fixed;
    top: 5;
    left: 100;
    z-index: 1000;
    /* 确保在上方 */
}

/* 内容样式 */
.content {
    margin-top: 50px;
    /* 根据 stickyElement 的高度调整 */
}
</style>