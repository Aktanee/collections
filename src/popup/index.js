import Vue from 'vue'
import Popup from './components/Popup.vue'
import Storage from './services/storage'
import '../styles/styles.scss'

Vue.config.productionTip = false

const StoragePlugin = {
  install() {
    const storage = new Storage(chrome)
    Vue.storage = storage
    Vue.prototype.$storage = storage
    Vue.prototype.$chrome = chrome
  },
}

Vue.use(StoragePlugin)

/* eslint-disable no-new */
new Vue({
  el: '#root',
  render: h => h(Popup),
})
