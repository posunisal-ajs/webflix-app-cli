<template>
    <div id="update-reuniao" class="container">
        <div class="row col-xs-10 col-sm-8 col-lg-8 padd-mancha">
            <h2>Alterar reunião</h2>

            <p><router-link :to="{ name: 'all_reunioes' }">Ver reuniões</router-link></p>

            <notification v-bind:notifications="notifications"></notification>

            <form v-on:submit.prevent="editReuniao">
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
                    <textarea type="text" class="form-control" v-model="reuniao.description" id="reuniao_description" >
                    </textarea>
                </div>
                <!-- <div class="form-group">
                    <label name="reuniao_departmentId">Dpt. ID</label>
                    <input type="text" class="form-control" v-model="reuniao.departmentId" id="reuniao_departmentId">
                </div> -->
                <!-- <div class="form-group">
                  <label for="sel1">Departamento</label>
                  <select class="form-control" id="sel1" v-model="reuniao.departmentId">
                    <option v-for="departamento in departamentos" :value="reuniao.id" value="reuniao.id">{{reuniao.description}}</option> 
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
                reuniao:{},
                reunioes: [],
                notifications:[],
            }
        },

        created: function(){
            this.getReuniao();
        },

        methods: {
            getReuniao: function()
            {
                this.$http.get('http://localhost:8080/meetings/' + this.$route.params.id).then((response) => {
                    this.reuniao = response.body;
                }, (response) => {

                });
            },
            editReuniao: function()
            {
                // // Validation
                // var salary = parseFloat(this.reuniao.salary);
                // if(isNaN(salary))
                // {
                //     this.notifications.push({
                //         type: 'danger',
                //         message: 'O Salário é composto por números'
                //     });
                //     return false;
                // }
                
                this.$http.put('http://localhost:8080/meetings/' + this.$route.params.id, this.reuniao, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.notifications.push({
                        type: 'success',
                        message: 'Reunião alterado com sucesso'
                    });
                }, (response) => {
                    this.notifications.push({
                        type: 'error',
                        message: 'Reunião não alterado'
                    });
                });
            },
            // fetchDepartamentoData: function()
            // {
            //     this.$http.get('http://localhost:8080/departments').then((response) => {
            //         this.reuniao= response.body;
            //     }, (response) => {

            //     });
            // },
        },

        components: {
            'notification' : Notification
        }
    }
</script>
