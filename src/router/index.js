import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Home = () =>
    import( /* webpackChunkName: 'Home' */ '@/views/Home');

const router = new Router({
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes: [{
        path: '/',
        component: Home

    }]
});

export default router;