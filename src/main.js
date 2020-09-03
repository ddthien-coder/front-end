import Vue from 'vue'
import VueFuse from 'vue-fuse'
import VModal from 'vue-js-modal'
import ToggleButton from 'vue-js-toggle-button'
import * as VeeValidate from 'vee-validate';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import App from '@/App'
import router from '@/router/router'
import i18n from '@/i18n'
import store from './store'

Vue.use(ToggleButton)
Vue.use(VueFuse)
Vue.use(VModal)
Vue.use(VeeValidate)

// use beforeEach route guard to set the language
router.beforeEach((to, from, next) => {

  // use the language from the routing param or default language
  let language = to.params.lang;
  if (!language) {
    language = 'en'
  }

  // set the current language for i18n.
  i18n.locale = language
  next()
})

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
