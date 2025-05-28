<template>
    <div class="container">
      <Breadcrumb :items="[
        'menu.table',
        'menu.table.table_permission'
      ]" />

        <a-card  title="按钮权限    有权限的才能展示导出按钮">
            <template #extra>
                <a-button v-has="'table:table_button'" type="primary">导出</a-button>
            </template>
            <a-table :columns="addSalaryColumns" :data="data" />
        </a-card>


        <a-card  title="列权限  不同权限展示不同的列">
            <template #extra>
                <a-button @click="getData">获取数据</a-button>
            </template>
            <a-table :columns="permission.includes('table:table_columns_salary') ? addSalaryColumns : baseColumns" :data="data"/>
        </a-card>

    </div>
  </template>
  
  
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { getColumnsPermisson } from '@/api/table';
import { useUserStore } from '@/store'

const userStore = useUserStore()
const { permission } = userStore

console.log('permission------->',permission)

const data = ref([]);

const baseColumns = [
      {
        title: '名字',
        dataIndex: 'name',
      },
      {
        title: '地址',
        dataIndex: 'address',
      },
      {
        title: '邮箱',
        dataIndex: 'email',
      },
    ];
    
const addSalaryColumns = [
    ...baseColumns,
    {
        title: '薪水',
        dataIndex: 'salary',
    },
]



const getData = async () => {

    try {
        const res = await getColumnsPermisson()
        console.log("表格基本使用获取数据", res)
        data.value = res
    } catch(err) {
        console.error(`出错${err}`)
    }

    }

  </script>
