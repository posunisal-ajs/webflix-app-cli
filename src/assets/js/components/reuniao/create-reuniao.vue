<template>
    <div id="create-departamento" class="container" >
        <div class="row col-xs-10 col-sm-12 col-lg-12 padd-mancha">
            <div class="col-xs-10 col-sm-12 col-lg-12">
                <h2>Cadastrar Reunião</h2>
                <p><router-link :to="{ name: 'all_reunioes' }">Ver Reuniões</router-link></p>
            </div>
            <notification v-bind:notifications="notifications"></notification>

            <form v-on:submit.prevent="addReuniao">
                <div class="col-xs-10 col-sm-6 col-lg-6">
                    <div class="form-group">
                        <!-- <label name="reuniao_id">ID</label> -->
                        <input type="hidden" class="form-control" disabled v-model="reuniao.id" id="reuniao_id">
                    </div>

                    <div class="form-group">
                        <label name="reuniao_name">Nome</label>
                        <input type="text" class="form-control" v-model="reuniao.name" id="reuniao_name" >
                    </div>

                    <div class="form-group">
                        <label name="reuniao_description">Descrição</label>
                        <textarea type="textarea" class="form-control" v-model="reuniao.description" id="reuniao_description" >
                        </textarea>
                    </div>
                    <!-- <div class="form-group">
                        <label name="reuniao_departmentId">Departamento</label>
                        <input type="text" class="form-control" v-model="reuniao.departmentId" id="reuniao_departmentId" >
                    </div> -->
                     <!-- <div class="form-group" v-for="departamento in departamentos">
                        <label name="reuniao_departament" for="{reuniao.description}"><input type="radio" name="departamentos" :value="reuniao.id" v-model="reuniao.departmentId" id="{reuniao.description}">{{reuniao.id}}</label>
                        
                    </div> -->
                    <!-- <div class="form-group">
                      <label for="sel1">Departamento</label>
                      <select class="form-control" id="sel1" v-model="reuniao.departmentId">
                        <option v-for="departamento in departamentos" :value="reuniao.id" value="reuniao.id">{{reuniao.description}}</option> 
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
                reuniao:{},
                reunioes: [],
                notifications:[],
            }
        },
        created: function() {
            // this.fetchDepartamentoData();
        },
        methods: {
            addReuniao: function()
            {
                // // Validation
                // var salary = parseFloat(this.reuniao.salary);
                // if(isNaN(salary))
                // {
                //     this.notifications.push({
                //         type: 'danger',
                //         message: 'O salário é composto por números.'
                //     });
                //     return false;
                // } else {
                //     this.reuniao.salary = this.reuniao.salary;
                // }

                this.$http.post('http://localhost:8080/meetings/', this.reuniao, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.notifications.push({
                        type: 'success',
                        message: 'Reunião Cadastrado com sucesso.'
                    });
                }, (response) => {
                    this.notifications.push({
                        type: 'error',
                        message: 'Reunião não cadastrado.'
                    });
                });
            },
            // fetchDepartamentoData: function()
            // {
            //     this.$http.get('http://localhost:8080/departments').then((response) => {
            //         this.reunioes= response.body;
            //     }, (response) => {

            //     });
            // },
        },

        components: {
            'notification' : Notification
        }
    }
</script>
