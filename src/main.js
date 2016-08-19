import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import home from './components/Home.vue'
import weather from './components/Weather.vue'

/* eslint-disable no-new */

Vue.use(VueResource)
Vue.use(VueRouter)
const router = new VueRouter()

router.map({
  '/home': {
    component: home
  },
  '/weather': {
    component: weather
  }
})
router.redirect({
  '*':'/home'
})
router.start(App,'#app')
