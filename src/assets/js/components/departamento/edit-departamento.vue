<template>
    <div id="update-departamento" class="container">
        <div class="row col-xs-10 col-sm-8 col-lg-8 padd-mancha">
            <h2>Alterar departamento</h2>

            <p><router-link :to="{ name: 'all_departamentos' }">Ver departamentos</router-link></p>

            <notification v-bind:notifications="notifications"></notification>

            <form v-on:submit.prevent="editDepartamento">
                <div class="form-group">
                    <label name="departamento_id">ID</label>
                    <input type="text" class="form-control" disabled v-model="departamento.id" id="departamento_id">
                </div>

                <div class="form-group">
                    <label name="departamento_name">Nome</label>
                    <input type="text" class="form-control" v-model="departamento.name" id="departamento_name" >
                </div>

                <div class="form-group">
                    <label name="departamento_description">Descrição</label>
                    <input type="text" class="form-control" v-model="departamento.description" id="departamento_description" >
                </div>
                <!-- <div class="form-group">
                    <label name="departamento_departmentId">Dpt. ID</label>
                    <input type="text" class="form-control" v-model="departamento.departmentId" id="departamento_departmentId">
                </div> -->
                <!-- <div class="form-group">
                  <label for="sel1">Departamento</label>
                  <select class="form-control" id="sel1" v-model="departamento.departmentId">
                    <option v-for="departamento in departamentos" :value="departamento.id" value="departamento.id">{{departamento.description}}</option> 
                  </select>
                </div> -->

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
                departamento:{},
                departamentos: [],
                notifications:[],
            }
        },

        created: function(){
            this.getDepartamento();
        },

        methods: {
            getDepartamento: function()
            {
                this.$http.get('http://localhost:8080/departments/' + this.$route.params.id).then((response) => {
                    this.departamento = response.body;
                }, (response) => {

                });
            },
            editDepartamento: function()
            {
                // // Validation
                // var salary = parseFloat(this.departamento.salary);
                // if(isNaN(salary))
                // {
                //     this.notifications.push({
                //         type: 'danger',
                //         message: 'O Salário é composto por números'
                //     });
                //     return false;
                // }
                
                this.$http.put('http://localhost:8080/departments/' + this.$route.params.id, this.departamento, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.notifications.push({
                        type: 'success',
                        message: 'Departamento alterado com sucesso'
                    });
                }, (response) => {
                    this.notifications.push({
                        type: 'error',
                        message: 'Departamento não alterado'
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
