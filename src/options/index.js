import Vue from 'vue'
import Options from './components/Options.vue'
import '../styles/styles.scss'

Vue.config.productionTip = false

Vue.prototype.$chrome = chrome

/* eslint-disable no-new */
new Vue({
  el: '#root',
  render: h => h(Options),
})
