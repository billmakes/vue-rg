import Vue from 'vue'
import App from './App.vue'

import './styles/_normalize.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
