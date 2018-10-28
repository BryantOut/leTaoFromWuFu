<template>
  <mt-header :title="title" :fixed='true'>
    <a href='javascript:history.back()' slot="left">
        <mt-button icon="back" v-show='isShow'>返回</mt-button>
    </a>
    <mt-button slot="right" @click='$router.push({"name":"Search"})'>搜索</mt-button>
  </mt-header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  //   使用计算属性监听当前路由的变化
  computed: {
    title () {
      return this.$store.state.title
    },
    isShow () {
      return !(this.$route.path === '/' || this.$route.path === '/index')
    }
  }
}
</script>

<style scoped>
</style>
