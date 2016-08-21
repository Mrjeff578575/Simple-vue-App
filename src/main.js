import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import home from './components/Home.vue'
import weather from './components/Weather.vue'
import citylist from './components/citylist.vue'
import createWeather from './components/createWeather'

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
  },
  '/citylist': {
  	component: citylist,
  	subRoutes: {
  		'/createWeather': {
  			component:createWeather
  		}
  	}
  }
})
router.redirect({
  '*':'/home'
})
router.start(App,'#app')
