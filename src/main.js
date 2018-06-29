import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource';
Vue.use(VueResource);

import App from './App.vue'
// const Header = require('./assets/js/components/header.vue');
// const Footer = require('./assets/js/components/footer.vue');

//Filme
const Filmes = require('./assets/js/components/filme/filmes.vue');

const routes = [
    {
        name: 'filmes',
        path: '/',
        component: Filmes,
    },
];
var router = new VueRouter({ routes: routes, mode: 'history' });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');