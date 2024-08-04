<template>
    <div class="container">
      <div :class="{'sticky-div': true, 'fixed': isFixed}">
        I will stick to the top when you scroll
      </div>
      <div class="content">
        Scroll down to see the fixed behavior.
        <p v-for="i in 50" :key="i">
          This is some dummy content to make the page scrollable. 
          Repeat this as needed to test scrolling.
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const isFixed = ref(false);
  
  const handleScroll = () => {
    isFixed.value = window.scrollY > 50; // 当滚动超过50px时固定
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
  <style>
  body, html {
    margin: 0;
    padding: 0;
  }
  
  .container {
    height: 2000px; /* 确保滚动区域足够高 */
    padding: 10px;
  }
  
  .sticky-div {
    background-color: yellow;
    padding: 10px;
    width: 100%;
    transition: position 0.3s;
    z-index: 1000;
  }
  
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
  }
  
  .content {
    padding: 20px;
    background-color: lightgray;
  }
  </style>
  