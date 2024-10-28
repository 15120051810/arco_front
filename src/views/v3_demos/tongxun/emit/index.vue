<template>
  <div>
    <a-card>
      emit
    </a-card>
    
  </div>
</template>

<script setup>
defineProps({
  prop1: String,
  prop2: {
    type: Number,
    default: 0
  }
});
</script>

<style scoped>
</style>