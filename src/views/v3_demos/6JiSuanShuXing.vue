<template>

    <div>
        <a-card class='my_card' title="计算属性">

            <template #extra>
                <a-link target="_blank" href="https://cn.vuejs.org/guide/essentials/computed.html">
                    计算属性</a-link>
            </template>


            <p>Has published books:</p>
            <span>直接使用表达式： {{ author.books.length > 0 ? 'Yes' : 'No' }}</span>

            <br>

            <div>
                <!--Vue 的计算属性会自动追踪响应式依赖。它会检测到 publishedBooksMessage 依赖于 author.books，所以当 author.books 改变时，任何依赖于 publishedBooksMessage 的绑定都会同时更新。-->
                <span>计算属性：{{ publishedBooksMessage }}</span>
            </div>

            <br>
            <span>函数：{{ calculateBooksMessage() }}</span>


        </a-card>

        <a-card class='my_card' title="为 computed() 标注类型">
            <template #extra>
                <a-link target="_blank"
                    href="https://cn.vuejs.org/guide/typescript/composition-api.html#typing-computed">
                    标注类型</a-link>
            </template>
            
            <span>computed() 会自动从其计算函数的返回值上推导出类型：</span>
            
            
            <button style="width: 100px;height:20px;" @click="count++">点击改变</button>

            <div>Count改变触发计算属性，得到新值 {{ double }}</div>

        </a-card>

    </div>


</template>

<script setup lang="ts">
import { reactive, computed,ref } from 'vue'

const count = ref(1)
const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

// 一个计算属性 -> 返回ref类型-> 自带缓存
// computed() 方法期望接收一个 getter 函数，返回值为一个计算属性 ref。
// 和其他一般的 ref 类似，你可以通过 publishedBooksMessage.value 访问计算结果。
// 计算属性 ref 也会在模板中自动解包，因此在模板表达式中引用时无需添加 .value。

// 计算属性值会基于其响应式依赖被缓存起来。一个计算属性仅会在其响应式依赖更新时才重新计算。
const publishedBooksMessage = computed(() => {
    return author.books.length > 0 ? 'Yes' : 'No'
})


// 方法
function calculateBooksMessage() {
    return author.books.length > 0 ? 'Yes' : 'No'
}


// 为 computed() 标注类型
const double = computed(() => {
  // 若返回值不是 number 类型则会报错
  console.log('属性变化',count.value)
  return count.value * 2
})



</script>

<style scoped></style>