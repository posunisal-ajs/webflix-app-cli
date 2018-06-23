<template>
    <div id="create-departamento" class="container" >
        <div class="row col-xs-10 col-sm-12 col-lg-12 padd-mancha">
            <div class="col-xs-10 col-sm-12 col-lg-12">
                <h2>Cadastrar Departamento</h2>
                <p><router-link :to="{ name: 'all_departamentos' }">Ver Departamentos</router-link></p>
            </div>
            <notification v-bind:notifications="notifications"></notification>

            <form v-on:submit.prevent="addDepartamento">
                <div class="col-xs-10 col-sm-6 col-lg-6">
                    <div class="form-group">
                        <label name="departamento_id">ID</label>
                        <input type="text" class="form-control" disabled v-model="departamento.id" id="departamento_id">
                    </div>

                    <div class="form-group">
                        <label name="departamento_name">Name</label>
                        <input type="text" class="form-control" v-model="departamento.name" id="departamento_name" >
                    </div>

                    <div class="form-group">
                        <label name="departamento_description">Descrição</label>
                        <input type="text" class="form-control" v-model="departamento.description" id="departamento_description" >
                    </div>
                    <!-- <div class="form-group">
                        <label name="departamento_departmentId">Departamento</label>
                        <input type="text" class="form-control" v-model="departamento.departmentId" id="departamento_departmentId" >
                    </div> -->
                     <!-- <div class="form-group" v-for="departamento in departamentos">
                        <label name="departamento_departament" for="{departamento.description}"><input type="radio" name="departamentos" :value="departamento.id" v-model="departamento.departmentId" id="{departamento.description}">{{departamento.id}}</label>
                        
                    </div> -->
                    <!-- <div class="form-group">
                      <label for="sel1">Departamento</label>
                      <select class="form-control" id="sel1" v-model="departamento.departmentId">
                        <option v-for="departamento in departamentos" :value="departamento.id" value="departamento.id">{{departamento.description}}</option> 
                      </select>
                    </div> -->

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
                departamento:{},
                departamentos: [],
                notifications:[],
            }
        },
        created: function() {
            // this.fetchDepartamentoData();
        },
        methods: {
            addDepartamento: function()
            {
                // // Validation
                // var salary = parseFloat(this.departamento.salary);
                // if(isNaN(salary))
                // {
                //     this.notifications.push({
                //         type: 'danger',
                //         message: 'O salário é composto por números.'
                //     });
                //     return false;
                // } else {
                //     this.departamento.salary = this.departamento.salary;
                // }

                this.$http.post('http://localhost:8080/departments/', this.departamento, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.notifications.push({
                        type: 'success',
                        message: 'Departamento Cadastrado com sucesso.'
                    });
                }, (response) => {
                    this.notifications.push({
                        type: 'error',
                        message: 'Departamento não cadastrado.'
                    });
                });
            },
            // fetchDepartamentoData: function()
            // {
            //     this.$http.get('http://localhost:8080/departments').then((response) => {
            //         this.departamentos= response.body;
            //     }, (response) => {

            //     });
            // },
        },

        components: {
            'notification' : Notification
        }
    }
</script>
