<template>
    <a-space>
        <span>checkStrictly:</span>
        <a-switch v-model="rowSelection.checkStrictly" />
    </a-space>
    <a-table :columns="columns" :data="data" :expandedKeys="expandedKeys" :row-selection="rowSelection" :default-expanded-keys="[2]" default-expand-all-rows
         style="margin-top: 20px" />
</template>

<script>
import { ref, reactive } from 'vue';

export default {
    setup() {
        const expandedKeys = ref([]);


        const rowSelection = reactive({
            type: 'checkbox',
            showCheckedAll: true,
            checkStrictly: true
        });

        const columns = [
            { title: '组织名称', dataIndex: 'org_name' },
            { title: '机构id', dataIndex: 'org_id' },
            { title: '组织类型', dataIndex: 'org_type' },
            { title: '序号', dataIndex: 'order_index' },
            { title: '状态', dataIndex: 'state' },
            { title: '是否电商', dataIndex: 'is_ds' },
            { title: '是否商业', dataIndex: '' },
            { title: '操作', slotName: 'cz' }
        ];

        const data = []
        
        return {
            columns,
            data,
            expandedKeys,
            rowSelection
        }
    },
}
</script>