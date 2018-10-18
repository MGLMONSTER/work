<template>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <!-- <sidebar class="sidebar-container"></sidebar> -->
    <div class="main-container">
      <navbar></navbar>
      <tags-view></tags-view>
    </div>
  </div>
</template>

<script>
    export default {
  name: 'lefttop',
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>