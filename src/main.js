import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
