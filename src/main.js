// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueWaypoint from 'vue-waypoint'
import VueSmoothScroll from 'vue-smooth-scroll'

// Waypoint plugin
Vue.use(VueWaypoint)
// Smooth Scroll plugin
Vue.use(VueSmoothScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
