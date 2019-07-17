import Vue from 'vue'
import ElementUI from 'element-ui'; //ui ishlashi uchun (ElementUI)
import 'element-ui/lib/theme-chalk/index.css'; //ui ishlashi uchun (ElementUI)
import locale from 'element-ui/lib/locale/lang/en' //inglis tilida bo'lishi uchun {locale} ham


Vue.use(ElementUI, {locale});

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
