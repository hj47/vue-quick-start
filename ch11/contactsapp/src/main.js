// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import es6promise from 'es6-promise'
import store from './store'

es6promise.polyfill()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  components: { App },
  template: '<App/>'
})
