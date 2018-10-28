<template>
  <div id="app">
    <!-- 顶部 -->
    <lt-header></lt-header>
    <lt-content class="ltContent"></lt-content>
    <!-- 底部 -->
    <lt-footer></lt-footer>
  </div>
</template>

<script>
import header from '@/components/Header.vue'
import content from '@/components/Content.vue'
import footer from '@/components/Footer.vue'
export default {
  components: {
    'lt-header': header,
    'lt-content': content,
    'lt-footer': footer
  },
  name: 'App',
  data () {
    return {
      selected: true,
      isShow: false
    }
  },
  created () {
    if (this.$router.path === '/') {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.ltContent{
  padding:40px 0 60px 0;
  overflow: scroll;
}
</style>
