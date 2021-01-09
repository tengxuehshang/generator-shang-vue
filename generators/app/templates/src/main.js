import Vue from 'vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import '@/assets/font-icons/iconfont.css'
import '@/assets/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import permission from './permission'
import vueSwiper from 'vue-awesome-swiper' // 轮播sipwer
import '@/assets/styles/swiper.min.css'

// import { getDicts } from '@/api/system/dict/data'
// import { getConfigKey } from '@/api/system/.config'
import Pagination from '@/components/Pagination.vue'
import AFTableColumn from 'af-table-column'

// 全局方法挂载
Vue.prototype.getDicts = getDicts
Vue.prototype.getConfigKey = getConfigKey
Vue.prototype.resetForm = resetForm

Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: 'success' })
}

Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: 'error' })
}

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg)
}

// 全局组件挂载
Vue.component('Pagination', Pagination)

// Vue.use(permission)
// Vue.use(echarts)
Vue.use(vueSwiper)
Vue.use(AFTableColumn)
Vue.use(Element, {
  size: 'small'
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
