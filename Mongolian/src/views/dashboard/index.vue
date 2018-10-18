<template>
  <div  class="comprehensive-container">
    <el-row :gutter="10" style="width:100%;height:100%;writing-mode:vertical-lr;">
      <i @click="butshow = !butshow" class="el-icon-d-arrow-right" style=" display:block;cursor:pointer;float:left;position:relative;top:300px;z-index:1001"></i>
      <transition name="el-zoom-in-left">
        <div v-show="butshow">
          <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" style="height: 100%;">
            <!-- <p>个人模块</p> -->
            <div style="margin-top:10px; margin-right:10px;">
              <dealtdate class="personal"></dealtdate>
            </div>
          </el-col>
        </div>
      </transition>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="height: 100%;">
        <!-- <p>个人模块</p> -->
        <div style="margin-top:10px; height: 100%; writing-mode:horizontal-tb;">
          <personal class="personal"></personal>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="height: 100%;">
        <!-- <p>业务模块</p> -->
        <div style="margin-top:10px; height:100%;writing-mode:horizontal-tb;">
          <business class="personal"></business>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" style="height: 100%;">
        <!-- <p>决策模块</p> -->
        <div style="margin-top:10px;height:100%;writing-mode:horizontal-tb;">
          <policyDecision class="personal"></policyDecision>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import personal from './compents/personal'
import business from './compents/business'
import policyDecision from './compents/policyDecision'
import dealtdate from './compents/dealtdate'
export default {
  name: 'comprehensive',
  components: {
    personal,
    business,
    dealtdate,
    policyDecision
  },
  computed: {

  },
  data() {
      return {
        butshow:false,
      }
    }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.personal{
  position: relative;
  width:100%;
  height:98%;
  box-shadow: #666 0px 0px 2px;
  //padding:10px 10px;
  overflow: hidden;
}
.comprehensive-container{
  width:100%;
  overflow-x:auto;
}

</style>
