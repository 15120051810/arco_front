<template>


    <div class="father">

        <a-card>
            <h3>父组件，</h3>
            <h4>我的车：{{ car }}</h4>
            <h4>儿子给的玩具：{{ toy }}</h4>
            <Son :car="car" :getToy="getToy" :carArry="carArry" />

            <button @click="changCar"> 父亲组件中改变：给孩子的车</button>
    <!-- <button @click="changCar"> 改变父亲给孩子的车</button> -->
    </a-card>
</div>


</template>

<script setup lang="ts">
import Son from './son.vue'
import { ref } from "vue";
// 数据
const car = ref('奔驰')
const toy = ref()
const carArry = ref()

// 方法
function getToy(value: string) {
    toy.value = value

}

const changCar = () => {

    console.log('改变车')
    car.value = car.value + 1

    carArry.value = [1, 2, 3, car.value]

}


</script>