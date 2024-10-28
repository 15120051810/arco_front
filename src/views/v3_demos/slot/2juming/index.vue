<template>
	<div class="container">

		<Category title="美食" >
			<img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">

            <template #footer>
                <a class="foot" href="http://www.atguigu.com">更多美食</a>
            </template>

		</Category>

		<Category title="游戏" >
			<ul slot="center">
				<li v-for="(g,index) in games" :key="index">{{g}}</li>
			</ul>
			<div class="foot" slot="footer">
				<a href="http://www.atguigu.com">单机游戏</a>
				<a href="http://www.atguigu.com">网络游戏</a>
			</div>
		</Category>

		<Category title="电影">
            <!--两种方式传递  #center v-slot:-->
            <template #center>
                <video style="max-width: 100%;height: auto;" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            </template>

			<template v-slot:footer>
				<div class="foot">
					<a href="http://www.atguigu.com">经典</a>
					<a href="http://www.atguigu.com">热门</a>
					<a href="http://www.atguigu.com">推荐</a>
				</div>
				<h4>欢迎前来观影</h4>
			</template>
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
	.container,.foot{
		display: flex;
		justify-content: space-around;
	}
	h4{
		text-align: center;
	}
</style>
