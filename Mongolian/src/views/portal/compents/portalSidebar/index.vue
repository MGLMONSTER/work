<template>
  <scroll-bar style="background:#f3f7f7;width: 260px;">
    <div class="dangwugongkai11" style="height:60px;">
      <!-- <img src="../../../../../static/image/replacement/logo.png" style="width:100%;" alt=""> -->
      <!-- <i id="dangwugongkai11"
         style="font-size:30px;height:60px;color:white;padding:11px;line-height:60px;background:#E33434;margin-left: 20px;"
         class="iconfont icon-dangwugongkai">
        <span id="dangwugongkai12"
              style="font-size:15px;background:#E33434;position:fixed;margin-left: 20px;">党务管理平台</span>
      </i> -->
    </div>
    <el-menu
      mode="vertical"
      :collapse-transition="false"
      :show-timeout="200"
      background-color="#f3f7f7"
      text-color="#5C5C5C"
      active-text-color="#E33A3A"
    >
      <portal-sidebar-item></portal-sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
  import portalSidebarItem from './SidebarItem'
  import ScrollBar from '@/components/ScrollBar'

  export default {
    name: 'portalSidebar',
    components: {portalSidebarItem, ScrollBar},
    data() {
      return {}
    },
    mounted() {
      // window.onscroll = function () {
      //   if (document.documentElement.scrollTop > 52) {
      //     document.getElementById("dangwugongkai11").style.cssText = "font-size:30px;height:60px;color:white;padding:20px;line-height:60px;background:#E33434;";
      //     document.getElementById("dangwugongkai12").style.cssText = "font-size:15px;background:#E33434;position:fixed;width:130px;";
      //   } else {
      //     document.getElementById("dangwugongkai11").style.cssText = "font-size:30px;height:60px;color:white;padding:20px;line-height:60px;background:#E33434;";
      //     document.getElementById("dangwugongkai12").style.cssText = "font-size:15px;background:#E33434;position:fixed;width:145px;";
      //   }
      // }
    }
  }
</script>
<style>
  .dangwugongkai11 {
    width: 100%;
    background: #E33434;
  }
</style>
