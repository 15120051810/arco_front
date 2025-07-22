<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>我的玩具：{{ toy }}</h4>
        <h4>父给我的车：{{ car }}</h4>
        <h4>父给改变我的车Arry：{{ carArry }}</h4>

        <button @click="getToy(toy)">玩具给父亲</button>
        <button @click="changePCar">修改父亲给的玩具</button>

    </div>
</template>

<script setup >

import { ref, onMounted, toRefs } from "vue";
const toy = ref('奥特曼')

const props = defineProps(['car', 'getToy', 'carArry'])
const { car, carArry } = toRefs(props)


onMounted(() => {
    console.log('carArry', carArry)
})

// 不可以修改父亲给的车 触发警告
function changePCar() {
    car.value = '奔驰喷漆'
}

</script>