<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>我的玩具：{{ toy }}</h4>
        <h4>父给我的车：{{ car }}</h4>
        <h4>父给改变我的车Arry：{{ carArry }}</h4>

        <button @click="getToy(toy)">玩具给父亲</button>
    </div>
</template>

<script setup lang="ts" name="Child">

import { ref,onMounted } from "vue";
const toy = ref('奥特曼')

const props = defineProps(['car', 'getToy', 'carArry'])

onMounted(()=>{

    console.log('carArry',props.carArry)

})

</script>