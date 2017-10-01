import Vue from 'vue';
import weex from 'weex-vue-render';  
weex.init(Vue);
import Index from './index.vue'
import Router from './router.js'
import Store from './store.js'
import { sync } from 'vuex-router-sync'
import * as filters from './filters'
import mixins from './mixins'

 

const { router } = Router(Vue);
const { store } = Store(Vue);

// sync the router with the vuex store.
// this registers `store.state.route`
//sync(store, router)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.mixin(mixins)
export default new Vue(Vue.util.extend({
  el: '#root',
  data: { val: url },
  mounted: function () {
      var qrcodedraw = new QRCodeLib.QRCodeDraw();
      console.log(document.getElementById('canvas'), this.val)
      qrcodedraw.draw(document.getElementById('canvas'), this.val, function () {})
  },
  router,
  store }, Index));

router.push('/')