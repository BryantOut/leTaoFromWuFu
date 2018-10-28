<template>
  <div class="category">
    <div class="left">
      <mt-navbar v-model="selected">
        <mt-tab-item :id="item.id" v-for='item in cateList' :key='item.id'>{{item.categoryName}}</mt-tab-item>
      </mt-navbar>
    </div>
    <div class="right">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item :id="item.id" v-for='item in cateList' :key='item.id'>
          <a href="javascrip:;" v-for='subitem in secondCateList' :key='subitem.id'>
            <img :src="'http://127.0.0.1:3000/'+subitem.brandLogo" alt="">
            <p>{{subitem.brandName}}</p>
          </a>
          <span v-show='secondCateList.length === 0'>该一级分类没有任何的二级分类数据</span>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { getFirstCateogry, getSecondCateogry } from '@/api/index.js'
export default {
  data () {
    return {
      selected: '',
      cateList: [],
      secondCateList: []
    }
  },
  watch: {
    selected (newValue, oldValue) {
      // 默认加载一个一级分类的二级分类数据
      getSecondCateogry({id: newValue}).then(result => {
        this.secondCateList = result.rows
      })
    }
  },
  mounted () {
    // 为当前路由设置标题文本
    this.$store.state.title = '商品分类'
    getFirstCateogry().then(res => {
      // 加载一级分类数据
      this.cateList = res.rows
      this.selected = res.rows[0].id
    })
  }
}
</script>

<style lang='scss' scoped>
.category {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 100px;
    height: 100%;
    border-right: 1px solid #ccc;
    .mint-navbar{
      display: flex;
      flex-direction: column;
    }
  }
  .right {
    flex: 1;
    height: 100%;
    a{
      width:80px;
      float: left;
      > img{
        width:100%;
        display: block;
      }
    }
  }
}
</style>
