import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faHome, faUserAlt, faCog, faSignOutAlt, faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { dom } from '@fortawesome/fontawesome-svg-core'
import store from './store'

library.add(faUserSecret, faHome, faUserAlt, faCog, faSignOutAlt, faComment, faHeart)
Vue.component('font-awesome-icon', FontAwesomeIcon)
dom.watch();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

