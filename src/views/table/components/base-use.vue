<template>

    <a-card :style="{ width: '100%' }" title="基本使用" :bordered="false">

        <template #extra>
            <a-button @click="getData">获取数据</a-button>
        </template>

        <a-table :columns="columns" :data="data" />
    </a-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { getBaseUseData } from '@/api/table';

const data = ref([]);
const columns = reactive([
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Salary',
        dataIndex: 'salary',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
]);

const getData = async () => {

    try {
        const res = await getBaseUseData()
        console.log("表格基本使用获取数据", res)
        data.value = res
    } catch(err) {
        console.error(`出错${err}`)
    }

}

</script>
