<template>

<a-card :style="{ width: '100%' }" title="排序和筛选" :bordered="false">

    <a-space direction="vertical" size="large" fill>
        <a-space>
            <a-switch v-model="alignLeft" />
            <span>Filter icon align left: {{ alignLeft }}</span>
        </a-space>
        <a-table 
            :columns="columns" 
            :data="data" 
            :filter-icon-align-left="alignLeft" 
            @change="handleChange"
            @sorterChange="sortChange" />
    </a-space>

</a-card>
</template>

<script setup>
import { reactive, ref } from 'vue';


const alignLeft = ref(false);
const sortOrder = ref('')

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        sortable: {
            sortDirections: ['ascend', 'descend'],
            // defaultSortOrder:'ascend',
            // sortOrder:'ascend',
            // sorter:true,
        }
    },
    {
        title: 'Salary',
        dataIndex: 'salary',
        sortable: {
            sortDirections: ['ascend']
        },
        filterable: {
            filters: [{
                text: '> 20000',
                value: '20000',
            }, {
                text: '> 30000',
                value: '30000',
            }],
            filter: (value, record) => record.salary > value,
            multiple: true
        }
    },
    {
        title: 'Address',
        dataIndex: 'address',
        filterable: {
            filters: [{
                text: 'London',
                value: 'London',
            }, {
                text: 'Paris',
                value: 'Paris',
            },],
            filter: (value, row) => row.address.includes(value),
        }
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
];
const data = reactive([{
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com'
}, {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com'
}, {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com'
}, {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com'
}, {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com'
}]);

const handleChange = (data, extra, currentDataSource) => {
    // console.log('change', data, extra, currentDataSource)
}


// 接受两参数 排序字段 排序方向
const sortChange = (sortName,sortOrder) =>{
    console.log('sortChange',sortName,sortOrder)
}

</script>