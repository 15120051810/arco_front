<template>
    <a-table :columns="columns" :data="data" row-key="key" />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Table } from '@arco-design/web-vue';
  
  const data = ref([
    { key: '1', name: 'John', age: 32, address: 'New York' },
    { key: '2', name: 'John', age: 40, address: 'San Francisco' },
    { key: '3', name: 'Joe', age: 30, address: 'Los Angeles' },
    { key: '4', name: 'Jill', age: 25, address: 'Seattle' },
  ]);
  
  const columns = ref([
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      customRender: ({ text, record, index }) => {
        // 动态合并单元格
        if (index === 1 && data.value[index].name === data.value[index - 1].name) {
          return { children: text, attrs: { rowspan: 2 } };
        }
        if (index === 2 && data.value[index].name === data.value[index - 1].name) {
          return { children: text, attrs: { rowspan: 0 } };
        }
        return text;
      },
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ]);
  </script>
  
  <style>
  /* 你可以根据需要添加自定义样式 */
  </style>
  