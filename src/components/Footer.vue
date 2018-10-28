<template>
    <div>
        <mt-tabbar :fixed='true' v-show='$route.path.indexOf("/productDetail") === -1'>
            <mt-tab-item id="外卖">
                <router-link to="/index" exact>
                    <div class="myicon myicon-user"></div> 首页
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="订单">
                <router-link to="/category" exact>
                    <div class="myicon myicon-user"></div> 分类
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="发现">
                <div class="myicon myicon-user"></div> 购物车
            </mt-tab-item>
            <mt-tab-item id="我的">
                <div class="myicon myicon-user"></div> 会员中心
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {}
</script>

<style lang='scss' scoped>
.isActive {
  color: orange;
}
</style>
