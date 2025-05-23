<template>
  <div class="container">
    <Breadcrumb :items="[
      'menu.table',
      'menu.table.table_demo'
    ]" />

    <a-space direction="vertical" :size="16" fill>

      <baseUse />
      <rowSelection />

      <Sort/>

      <a-card class="my_card" title="单元格合并 - 官网">
        <Demo4>
        </Demo4>    
      </a-card>


      <a-card class="my_card" title="Demo5 1 自定义合并单元格 2 自定义插入总结行">
        <Demo5>
        </Demo5>    
      </a-card>

      <a-card class="my_card" title="案例6-分组表头与固定列">
        <Demo6>
        </Demo6>    
      </a-card>


      <a-card class="my_card" title="Demo7-动态合并单元格">
        <Demo7>
        </Demo7>    
      </a-card>

      <a-card class="my_card" title="表格树">
        <tableTree>
        </tableTree>    
      </a-card>

    </a-space>
  </div>

</template>


<script lang="ts" setup>
import baseUse from './components/base-use.vue'
import rowSelection from './components/row-selection.vue'

import Sort from './components/sort-use.vue'

import Demo4 from './components/demo4.vue'


import Demo5 from './components/demo5.vue'
import Demo6 from './components/demo6.vue'
import Demo7 from './components/demo7.vue'
import tableTree from './components/table_tree.vue'


</script>

<script lang="ts">
export default {
  name: 'Table',
};
</script>