<template>

  <div style="margin: 10px;">

    <a-card>
      <a-calendar v-model="currentDate" :mode="mode" :default-mode="'month'" :modes="['month', 'year']" @change="Change"
        @panel-change="panelChange">

        <template #default="{ year, month, date }">

          {{ getContent(year, month, date) }}

        </template>
      </a-calendar>
    </a-card>



  </div>

</template>



<script setup>
import { ref } from 'vue';
const currentDate = ref(new Date());
const mode = ref('');

const data2 = {
  '2024-7-1': [{ 'content': '项目1', 'digg_cnt': 1111 }],
  '2024-7-2': [{ 'content': '项目2', 'digg_cnt': 2222 }],
  '2024-8-2': [{ 'content': '项目2', 'digg_cnt': 2222 }],
  '2024-8-10': [{ 'content': '项目2', 'digg_cnt': 2222 }],

}


const getContent = (year, month, date) => {
  let date_str = `${year}-${month}-${date}`
  // console.log('date_str',date_str)
  return data2[date_str] ? data2[date_str] : date
}

const Change = (v) => {
  console.log('Change', v, mode.value)
  // mode.value = 'month'
  // setInterval(() => {
  //     mode.value = ''; // 
  //     }, 10000);

}

const panelChange = (v) => {
  console.log('panelChange', v, mode.value)
  // mode.value = 'month'
  // setInterval(() => {
  //     mode.value = '-'; // 
  //     }, 3000);

}




</script>


<style scoped></style>