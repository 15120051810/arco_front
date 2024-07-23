<template>
  <div class="container">
    <Breadcrumb :items="[
      'menu.dj_table',
      'menu.dj_table.practice'
    ]" />

    <a-space direction="vertical" :size="16" fill>

      <baseUse />
      <rowSelection />

      <Sort/>


    </a-space>
  </div>

</template>


<script lang="ts" setup>
import baseUse from './components/base-use.vue'
import rowSelection from './components/row-selection.vue'

import Sort from './components/sort-use.vue'

</script>

<script lang="ts">
export default {
  name: 'DJTable',
};
</script>