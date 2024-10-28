<template>

  <div>
    <a-card class="my_card" title="ref和reactive嵌套响应式状态">

      <p>
        在 Vue 3 中，当你在 reactive 对象中嵌套 ref 时，ref 的变化会触发 reactive 对象的重新渲染。
        因此，当你修改嵌套的 ref 数据时，reactive 对象会响应并进行更新。
        注意：嵌套的响应式对象，必须被ref包裹
      </p>

      <div>
        <h3>User Info</h3>
        <p>名字: {{ data.user.name }}</p>
        <p>名字1：直接拿顶层引用ref-> {{ name1 }}</p>
        <p>名字1：从嵌套里面获取-> {{ data.user.name1 }}</p>

        <p>名字2只引用: {{ data.user.name2 }}</p>

        <p>Age: {{ data.user.age }}</p>
        <p>City: {{ data.user.address.city }}</p>
        <p>Zipcode: {{ data.user.address.zipcode }}</p>
        <button @click="updateName(`${new Date()}`)">Change 姓名</button>

        <button @click="updateName1(`${new Date()}`)">Change 姓名1</button>
        <button @click="updateName2(`${new Date()}`)">Change 姓名2</button>

        <button @click="updateCity('San Francisco')">Change City</button>
      </div>
      <div>
        <h3>Hobbies</h3>
        <ul>
          <li v-for="(hobby, index) in data.hobbies" :key="index">{{ hobby }}</li>
        </ul>
        <button @click="addHobby('coding')">Add Hobby</button>
        <button @click="deleteHobby()">Delete Hobby</button>

      </div>
    </a-card>


    <a-card class="my_card" title="为 ref和 reactive 标注类型">

      <a-link target="_blank" href="https://cn.vuejs.org/guide/typescript/composition-api.html#typing-reactive">
        标注类型</a-link>


    </a-card>
  </div>


</template>

<script setup>

import { reactive, ref } from 'vue';


// const year: Ref<string | number> = ref('2020')
// 在调用 ref() 时传入一个泛型参数，来覆盖默认的推导行为：


const name1 = ref('aaaa')
const name2 = ref('name2')

const data = reactive({
  user: {
    name: ref('John Doe'),// 这样子可以
    name1: name1.value, // 这样子不行
    name2: name2, // 写引用就可以
    age: ref(30),
    address: reactive({
      city: ref('New York'),
      zipcode: ref('10001')
    })
  },
  hobbies: ref(['reading', 'swimming'])
});

function updateName(newName) {
  data.user.name = newName; // 不用写.value
}

function updateName1(newName) {
  // 修改name1的值 data中的name1还是没变
  name1.value = newName
}

function updateName2(newName) {
  name2.value = newName
}

function updateCity(newCity) {
  console.log('改变城市', newCity)

  data.user.address.city = newCity;
}

function addHobby(hobby) {
  data.hobbies.push(hobby);
}

function deleteHobby() {
  data.hobbies.pop();
}


</script>

<style scoped></style>