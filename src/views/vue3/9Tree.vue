<template>
    <a-card>
        <a-button-group style="margin-bottom: 20px;">
            <a-button type="primary" @click="toggleChecked">
                {{
                checkedKeys?.length ? 'deselect all' : 'select all'
            }}
            </a-button>
            <a-button type="primary" @click="toggleExpanded">
                {{
                expandedKeys?.length ? 'fold' : 'unfold'
            }}
            </a-button>
        </a-button-group>
        <!--  v-model:checked-keys="checkedKeys" 加上这个default-checked-keys默认选中就不起作用了 -->
        <a-tree :checkable="true" v-model:selected-keys="selectedKeys"
            v-model:expanded-keys="expandedKeys" @select="onSelect" @check="onCheck" @expand="onExpand"
            :default-checked-keys="['0-1-1']"
            :data="treeData" />
    </a-card>
</template>

<script setup>
import { ref } from 'vue';

const allCheckedKeys = ['0-0', '0-0-1', '0-0-2', '0-0-2-1', '0-1', '0-1-1', '0-1-2'];
const allExpandedKeys = ['0-0', '0-1', '0-0-2'];

const defaultCheckedKeys = ['0-0', '0-1', '0-0-2'];


const selectedKeys = ref([]);
const checkedKeys = ref([]);
const expandedKeys = ref([]);



const treeData = [
    {
        title: 'Trunk 0-0',
        key: '0-0',
        children: [
            {
                title: 'Leaf 0-0-1',
                key: '0-0-1',
            },
            {
                title: 'Branch 0-0-2',
                key: '0-0-2',
                children: [
                    {
                        title: 'Leaf 0-0-2-1',
                        key: '0-0-2-1'
                    }
                ]
            },
        ],
    },
    {
        title: 'Trunk 0-1',
        key: '0-1',
        children: [
            {
                title: 'Leaf 0-1-1',
                key: '0-1-1',
            },
            {
                title: 'Leaf 0-1-2',
                key: '0-1-2',
            },
        ],
    },
];

const toggleChecked = () => {
    checkedKeys.value = checkedKeys?.value.length ? [] : allCheckedKeys;
}
const toggleExpanded = ()=> {
    expandedKeys.value = expandedKeys?.value.length ? [] : allExpandedKeys;
}
const onSelect = (newSelectedKeys, event) =>{
    console.log('select: ', newSelectedKeys, event);
}
const onCheck = (newCheckedKeys, event) =>{
    console.log('check: ', newCheckedKeys, event);
}

const onExpand = (newExpandedKeys, event) =>{
    console.log('expand: ', newExpandedKeys, event);
}

</script>