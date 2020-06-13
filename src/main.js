import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './router';
import store from './store/index'

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router: new VueRouter(routes),
  store: store,
}).$mount('#app')
