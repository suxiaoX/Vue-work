/* eslint no-unused-vars: 0 */
/* eslint-disable no-new */
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import stores from './stores';

import App from './App';
import PartialConfBase from './components/PartialConfBase';

Vue.config.productionTip = false;

/**
 * use vue plugin
 */
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue);


/**
 * page configuration
 */
const routes = [
  {
    path: '/banner',
    component: PartialConfBase,
    name: 'banner',
    meta: {
      confType: 'Picture'
    }
  }
  // {
  //   path:'/form',
  //   component:ParticlConfBase,
  //   name:'from',
  //   meta:{
  //     confType:'Form'
  //   }
  // }


];
const router = new VueRouter({
    mode: 'hash',
    routes
});

// new Vue({
//   stores,
//   router,
//   components: { App },
// }).$mount('#app');

new Vue({
  el: '#app',
  store: stores,
  router: router,
  template: '<App/>',
  components: { App },
});
