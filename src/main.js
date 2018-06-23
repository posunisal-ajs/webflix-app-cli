import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource';
Vue.use(VueResource);

import App from './App.vue'
// const Header = require('./assets/js/components/header.vue');
// const Footer = require('./assets/js/components/footer.vue');

//Funcionario
const AllFuncionarios = require('./assets/js/components/funcionario/all-funcionarios.vue');
const CreateFuncionario = require('./assets/js/components/funcionario/create-funcionario.vue');
const EditFuncionario = require('./assets/js/components/funcionario/edit-funcionario.vue');
const DeleteFuncionario = require('./assets/js/components/funcionario/delete-funcionario.vue');

//Departamento
const AllDepartamentos = require('./assets/js/components/departamento/all-departamentos.vue');
const CreateDepartamento = require('./assets/js/components/departamento/create-departamento.vue');
const EditDepartamento = require('./assets/js/components/departamento/edit-departamento.vue');
const DeleteDepartamento = require('./assets/js/components/departamento/delete-departamento.vue');

//Reuniao
const AllReunioes = require('./assets/js/components/reuniao/all-reunioes.vue');
const CreateReuniao = require('./assets/js/components/reuniao/create-reuniao.vue');
const EditReuniao = require('./assets/js/components/reuniao/edit-reuniao.vue');
const DeleteReuniao = require('./assets/js/components/reuniao/delete-reuniao.vue');

const routes = [
    {
        name: 'all_funcionarios',
        path: '/',
        component: AllFuncionarios,
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
    },
    {
        name: 'all_departamentos',
        path: '/departamentos',
        component: AllDepartamentos,  
    },
    {
        name: 'create_departamento',
        path: '/departamento/create',
        component: CreateDepartamento
    },
    {
        name: 'edit_departamento',
        path: '/departamento/edit/:id',
        component: EditDepartamento
    },
    {
        name: 'delete_departamento',
        path: '/departamento/delete/:id',
        component: DeleteDepartamento
    },
    {
        name: 'all_reunioes',
        path: '/reunioes',
        component: AllReunioes,  
    },
    {
        name: 'create_reuniao',
        path: '/reuniao/create',
        component: CreateReuniao
    },
    {
        name: 'edit_reuniao',
        path: '/reuniao/edit/:id',
        component: EditReuniao
    },
    {
        name: 'delete_reuniao',
        path: '/reuniao/delete/:id',
        component: DeleteReuniao
    },
];
var router = new VueRouter({ routes: routes, mode: 'history' });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');