<template>
  <div>
    <!--class="app-container calendar-list-container"-->
    <div class='tab-div'>
      <el-tabs type="border-card" style="width: auto">
        <el-tab-pane label="统计分析可视化" :style="{height:HeightHeight}">
          <!-- <stat1></stat1> -->
          <TjInfo></TjInfo>
        </el-tab-pane>
        <el-tab-pane label="统计分析表单" :style="{height:HeightHeight}">
          <state2></state2>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import {
    stat1,
    state2
  } from './components';
  import TjInfo from "./components1/TjInfo.vue"

  import Vue from 'vue';

  Vue.component('stat1', stat1);
  Vue.component('state2', state2);
  export default {

    data() {
      return {
        // HeightHeight1:"",
      };
    },
    components: {
      TjInfo
    },
    computed: {
      HeightHeight() {
        return this.$store.state.HeightHeight
      },
      ZhiBIdInfoZz() {
        return this.$store.state.ZhiBIdInfoZz
      }
    },
    // watch:{
    //   HeightHeight(val){
    //     this.HeightHeight1= val;
    //   }
    // },

  }
</script>
<style scoped lang="scss">
  @import "src/styles/mongolians.scss";
</style>
