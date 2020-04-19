import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/reset.css';
import store from './store';

Vue.use(ElementUI);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
