<template>
  <div class="app-wrapper">
    <el-container>
      <el-header style="padding: 0px;">
        <navbar></navbar>
      </el-header>
      <el-main style="padding-left: 0px;">
        <porterInfo></porterInfo>
        <!-- <div class="container-count">
          <el-row :gutter="20">
            <el-col  :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
               <PorterLeft></PorterLeft>
            </el-col>
            <el-col  :xs="14" :sm="14" :md="14" :lg="14" :xl="10"> -->
        <!-- 个人模块 -->
        <!-- <div class="Center-top">
          <div class="Center-top-1">
            个人模块
          </div>
          <div>
              <personal class="personal"></personal>
          </div>
        </div> -->
        <!-- 业务模块 -->
        <!-- <div class="Center-top" style="margin-top:10px;">
          <div class="Center-top-1">
            业务模块
          </div>
          <div>
              <business class="personal"></business>
          </div>
      </div> -->
        <!-- 决策模块 -->
        <!-- <div class="Center-top" style="margin-top:10px;">
          <div class="Center-top-1">
            决策模块
          </div>
          <div>
              <policyDecision class="personal"></policyDecision>
          </div>
      </div>
      </el-col>
      <el-col  :xs="5" :sm="5" :md="5" :lg="5" :xl="5">
        <SidebarItem></SidebarItem> -->
        <!-- <PorterRight></PorterRight> -->
        <!-- <div class="Information">
          <div class="Information-1">
             组织信息
          </div>
          <div class="Information-2">
            <p><span>支部名称:</span> 鄂尔多斯党支部</p>
            <p><span>党员数量:</span> 1.5万</p>
            <p><span>党支部积分:</span> 5888积分</p>
            <p><span>支部积分排名:</span> 第三名</p>
          </div>
        </div>
     </el-col>
   </el-row>
   </div> -->
      </el-main>
    </el-container>
    <Footer></Footer>
  </div>
</template>
<script>
  import personal from './compents/personal'
  import business from './compents/business'
  import policyDecision from './compents/policyDecision'
  import {Navbar} from '@/views/layout/components'
  import portalSidebar from './compents/portalSidebar/index'
  import PorterLeft from "./compents/fistInfo/PorterLeft"
  import PorterRight from "./compents/fistInfo/PorterRight"
  import SidebarItem from "./compents/portalSidebar/SidebarItem"
  import Footer from "../Footer/index"
  import porterInfo from "./porterInfo"

  export default {
    name: 'comprehensive',
    components: {
      Navbar,
      portalSidebar,
      personal,
      business,
      policyDecision,
      PorterLeft,
      PorterRight,
      SidebarItem,
      Footer,
      porterInfo
    },
    computed: {},
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  // .personal {
  //   position: relative;
  //   box-shadow: #666 0px 0px 2px;
  //   padding: 20px 30px;
  //   overflow: hidden;
  // }
  .container-count {
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 20px;
    // height:1000px;
    width: 100%;
    background: #f4f6f9;
  }

  .Center-top {
    height: 100%;
    background: white;
    border-radius: 4px;
    box-shadow: 1px 1px 10px #ccc;
    .Center-top-1 {
      height: 56px;
      line-height: 56px;
      color: #5d5d5d;
      font-size: 16px;
      border-bottom: 1px dashed #f1f3f6;
      margin-left: 20px;
    }
  }

  .Information {
    height: 267px;
    margin-top: 10px;
    background: white;
    box-shadow: 1px 1px 10px #ccc;
    border-radius: 4px;
  }

  .Information-1 {
    height: 56px;
    line-height: 56px;
    text-indent: 20px;
    border-bottom: 1px dashed #f1f3f6;
    color: #5d5d5d;
    font-size: 15px;
  }

  .Information-2 {
    margin-top: 10px;
    margin-left: 20px;
    color: #5d5d5d;
    font-size: 14px;
    span {
      font-size: 14px;
      color: #939393;
    }
  }

  .Information-3 {
    padding: 0px;
    margin: 0px;
  }
</style>
