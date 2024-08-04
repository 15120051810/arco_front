<template>

    <div>
        <a-card title="测试树绑定ref和reactive的区别">
            <a-tree-select :data="treeData" v-model="selected" :label-in-value="true" placeholder="Please select ..."
                style="width: 300px" @change="onChange"></a-tree-select>

            <div>selected {{ selected }}</div>
            <div>node: {{ node }}</div>
            <div>label: {{ leaf }}</div>
        </a-card>


        <a-card title="绑定对象例子1,arco官方例子，绑定指定的数据,list中是官方固定的kye-valye">
            <a-select v-model="dataDict" :style="{ width: '320px' }" allow-search placeholder="Please select ..." value-key="key">
                <a-option v-for="item of DataListSelect" :value="item" :label="item.label" :key="item.org_id" />
            </a-select>
            <div>Select dataDict: {{ dataDict }}</div>
        </a-card>

        <a-card title="绑定对象例子2，必须使用value-key指定唯一，否则搜索只会命中最后一条，自定义过滤函数">
            <a-select v-model="orgDict" :style="{ width: '320px' }" allow-search value-key="org_name"
                placeholder="Please select ..." :field-names="fieldNames" :filter-option="customFilter">
                <a-option v-for="item of orgListSelect" :value="item" :label="item.org_name">
                </a-option>
            </a-select>
            <div>Select orgDict: {{ orgDict }}</div>
        </a-card>

        <a-card title="绑定对象例子3；无自定义字段；无自定义过滤">
            <a-select v-model="orgDict" :style="{ width: '320px' }" allow-search value-key="org_name" placeholder="Please select ...">
                <a-option v-for="item of orgListSelect" :value="item" :label="item.org_name">
                </a-option>
            </a-select>
            <div>Select orgDict: {{ orgDict }}</div>
        </a-card>
    </div>





</template>
<script setup>
import { ref, reactive, toRefs } from 'vue';
import { IconCalendar } from '@arco-design/web-vue/es/icon';



// 方式一
// const selected = ref({ value: 'node2', label: 'Leaf' }) //reactive不支持v-model

// 方式二 selectd 改变，并没有改变node，leaf
// const node = ref('node2')
// const leaf = ref('Leaf')
// const selected = ref({ value: node.value, leaf: leaf.value }) 

// 方式3  selectd 改变，并没有改变node，leaf
let selected = ref({ value: 'node2', label: 'Leaf' })
const { value: node, label: leaf } = toRefs(selected.value)

const dataDict = ref();
const orgDict = ref();
const fieldNames = { value: 'org_id', label: 'org_name' }
const treeData = [
    {
        key: 'node1',
        title: 'Trunk1',
        disabled: true,
        children: [
            {
                key: 'node2',
                title: 'Leaf2',
            },
        ],
    },
    {
        key: 'node3',
        title: 'Trunk3',
        children: [
            {
                key: 'node4',
                title: 'Leaf4',
            },
            {
                key: 'node5',
                title: 'Leaf5',
            },
        ],
    },
];

const DataListSelect = [{
    value: 'beijing',
    label: 'Beijing',
    other: 'extra'
}, {
    value: 'shanghai',
    label: 'Shanghai',
    other: 'extra'
}, {
    value: 'guangzhou',
    label: 'Guangzhou',
    other: 'extra'
}, {
    value: 'chengdu',
    label: 'Chengdu',
    other: 'extra'
}]


const orgListSelect = reactive([
    {
        "org_id": "028c79cb197611eea5cf525400f6496b",
        "org_name": "嘉宝田药店",
        "org_type": 6
    },
    {
        "org_id": "67dc1e55197911eeb6a452540072d236",
        "org_name": "爱联店",
        "org_type": 6
    },
    {
        "org_id": "bcb83513197911eeb6f45254007fd0df",
        "org_name": "凤凰药店",
        "org_type": 6
    }])

// 自定义过滤函数 
//接收两个参数 input 是用户输入的搜索字符串 option 是当前下拉选项
const customFilter = (input, option) => {
    let res = option.label.toLowerCase().includes(input.toLowerCase());
    console.log('input', input, JSON.stringify(option), res)
    return res
};

const onChange = (v) => {
    console.log('此时selected', selected.value)
    console.log('此时v', v, node.value, leaf.value)
}

const changeSelected = (v) => {
    console.log('此时selected', selected.value)
    console.log('此时v', v, node.value, leaf.value)
}
</script>