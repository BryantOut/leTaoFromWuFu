import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Category from '@/views/Category.vue'
import Search from '@/views/Search.vue'
import SearchList from '@/views/SearchList.vue'
import ProductDetail from '@/views/ProductDetail.vue'
import Login from '@/views/Login.vue'
import Cart from '@/views/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/searchList/:key',
      name: 'SearchList',
      component: SearchList
    },
    {
      path: '/productDetail/:id',
      name: 'ProductDetail',
      component: ProductDetail
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ],
  linkActiveClass: 'isActive'
})
