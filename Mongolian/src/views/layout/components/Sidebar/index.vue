<template>
  <scroll-bar>
    <div class="menu-hideen">
    <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#f5f7fa">
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </div>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'
export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  // methods:{
  //   getpath(msg){
  //     // this.childpath='/'+ msg;
  //     this.$emit('transferPath',msg);
  //     console.log(msg);
  //   }
  // }
}
</script>
<style type="text/css" scoped>

</style>
