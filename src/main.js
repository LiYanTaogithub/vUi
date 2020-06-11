import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import vUi from './packages/index'
Vue.use(vUi)
new Vue({
  render: h => h(App),
}).$mount('#app')
