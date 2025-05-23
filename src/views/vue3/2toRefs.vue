<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>性别：{{ person.gender }}</h2>
        
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeGender">修改性别</button>
        <button @click="changePerson">修改person</button>

    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive, toRefs, toRef } from 'vue'

// 数据 取出来的
let person = reactive({ name: '张三', age: 18, gender: '男' })

// 通过toRefs将person对象中的n个属性批量取出，且依然保持响应式的能力
let { name, gender } = toRefs(person)

// 通过toRef将person对象中的gender属性取出，且依然保持响应式的能力
let age = toRef(person, 'age')

// 方法
function changeName() {
    name.value += '~'
    console.log('此时reactive',JSON.stringify(person))
}
function changeAge() {
    age.value += 1
    console.log('此时reactive',JSON.stringify(person))

}
function changeGender() {
    gender.value += '女'
    console.log('此时reactive',JSON.stringify(person))
}


function changePerson() {
    person.name += '~'
    console.log('此时name',name.value)
}
</script>