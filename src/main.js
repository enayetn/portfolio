// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Buefy, {
  defaultIconPack: 'mdi',
});

Vue.mixin({
  methods: {
    reqFullscreen: (evt) => {
      evt.target.requestFullscreen();
    },
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
