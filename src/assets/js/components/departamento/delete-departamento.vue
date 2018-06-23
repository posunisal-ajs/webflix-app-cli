<template>
    <div id="delete-departamento" class=" container padd-mancha">
        <h2>Excluir departamento {{ departamento.name }}</h2>

        <p><router-link :to="{ name: 'all_departamentos' }">Ver departamentos</router-link></p>

        <notification v-bind:notifications="notifications"></notification>

        <form v-on:submit.prevent="deleteDepartamento">
            <p><button class="btn btn-danger">Excluir departamento</button></p>
        </form>
    </div>
</template>

<script>
    import Notification from '../notifications.vue';

    export default{
        data(){
            return{
                departamento:{},
                notifications:[]
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

            deleteDepartamento: function()
            {
                this.$http.delete('http://localhost:8080/departments/' + this.$route.params.id, this.departamento, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.$router.push({name: 'all_departamentos'})
                }, (response) => {
                    this.notifications.push({
                        type: 'danger',
                        message: 'Departamento não excluído'
                    });
                });
            }
        },

        components: {
            'notification' : Notification
        }
    }
</script>
