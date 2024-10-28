<template>
    <div class="father">
      <h3>父组件</h3>
      <div class="content">

        <!-- 父组件使用作用域插槽 v-slot 定义了一个具名插槽，并解构了从子组件传递来的 youxi, 可以被父组件使用，并动态渲染。 -->
        <Son>
          <template v-slot="{ youxi }">
            <ol>
              <li v-for="item in youxi" :key="item.id">{{ item.name }}
              </li>
            </ol>
          </template>
        </Son>


        <!-- 没解构 -->
        <Son>
          <template v-slot="params">
            <span>{{ params.x }}</span>
            <ol>
              <li v-for="item in params.youxi" :key="item.id">{{ item.name }}
              </li>
            </ol>
          </template>
        </Son>

        <!-- 简写用法 当插槽是默认插槽时，我们可以将 v-slot 直接应用到子组件上。-->
        <Son v-slot="{ x }">
            <span>{{ x }}</span>
        </Son>


        <!-- 具名插槽的两种写法 v-slot简写用#代替，子组件没有写名称的就是默认插槽，#default -->
        <Son>
          <template #default="{youxi}">
            <h3 v-for="g in youxi" :key="g.id">{{ g.name }}</h3>
          </template>

          <template #header="{ z }">
            <span>{{ z }}</span>
          </template>


        </Son>
  
      </div>
    </div>
  </template>
  
  <script setup lang="ts" name="Father">
    import Son from './components/son.vue'
  </script>
  
  <style scoped>
    .father {
      background-color: rgb(165, 164, 164);
      padding: 20px;
      border-radius: 10px;
    }
    .content {
      display: flex;
      justify-content: space-evenly;
    }
    img,video {
      width: 100%;
    }
  </style>