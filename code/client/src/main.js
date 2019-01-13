import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/style/index.css';
import './assets/js/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import IconSvg from './components/Icon-svg/';
import * as filters from './filters';
import 'vue-social-share/dist/client.css';

// 全局过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});

// element ui组件
Vue.use(ElementUI);

// 全局组件
Vue.component('Icon', IconSvg);

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
