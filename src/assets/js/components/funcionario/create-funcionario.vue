<template>
    <div id="create-funcionario" class="container" >
        <div class="row col-xs-10 col-sm-12 col-lg-12 padd-mancha">
            <div class="col-xs-10 col-sm-12 col-lg-12">
                <h1>Cadastrar Funcionário</h1>
                <p><router-link :to="{ name: 'all_funcionarios' }">Ver funcionários</router-link></p>
            </div>
            <notification v-bind:notifications="notifications"></notification>

            <form v-on:submit.prevent="addFuncionario">
                <div class="col-xs-10 col-sm-6 col-lg-6">
                    <div class="form-group">
                        <label name="funcionario_id">ID</label>
                        <input type="text" class="form-control" disabled v-model="funcionario.id" id="funcionario_id">
                    </div>

                    <div class="form-group">
                        <label name="funcionario_name">Name</label>
                        <input type="text" class="form-control" v-model="funcionario.name" id="funcionario_name" >
                    </div>

                    <div class="form-group">
                        <label name="funcionario_surname">Sobrenome</label>
                        <input type="text" class="form-control" v-model="funcionario.surname" id="funcionario_surname" >
                    </div>
                    <div class="form-group">
                        <label name="funcionario_salary">Salário</label>
                        <input type="text" class="form-control" v-model="funcionario.salary" id="funcionario_salary" >
                    </div>
                    <!-- <div class="form-group">
                        <label name="funcionario_departmentId">Departamento</label>
                        <input type="text" class="form-control" v-model="funcionario.departmentId" id="funcionario_departmentId" >
                    </div> -->
                     <!-- <div class="form-group" v-for="departamento in departamentos">
                        <label name="funcionario_departament" for="{departamento.description}"><input type="radio" name="departamentos" :value="departamento.id" v-model="funcionario.departmentId" id="{departamento.description}">{{departamento.id}}</label>
                        
                    </div> -->
                    <div class="form-group">
                      <label for="sel1">Departamento</label>
                      <select class="form-control" id="sel1" v-model="funcionario.departmentId">
                        <option v-for="departamento in departamentos" :value="departamento.id" value="departamento.id">{{departamento.description}}</option> 
                      </select>
                    </div>

                    <div class="form-group">
                        <button class="btn btn-primary">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import Notification from '../notifications.vue';

    export default{
        data(){
            return{
                funcionario:{},
                departamentos: [],
                notifications:[],
            }
        },
        created: function() {
            this.fetchDepartamentoData();
        },
        methods: {
            addFuncionario: function()
            {
                // Validation
                var salary = parseFloat(this.funcionario.salary);
                if(isNaN(salary))
                {
                    this.notifications.push({
                        type: 'danger',
                        message: 'O salário é composto por números.'
                    });
                    return false;
                } else {
                    this.funcionario.salary = this.funcionario.salary;
                }

                this.$http.post('http://localhost:8080/employees/', this.funcionario, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.notifications.push({
                        type: 'success',
                        message: 'Funcionário Cadastrado com sucesso.'
                    });
                }, (response) => {
                    this.notifications.push({
                        type: 'error',
                        message: 'Funcionário não cadastrado.'
                    });
                });
            },
            fetchDepartamentoData: function()
            {
                this.$http.get('http://localhost:8080/departments').then((response) => {
                    this.departamentos= response.body;
                }, (response) => {

                });
            },
        },

        components: {
            'notification' : Notification
        }
    }
</script>
