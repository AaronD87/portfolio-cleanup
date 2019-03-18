import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/Home.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';

Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});