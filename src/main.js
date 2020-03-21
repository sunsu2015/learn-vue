import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

Vue.config.productionTip = false

// change prototype
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#root')
