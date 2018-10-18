<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <el-header style="height:80px;padding: 0px;">
      <navbar></navbar>
    </el-header>
    <sidebar class="sidebar-container"></sidebar><!-- @transferPath="getpath" -->
    <div class="main-container">
      <!--<tags-view></tags-view>-->

      <!-- <firstbar :routes="permission_routers" :aboutfa="childpath"></firstbar> -->
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import {Navbar, Sidebar, AppMain, TagsView} from './components'
  import {mapGetters} from 'vuex'

  export default {
    name: 'layout',
    components: {Navbar, Sidebar, AppMain, TagsView},
    computed: {
      ...mapGetters([
        'permission_routers',
      ])
    },
    data() {
      return {}
    },
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar
      }
    },
    // methods:{
    // 	getpath(msg){
    // 		this.childpath='/'+ msg;
    // 	},
    // }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  @import "src/styles/mongolians.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;

  }
</style>
