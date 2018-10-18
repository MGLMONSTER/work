<template>
  <div class="app-container calendar-list-container">
  	<el-tabs type="border-card">
        <el-tab-pane label="已发布">
          <firmlyPublished></firmlyPublished>
        </el-tab-pane>
        <el-tab-pane label="已接收">
         <firmlyReceived></firmlyReceived>
       </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {
  firmlyPublished,
  firmlyReceived
 } from './components';
import Vue from 'vue';
     Vue.component('firmlyPublished',firmlyPublished);
     Vue.component('firmlyReceived',firmlyReceived);
  export default {

    data() {
      return {
      };
    },
  }
</script>
<style scoped>
</style>
