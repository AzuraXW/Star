import Vue from 'vue/dist/vue';
import entry from './app.vue';
import routes from './route.config';
import VueRouter from 'vue-router';
import hljs from 'highlight.js';
import vueScroll from 'vuescroll/dist/vuescroll-native';
import 'vuescroll/dist/vuescroll.css';
import vueScrollConfig from './config/vuescroll-config';

import StarxUI from '../src/index';
import '../src/styles/index.scss';
import './assets/styles/public.scss';

import demoBlock from './components/demo-block.vue';

Vue.use(StarxUI);
Vue.use(VueRouter);
Vue.use(vueScroll, {
  ops: vueScrollConfig
});
Vue.component('demo-block', demoBlock);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});

new Vue({
  ...entry,
  router
}).$mount('#app');
