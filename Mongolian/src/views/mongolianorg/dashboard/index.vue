<template>
  <div class="dashboard-container">
    <component :is="currentRole"></component>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  name: 'dashboard',
  components: { adminDashboard,editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles',
      'menus'
    ])
  },
  created() {
    if (this.menus.Admini) {
      this.currentRole = 'adminDashboard'
    }else{
      this.currentRole = 'editorDashboard'
    }
  }
}
</script>

