<template>
    <div id="delete-funcionario">
        <h1>Excluir funcionário {{ funcionario.name }}</h1>

        <p><router-link :to="{ name: 'all_funcionarios' }">Ver funcionários</router-link></p>

        <notification v-bind:notifications="notifications"></notification>

        <form v-on:submit.prevent="deleteFuncionario">
            <p><button class="btn btn-danger">Excluir funcionário</button></p>
        </form>
    </div>
</template>

<script>
    import Notification from '../notifications.vue';

    export default{
        data(){
            return{
                funcionario:{},
                notifications:[]
            }
        },

        created: function(){
            this.getFuncionario();
        },

        methods: {
            getFuncionario: function()
            {
                this.$http.get('http://localhost:8080/employees/' + this.$route.params.id).then((response) => {
                    this.funcionario = response.body;
                }, (response) => {

                });
            },

            deleteFuncionario: function()
            {
                this.$http.delete('http://localhost:8080/employees/' + this.$route.params.id, this.funcionario, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.$router.push({name: 'all_funcionarios'})
                }, (response) => {
                    this.notifications.push({
                        type: 'danger',
                        message: 'Funcionário não excluído'
                    });
                });
            }
        },

        components: {
            'notification' : Notification
        }
    }
</script>
