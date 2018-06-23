<template>
    <div id="delete-reuniao" class=" container padd-mancha">
        <h2>Excluir reuniao {{ reuniao.name }}</h2>

        <p><router-link :to="{ name: 'all_reunioes' }">Ver reuniões</router-link></p>

        <notification v-bind:notifications="notifications"></notification>

        <form v-on:submit.prevent="deleteReuniao">
            <p><button class="btn btn-danger">Excluir reunião</button></p>
        </form>
    </div>
</template>

<script>
    import Notification from '../notifications.vue';

    export default{
        data(){
            return{
                reuniao:{},
                notifications:[]
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

            deleteReuniao: function()
            {
                this.$http.delete('http://localhost:8080/meetings/' + this.$route.params.id, this.reuniao, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.$router.push({name: 'all_reunioes'})
                }, (response) => {
                    this.notifications.push({
                        type: 'danger',
                        message: 'Reunião não excluído'
                    });
                });
            }
        },

        components: {
            'notification' : Notification
        }
    }
</script>
