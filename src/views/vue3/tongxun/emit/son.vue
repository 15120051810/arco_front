<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>我的玩具：{{ toy }}</h4>
        <h4>父给我的车：{{ car }}</h4>
        <h4>父给我的车，我创建的副本：{{ carCopy }}</h4>
        <h4>父给改变我的车Arry：{{ carArry }}</h4>

        <button @click="toFather">玩具给父亲</button>


        <br>
        <button @click="changeFatherCar0">0 儿本地创建一个父亲车的副本，儿可以自己修改这个副本,wath监听到了，可以通知父亲做出修改，下面实现了另外两种通知，1 事件通知 2
            v-model</button>

        <br>
        <button @click="changeFatherCar1">1 直接修改父亲给的车，不允许，因为props是只读的，触发报警</button>

        <br>
        <button @click="changeFatherCar2">2 事件通知：父亲修改车，让父亲去修改</button>

        <br>
        <button @click="updateFoodArray">3 修改父亲给的食物，通过v-model</button>

    </div>
</template>

<script setup name="Child">

import { ref, onMounted, toRefs, watch } from "vue";
const toy = ref('奥特曼')

const props = defineProps(['car', 'carArry', 'foodArry'])
// 当使用 toRefs(props) 解构时，它只是为 props 中的每个属性创建一个响应式引用，而没有创建副本，因此子组件不能直接修改这些引用的值。这是因为 Vue 的 props 是只读的，直接修改 props 或其引用会触发 Vue 的警告。
const { car, carArry, foodArry } = toRefs(props) // 解构了，并没有创建副本，儿子不可以修改
const carCopy = ref(props.car) // 创建车的副本
const emit = defineEmits(['to-father', 'sonChangeCar', 'update:foodArry'])

onMounted(() => {
    console.log('carArry', props.carArry)
})

// 孩子给父亲自己的玩具 父亲需要定义过变量去接收
const toFather = () => {
    emit('to-father', toy.value)
}


// 不可以修改父亲给的车 但是可以修改副本，父亲的车没有受到影响
function changeFatherCar0() {
    carCopy.value += '喷漆'
}


// 监听 props 的变化，更新本地状态
watch(() => carCopy.value, (newValue) => {
    // carCopy.value = newValue ,加此行就重复监听了
    console.log(`车的副本改成${newValue}，在这也可以通知父亲修改`)
    // emit('sonChangeCar', newValue)
});


// 不可以修改父亲给的车 因为是只读的 
function changeFatherCar1() {
    // props.car = '奔驰喷漆' // 没有解构使用这种
    car.value = '奔驰喷漆'
}

// 想修改父亲给的车 需要通知父亲，让父亲自己去修改 1 子组件通过事件 2 通过v-model
// 第一种 通过事件
function changeFatherCar2() {
    emit('sonChangeCar', '喷漆')
}


// 修改父组件的 carArray
const updateFoodArray = () => {
    emit("update:foodArry", [...foodArry.value, "牛奶"]);
};

</script>