import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
//  import App from './App';

const Home = resolve => {
  require.ensure(['./index.vue'], () => {
    resolve(require('./index.vue'));
  });
};

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
  children: [
    {
      path: 'children',
      component: require('./Banner.vue'),
    },
  ],
}, {
  path: '/m/:country.html',
  name: 'country',
  component: resolve => {
    require.ensure(['./sem.vue'], () => {
      resolve(require('./sem.vue'));
    });
  },
}, {
  path: '*',
  component: Home,
}];

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  routes,
});


/* eslint-disable no-new */
new Vue({
  router,
}).$mount('#app');
