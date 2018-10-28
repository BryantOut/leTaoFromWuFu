<template>
    <div class="login">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="邮箱" placeholder="请输入邮箱" type="password" v-model="password"></mt-field>
        <mt-button type="primary" @click='login'>确定</mt-button>
        <mt-button type="default">取消</mt-button>
    </div>
</template>

<script>
import { login } from '@/api/index.js'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      login({username: this.username, password: this.password}).then(res => {
        if (res.success) {
          //   ?应该实现路由跳转？到底跳转到那个路由？
        //   获取跳转的源path
          var source = this.$route.params.source
          if (source) {
            this.$router.push({path: source})
          } else {
            this.$router.push({path: '/index'})
          }
        } else {
          this.$toast(res.message)
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
