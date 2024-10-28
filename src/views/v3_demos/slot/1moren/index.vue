<template>
    <div class="container">

        <Category title="啥都不出传">
        </Category>

        <Category title="美食">
            <img class="category-img" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
        </Category>

        <Category title="游戏">
            <ul>
                <li v-for="(g, index) in games" :key="index">{{ g }}</li>
            </ul>
        </Category>

        <Category title="电影">
            <video class="category-img" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
        </Category>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Category from './components/Category.vue'

const foods = ref(['火锅', '烧烤', '小龙虾', '牛排'])
const games = ref(['红色警戒', '穿越火线', '劲舞团', '超级玛丽'])
const films = ref(['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》'])


</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
}

.category-img {
    max-width: 100%;
    height: auto;
    display: block;
}
</style>
