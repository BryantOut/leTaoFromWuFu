<template>
    <div class="index">
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="70">
            <mt-swipe :auto="4000" class="lt_banner clearfix">
                <mt-swipe-item>
                    <a href="javascript:;">
                        <img src="../assets/images/banner1.png" alt="">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="javascript:;">
                        <img src="../assets/images/banner2.png" alt="">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="javascript:;">
                        <img src="../assets/images/banner3.png" alt="">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="javascript:;">
                        <img src="../assets/images/banner4.png" alt="">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="javascript:;">
                        <img src="../assets/images/banner5.png" alt="">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="javascript:;">
                        <img src="../assets/images/banner6.png" alt="">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="javascript:;">
                        <img src="../assets/images/banner7.png" alt="">
                    </a>
                </mt-swipe-item>
            </mt-swipe>
            <div class="lt_nav">
                <a href="javascrip:;">
                    <img src="../assets/images/nav1.png" alt="">
                </a>
                <a href="javascrip:;">
                    <img src="../assets/images/nav2.png" alt="">
                </a>
                <a href="javascrip:;">
                    <img src="../assets/images/nav3.png" alt="">
                </a>
                <a href="javascrip:;">
                    <img src="../assets/images/nav4.png" alt="">
                </a>
                <a href="javascrip:;">
                    <img src="../assets/images/nav5.png" alt="">
                </a>
                <a href="javascrip:;">
                    <img src="../assets/images/nav2.png" alt="">
                </a>
            </div>
            <div class="lt_product">
                <a href='javascript:;' class="lt_proBox">
                    <img src="../assets/images/product.jpg" alt="">
                    <p>获取注册验证码获取注册验证码获取注册验证码</p>
                    <p>
                        <span>&yen;500.00</span>
                        <del>&yen;600.00</del>
                    </p>
                    <button class="mint-button mint-button--primary mint-button--small">
                        <label class="mint-button-text">立即购买</label>
                    </button>
                </a>
                <a href='javascript:;' class="lt_proBox">
                    <img src="../assets/images/product.jpg" alt="">
                    <p>获取注册验证码获取注册验证码获取注册验证码</p>
                    <p>
                        <span>&yen;500.00</span>
                        <del>&yen;600.00</del>
                    </p>
                    <button class="mint-button mint-button--primary mint-button--small">
                        <label class="mint-button-text">立即购买</label>
                    </button>
                </a>
                <a href='javascript:;' class="lt_proBox">
                    <img src="../assets/images/product.jpg" alt="">
                    <p>获取注册验证码获取注册验证码获取注册验证码</p>
                    <p>
                        <span>&yen;500.00</span>
                        <del>&yen;600.00</del>
                    </p>
                    <button class="mint-button mint-button--primary mint-button--small">
                        <label class="mint-button-text">立即购买</label>
                    </button>
                </a>
                <a href='javascript:;' class="lt_proBox">
                    <img src="../assets/images/product.jpg" alt="">
                    <p>获取注册验证码获取注册验证码获取注册验证码</p>
                    <p>
                        <span>&yen;500.00</span>
                        <del>&yen;600.00</del>
                    </p>
                    <button class="mint-button mint-button--primary mint-button--small">
                        <label class="mint-button-text">立即购买</label>
                    </button>
                </a>
                <a href='javascript:;' class="lt_proBox">
                    <img src="../assets/images/product.jpg" alt="">
                    <p>获取注册验证码获取注册验证码获取注册验证码</p>
                    <p>
                        <span>&yen;500.00</span>
                        <del>&yen;600.00</del>
                    </p>
                    <button class="mint-button mint-button--primary mint-button--small">
                        <label class="mint-button-text">立即购买</label>
                    </button>
                </a>
                <a href='javascript:;' class="lt_proBox">
                    <img src="../assets/images/product.jpg" alt="">
                    <p>获取注册验证码获取注册验证码获取注册验证码</p>
                    <p>
                        <span>&yen;500.00</span>
                        <del>&yen;600.00</del>
                    </p>
                    <button class="mint-button mint-button--primary mint-button--small">
                        <label class="mint-button-text">立即购买</label>
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  created () {
    this.$store.state.title = '乐淘商城购物'
  },
  methods: {
    loadMore () {}
  }
}
</script>

<style lang='scss' scoped>
.index {
    height: auto;
  .lt_banner {
    width: 100%;
    height: 235px;
    a {
      width: 100%;
      display: block;
      > img {
        width: 100%;
        display: block;
      }
    }
  }
  .lt_nav {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    > a {
      width: 33.33%;
      > img {
        width: 100%;
        display: block;
      }
    }
  }
  .lt_product{
    padding:10px;
    .lt_proBox{
        width: 48%;
        border: 1px solid #ddd;
        box-shadow: 0px 0px 2px #ccc;
        float: left;
        margin-bottom: 10px;
        > img {
            width:100%;
            display: block;
        }
        > p {
            font-size: 13px;
            padding: 0px 10px;
            text-align: center;
            color:#888;
            line-height: 16px;
        }
        > p:nth-of-type(2){
            line-height: 30px;
            > span{
                color:#e92322;
            }
        }
        > button{
            display: block;
            margin: 10px auto;
        }
    }
    .lt_proBox:nth-of-type(even){
        margin-left:4%;
    }
  }
}
</style>
