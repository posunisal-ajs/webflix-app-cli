<template>
    <div id="create-funcionario" class="container" >
        <div class="row col-xs-10 col-sm-12 col-lg-12 padd-mancha">
            <div class="col-xs-10 col-sm-12 col-lg-12">
                <h1>Cadastrar Filme</h1>
                <p><router-link :to="{ name: 'all_filmes' }">Ver Filmes</router-link></p>
            </div>
            <notification v-bind:notifications="notifications"></notification>

            <form v-on:submit.prevent="addMovie">
                <div class="col-xs-10 col-sm-12 col-lg-12">

                    <div class="form-group">
                        <label name="funcionario_name">Nome</label>
                        <input type="text" class="form-control" v-model="movie.name" id="filme_name" >
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
                movie:{},
                notifications:[],
            }
        },
        methods: {
            addMovie: function()
            {
                this.$http.post('https://limitless-tundra-52590.herokuapp.com/api/v1/movie', this.movie, {
                    headers : {
                        'Content-Type' : 'application/json',
                        "Accept": "*/*"
                    }
                }).then((response) => {
                    this.notifications.push({
                        type: 'success',
                        message: 'Filme Cadastrado com sucesso.'
                    });
                }, (response) => {
                    this.notifications.push({
                        type: 'error',
                        message: 'Filme não cadastrado.'
                    });
                });
            },
        },

        components: {
            'notification' : Notification
        }
    }
</script>
