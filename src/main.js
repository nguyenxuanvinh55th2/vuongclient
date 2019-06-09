import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import {store} from './modules/store'
import navbar from './modules/navigation/index.js'
import VueSession from 'vue-session'
import MyPlugin from './plugins/myplugin.js'
import * as VueGoogleMaps from "vue2-google-maps"

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC4La47OJiw4_4Osqrop3mHxOZuRfAoVuw",
    libraries: "places"
  }
})
Vue.use(VueSession)
Vue.use(VueRouter)
Vue.use(MyPlugin)
Vue.config.productionTip = false

const routes = [
  ...navbar
]

const router = new VueRouter({
  routes, // short for `routes: routes`
  mode:'history'
})

router.beforeEach((to, from, next) => {
  let loginStatus = router.app.$session.get('login')
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if(requiresAuth && !loginStatus) {
    next('/login')
  } else {
    next()
  }
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
