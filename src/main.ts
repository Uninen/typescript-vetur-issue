import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// following produces a TS error
import { myTestFunction } from './test'

Vue.config.productionTip = false

myTestFunction()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
