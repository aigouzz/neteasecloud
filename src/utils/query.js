import axios from 'axios'
import Vue from 'vue'
axios.defaults.timeout = 8000
// 添加请求头
axios.defaults.withCredentials = true
// code状态码200判断
axios.interceptors.response.use((res) => {
  if (res.status === 654) { // 百度云请求超时检测
    Vue.toast('请求超时！')
  }
  if (res.data.code !== 200) {
    Vue.toast('数据返回有误')
    return Promise.reject(res)
  }
  return res.data
}, (error) => {
  console.log('axios promise error:' + error)
  Vue.toast('接口请求有误', {
    horizontalPosition: 'center',
    verticalPosition: 'top'
  })
  return Promise.reject(error)
})
export default axios
