// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import { Button } from 'element-ui';
Vue.config.productionTip = false
Vue.prototype.$http = axios; // 将axios挂载到vue的原型链上 给所有实例使用
Vue.prototype.bus = new Vue() 
Vue.use(Button);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
