import axios from 'axios'

// const baseURL = 'http://193.112.55.79:9096/'
const baseURL = 'http://127.0.0.1:3000/'

axios.defaults.baseURL = baseURL

// 允许axios传递cookie数据，因为默认情况下，axios并不会传递cookie
axios.defaults.withCredentials = true

// 1.让后台接口允许跨域请求

// 2.使用jquery --ajax

// 3.vue-resource

// 4.webpack配置反向代码：proxy

// 获取一级分类数据
export const getFirstCateogry = () => {
  return axios.get('/category/queryTopCategory').then((res) => {
    return res.data
  })
}
// 获取二级分类数据
export const getSecondCateogry = (pa) => {
  return axios.get('/category/querySecondCategory', {params: pa}).then((res) => {
    return res.data
  })
}
// 获取二级分类数据
export const getSearchList = (pa) => {
  return axios.get('/product/queryProduct', {params: pa}).then((res) => {
    return res.data
  })
}

// 获取商品详情数据
export const getProductById = (id) => {
  return axios.get('/product/queryProductDetail', {params: {id: id}}).then((res) => {
    return res.data
  })
}

// 添加到购物车
export const addCart = (params) => {
  return axios.post('/cart/addCart', params).then((res) => {
    return res.data
  })
}

// 登陆
export const login = (params) => {
  return axios.post('/user/login', params).then((res) => {
    return res.data
  })
}

// 获取购物车数据
export const getCartList = (id) => {
  return axios.get('/cart/queryCart').then((res) => {
    return res.data
  })
}

// 删除购物车中的商品
export const delCart = (ids) => {
  return axios.get('/cart/deleteCart', {params: {id: ids}}).then((res) => {
    return res.data
  })
}

// 修改购物车
export const editCart = (params) => {
  return axios.post('/cart/updateCart', params).then((res) => {
    return res.data
  })
}
