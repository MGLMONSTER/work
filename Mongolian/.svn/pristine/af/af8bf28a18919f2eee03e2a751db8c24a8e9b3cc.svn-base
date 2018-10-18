<template>
  <div class="Statistics-container">
    <component :is="currentRole"></component>
  </div>
</template>

 <script>
import { mapGetters } from 'vuex'
import contentStatic from './content'
export default {
  name: 'Statistics',
  components: { contentStatic },
  data() {
    return { 
      currentRole: ' contentStatic'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('content')) {
      this.currentRole = 'contentStatic'
      console.log(1)
    }
  }
}
</script>
