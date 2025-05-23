<template>


  <div class="father">

    <a-card>
      <h3>父组件，</h3>
      <h4>我的车：{{ car }}</h4>
      <h4>儿子给的玩具：{{ toy }}</h4>
      <h4>给儿子的食物：{{ foodArry }}</h4>

      <button @click="FatherChangCar"> 父亲更改给孩子的车</button>

      <Son :car="car" @to-father="toFather" :carArry="carArry" @sonChangeCar="sonChangeCar"  v-model:foodArry="foodArry" />

      <!-- <button @click="changCar"> 改变父亲给孩子的车</button> -->
    </a-card>
  </div>


</template>

<script setup lang="ts" name="Father">
import Son from './son.vue'
import { ref } from "vue";
// 数据
const car = ref('奔驰')
const toy = ref()
const carArry = ref()
const foodArry = ref(['巧克力', '面包'])

// 方法
function toFather(value: string) {
  toy.value = value
}
const FatherChangCar = () => {
  console.log('改变车')
  car.value = car.value + 1
  carArry.value = [1, 2, 3, car.value]
}

const sonChangeCar = (p: any) => {
  console.log('儿子要改变车,改成', p)
  car.value += p
}


</script>