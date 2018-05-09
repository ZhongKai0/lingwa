import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import component from './component';


// import Vue from 'vue';
// import Mint from 'mint-ui';
// Vue.use(Mint);
import {init} from "./utils/date";
component(Vue)
// init()

Vue.config.devtools = true;
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
