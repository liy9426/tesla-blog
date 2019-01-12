import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const _import_ = file => () => import('views/' + file + '.vue');

const Layout = _import_('Layout/index');
const Article = _import_('Article/index');
const List = _import_('List/index');

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/home',
            component: Layout,
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: List
                },
                {
                    path: 'model-s',
                    component: List,
                    name: 'model-s'
                },
                {
                    path: 'model-3',
                    component: List,
                    name: 'model-3'
                },
                {
                    path: 'model-x',
                    component: List,
                    name: 'model-x'
                },
                {
                    path: 'model-y',
                    component: List,
                    name: 'model-y'
                },
                {
                    path: 'tesla-china',
                    component: List,
                    name: 'tesla-china'
                },
                {
                    path: 'tesla-world',
                    component: List,
                    name: 'tesla-world'
                },
                {
                    path: 'geek',
                    component: List,
                    name: 'geek'
                },
                {
                    path: '/article/:id',
                    component: Article,
                    name: 'article'
                }
            ]
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
});

export default router;
