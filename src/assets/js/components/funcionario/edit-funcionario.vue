<template>
    <div id="update-funcionario" class="container">
        <div class="row col-xs-10 col-sm-8 col-lg-8 padd-mancha">
            <h1>Alterar funcionário</h1>

            <p><router-link :to="{ name: 'all_funcionarios' }">Ver funcionários</router-link></p>

            <notification v-bind:notifications="notifications"></notification>

            <form v-on:submit.prevent="editFuncionario">
                <div class="form-group">
                    <label name="funcionario_id">ID</label>
                    <input type="text" class="form-control" disabled v-model="funcionario.id" id="funcionario_id">
                </div>

                <div class="form-group">
                    <label name="funcionario_name">Nome</label>
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
                    <label name="funcionario_departmentId">Dpt. ID</label>
                    <input type="text" class="form-control" v-model="funcionario.departmentId" id="funcionario_departmentId">
                </div> -->
                <div class="form-group">
                  <label for="sel1">Departamento</label>
                  <select class="form-control" id="sel1" v-model="funcionario.departmentId">
                    <option v-for="departamento in departamentos" :value="departamento.id" value="departamento.id">{{departamento.description}}</option> 
                  </select>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary">Alterar</button>
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

        created: function(){
            this.getFuncionario();
            this.fetchDepartamentoData();
        },

        methods: {
            getFuncionario: function()
            {
                this.$http.get('http://localhost:8080/employees/' + this.$route.params.id).then((response) => {
                    this.funcionario = response.body;
                }, (response) => {

                });
            },
            editFuncionario: function()
            {
                // Validation
                var salary = parseFloat(this.funcionario.salary);
                if(isNaN(salary))
                {
                    this.notifications.push({
                        type: 'danger',
                        message: 'O Salário é composto por números'
                    });
                    return false;
                }
                
                this.$http.put('http://localhost:8080/employees/' + this.$route.params.id, this.funcionario, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.notifications.push({
                        type: 'success',
                        message: 'Funcionario alterado com sucesso'
                    });
                }, (response) => {
                    this.notifications.push({
                        type: 'error',
                        message: 'Funcionario não alterado'
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
