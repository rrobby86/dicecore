<template lang="pug">
.root-container
  MainView
</template>

<script setup>
import MainView from './components/MainView.vue'
</script>

<style>
@import './assets/base.css';

html, body {
  width: 100%;
  height: 100%;
  margin: 0;
}

body {
  color: black;
  background: #cccccc;
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
  padding: 16px;
}

.root-container {
  margin: 0 auto;
  border: 1px solid #bbbbbb;
  border-radius: 12px;
  box-sizing: border-box;
  box-shadow: 1px 1px 4px 2px #999999 inset;
  padding: 12px;
  width: 100%;
  max-width: 640px;
  /* height: 100%; */
  background: white;
}

#modals {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.7); */
}

#modals:empty {
  display: none;
}
</style>
