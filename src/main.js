import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource';
Vue.use(VueResource);

import App from './App.vue'
// const Header = require('./assets/js/components/header.vue');
// const Footer = require('./assets/js/components/footer.vue');

//Funcionario
const Filmes = require('./assets/js/components/filme/filmes.vue');
const CreateFuncionario = require('./assets/js/components/funcionario/create-funcionario.vue');
const EditFuncionario = require('./assets/js/components/funcionario/edit-funcionario.vue');
const DeleteFuncionario = require('./assets/js/components/funcionario/delete-funcionario.vue');

const routes = [
    {
        name: 'filmes',
        path: '/',
        component: Filmes,
    },
    {
        name: 'create_funcionario',
        path: '/funcionario/create',
        component: CreateFuncionario
    },
    {
        name: 'edit_funcionario',
        path: '/funcionario/edit/:id',
        component: EditFuncionario
    },
    {
        name: 'delete_funcionario',
        path: '/funcionario/delete/:id',
        component: DeleteFuncionario
    }
];
var router = new VueRouter({ routes: routes, mode: 'history' });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');