import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { CardPlugin } from 'bootstrap-vue'
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
import { LayoutPlugin } from 'bootstrap-vue'
import { VBScrollspyPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(CardPlugin)
Vue.use(TablePlugin)
Vue.use(DropdownPlugin)
Vue.use(LayoutPlugin)
Vue.use(VBScrollspyPlugin)
Vue.use(ModalPlugin)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
