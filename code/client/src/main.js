import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './style/index.css';
import './javascript/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import * as filters from './filters';

import customComponents from './custom-components';
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});
Vue.use(customComponents);
Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
