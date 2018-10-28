<template>
    <div class="cart">
        <mt-loadmore :top-method="loadTop" :bottom-all-loaded="allLoaded" ref="loadmore">
            <!-- title属性只能指定字符串值 -->
            <mt-cell-swipe is-link title="" v-for='(value,index) in cartList' :key='index' :right="[
                {
                content: '编辑',
                style: { background: 'blue', color: '#fff',lineHeight:'100px' },
                handler: () => {
                        editSingerCart(value)
                    }
                },
                 {
                content: '删除',
                style: { background: 'red', color: '#fff',lineHeight:'100px' },
                handler: () => {
                        delSingerCart(value.id)
                    }
                }
            ]">
                <div class="cleft">
                    <img slot="icon" :src="'http://127.0.0.1:3000/' + value.pic[0].picAddr" alt="" width="75" height="75">
                    <mt-switch :value='value.statu?true:false' @change='chg(value)'></mt-switch>
                </div>
                <div class="right">
                    <router-link :to="{name:'ProductDetail',params:{id:value.productId}}">
                        <span>{{value.proName}}</span>
                    </router-link>
                    <p>
                        <span>￥{{value.price}}</span>&nbsp;&nbsp;
                        <del>￥{{value.oldPrice}}</del>&nbsp;&nbsp;
                        <span>X{{value.num}}双</span>
                    </p>
                    <p>鞋码：{{value.size}}</p>
                </div>
            </mt-cell-swipe>
        </mt-loadmore>
        <div class="allList">
            <span style='line-height:40px'>订单总金额：￥{{getTotalPrice}}</span>
            <mt-button type="danger" style="float:right">生成订单</mt-button>
        </div>
        <mt-popup v-model="editVisible" popup-transition="popup-fade">
            <h3>修改尺码和数量</h3>
            <p>尺码：
                <span v-for='(item,index) in sizeArr' :key='index' :class="{'sizeBox':true,'active':userSize==item}" @click='userSize=item'>{{item}}</span>
            </p>
            <p>
                <mt-range v-model="userNum" :min='1' :max='10'>
                    <div slot="start">数量：1&nbsp;</div>
                    <div slot="end">&nbsp;10&nbsp;您选择了{{userNum}}双</div>
                </mt-range>
            </p>
            <mt-button type="primary" @click='editcart' style='float:right'>修改</mt-button>
        </mt-popup>
    </div>
</template>

<script>
import { getCartList, delCart, editCart } from '@/api/index.js'
export default {
  data () {
    return {
      editVisible: false,
      value: '',
      allLoaded: false,
      cartList: [],
      sizeArr: [],
      userNum: 1,
      userSize: '',
      currentId: '',
      currentObj: {}
    }
  },
  mounted () {
    getCartList().then(res => {
      console.log(res)
      if (res.error === 400) {
        this.$toast({
          message: '你还没有登陆，请先登陆',
          position: 'bottom',
          duration: 2000
        })
        this.$router.push({ name: 'Login', params: { source: '/cart' } })
      } else {
        this.cartList = res
      }
    })
  },
  methods: {
    //   修改车中商品的状态
    chg (value) {
      value.statu = !value.statu
    },
    //   编辑购物车商品信息
    editcart () {
      editCart({id: this.currentId, size: this.userSize, num: this.userNum}).then(res => {
        if (res.success) {
          this.$toast({
            message: '编辑成功',
            position: 'bottom',
            duration: 2000
          })
          this.currentObj.size = this.userSize
          this.currentObj.num = this.userNum
          this.editVisible = false
        } else {
          this.$toast({
            message: '编辑失败',
            position: 'bottom',
            duration: 2000
          })
        }
      })
    },
    //   弹出编辑对话框
    editSingerCart (value) {
      // 将单条数据的对象存储到Data中的属性中，共用
      // 对象赋值给对象，造成两个对象指向同一个空间
      this.currentObj = value
      this.editVisible = true
      this.sizeArr = []
      this.userSize = value.size - 0
      this.userNum = value.num
      //   将当前商品的id号存储到data中的成员属性中
      this.currentId = value.id
      var temp = value.productSize.split('-')
      for (var i = temp[0]; i <= temp[1]; i++) {
        this.sizeArr.push(i)
      }
    },
    // 删除购物车商品信息
    delSingerCart (id) {
      delCart([id]).then(res => {
        if (res.success) {
          getCartList().then(res => {
            this.cartList = res
          })
        }
      })
    },
    loadTop () {},
    loadBottom () {}
  },
  computed: {
    getTotalPrice () {
      var total = 0
      this.cartList.forEach((value, index) => {
        total += value.statu ? value.num * value.price : 0
      })
      return total.toFixed(2)
    }
  }
}
</script>

<style lang='scss' scoped>
.mint-loadmore {
  padding-bottom: 120px;
  .mint-cell {
    border-bottom: 1px dashed #f00;
    padding: 5px 0;
    .cright {
      padding: 0px 5px;
      p {
        line-height: 30px;
      }
    }
  }
}
.allList {
  background-color: aquamarine;
  position: fixed;
  bottom: 66px;
  width: 100vw;
  font-weight: bold;
}
.mint-popup {
  width: 100%;
  padding: 20px;
  > h3 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  p {
    line-height: 40px;
  }
  .sizeBox {
    width: 30px;
    height: 30px;
    display: inline-block;
    margin-left: 5px;
    border: 1px solid #ccc;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
    &.active {
      background-color: yellow;
    }
  }
}
</style>
