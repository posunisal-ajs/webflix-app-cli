<template>
    
    <div id="all-funcionarios" class="container padd-mancha">

        <div class="w-site">       
            <div class="msg-loading">
                <div class="mensagem">
                    <span class="glyphicon glyphicon-time"></span> Processando...
                </div>
            </div>
            <section>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-xs-12 col-md-12 col-lg-12 text-center">
                            <div>
                                <div class="clearfix"></div>
                                    <div class="row">
                                    <div class="col pt-4">
                                        <h2 class="pb-4">Lista de filmes</h2>
                                        <div class="form-group">
                                            <input type="text" name="search" v-model="movieSearch" placeholder="Procurar filmes" class="form-control" v-on:keyup="searchMovie">
                                        </div>
                                        <!-- <router-link :to="{ name: 'create_funcionario' }" class="btn btn-success pull-right mb-4">Adicionar <i class="fa fa-plus ml-1" ></i></router-link> -->
                                        <button data-target="#modalAdd" data-toggle="modal" class="btn btn-success pull-right mb-4">Adicionar <i class="fa fa-plus ml-1" ></i></button>
                                        <table class="table table-car-mob">
                                            <thead class="thead-default">
                                                <tr>
                                                <th class="w10">#</th>
                                                <th class="w30">Filme</th>
                                                <th class="w15">Gênero</th>
                                                <th class="w25">Imagem</th>
                                                <th class="w30">Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr id="filme" class="fwdDetalhe" :data-item="movie.id" v-for="movie in movies">
                                                    <td class="fwdId" :data-item="movie.id">{{ movie.id }}</td>
                                                    <td class="fwdNome" :data-item="movie.id">{{ movie.name }}</td>
                                                    <td class="fwdGenero" :data-item="movie.id"><span v-if="movie.category && movie.category[0]">{{movie.category[0].name}}</span></td>
                                                    <td class="fwdLancamento d-none" :data-item="movie.id">{{movie.publishIn}}</td>
                                                    <td class="fwdInformacoes d-none" :data-item="movie.id">{{movie.description}}</td>
                                                    <td class="fwdImg" :data-item="movie.id">
                                                        <span class="fwdImgName d-none" :data-item="movie.id"></span>
                                                        <span v-if="movie.images && movie.images[0]">
                                                            <img class="img-table fwdImageTable" :data-item="movie.id" :src="movie.images[0].url" />
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div class="d-inline-block">
                                                            <button type="submit" class="btn btn-icon icon-1 actOpenEditar" :data-item="movie.id" data-target="#modalEdit" data-toggle="modal"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                                        </div>
                                                        <div class="d-inline-block">
                                                            <button class="btn btn-icon icon-2 actOpenDetalhes" :data-item="movie.id" data-target="#modalDelete" data-toggle="modal"><i class="fa fa-trash-o" ></i></button>
                                                        </div>
                                                        <button class="btn btn-icon icon-2 actOpenDetalhes" :data-item="movie.id" data-target="#modalDetalhes" data-toggle="modal"><i class="fa fa-plus" ></i></button>
                                                    </td>
                                                </tr>
                                            </tbody> 
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div> 
                </div>
            </section>
        </div>
        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
        Launch demo modal
        </button> -->

        <!-- Modal Adicionar -->
        <div class="modal fade" id="modalAdd" tabindex="-1" role="dialog" aria-labelledby="modalAdd" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <div class="div--modal__adicionar"><h5 class="modal-title">Adicionar filme</h5></div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <notification v-bind:notifications="notifications"></notification>
                <form v-on:submit.prevent="addMovie" method="post" class="d-inline-block">
                    <div class="modal-body modal-body-bg">
                        <div class="form-group">
                            <input type="text" placeholder="Nome" name="nome" v-model="movie.name" id="movie_name" class="form-control" required="required"/>
                        </div>
                       <div class="form-group">
                            <select class="form-control" id="sel1" v-model="movie.category">
                                <option v-for="category in categoryes" :value="[category]" value="[category]">{{category.name}}</option> 
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Ano de Lançamento" name="lancamento" v-model="movie.publishIn" id="movie_publishIn" class="form-control" required="required"/>
                        </div>
                        <div class="form-group">
                            <textarea  placeholder="Informações" name="informacoes" v-model="movie.description" id="movie_description" rows="4" class="form-control" required="required"></textarea>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Link da imagem" name="imagem" class="form-control" required="required"/>
                        </div>
                        <!-- <div class="form-group">
                            <div class='input-wrapper'>
                                <div class="w100 text-center">
                                    <label for='file'>
                                        Selecionar imagem de capa
                                    </label>
                                </div>
                                <div class="w100 text-center">
                                <input type="file" name="file" id="file" size="60" />
                                <img id="img-1-add" class="img-page" src="#" alt="" />
                                <input type="hidden" name="imgFilme" id="imgFilme" value="">
                                </div>
                            </div>
                        </div> -->
                    </div>
                    <div class="modal-footer">
                            <input type="hidden" name="id" class="fwdIdFilme" value=""/>
                            <button type="submit" class="btn btn-success">Salvar</button>
                            <button type="button" class="btn btn-blue-nav" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                </div>
            </div>
        </div>

        <!-- Modal Editar -->
        <div class="modal fade" id="modalEdit" tabindex="-1" role="dialog" aria-labelledby="modalEdit" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <div class="div--modal__editar"><h5 class="modal-title">Editar filme</h5></div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <notification v-bind:notifications="notifications"></notification>
                <form v-on:submit.prevent="editMovie" method="post" class="d-inline-block">
                    <div class="modal-body modal-body-bg">
                        <div class="form-group">
                            <input type="text" placeholder="Nome" name="nome" id="name_edit" class="form-control fwdTituloEdit" required="required"/>
                        </div>
                        <div class="form-group">
                            <select class="form-control" id="sel1" v-model="movieEdit.category">
                                <option v-for="category in categoryes" :value="[category]" value="[category]" id="category_edit">{{category.name}}</option> 
                            </select>
                        </div>
                        <div class="form-group">
                            <input type="text" placeholder="Ano de lançamento" name="lancamento" class="form-control fwdLancamentoEdit" id="ano_edit" required="required"/>
                        </div>
                        <div class="form-group">
                            <textarea  placeholder="Informações" name="informacoes" rows="4" class="form-control fwdInformacoesEdit" id="informacoes_edit" required="required"></textarea>
                        </div>
                        <div class="form-group">
                            <div class='input-wrapper'>
                                <div class="w100 text-center">
                                    <label for='fileEdit'>
                                        Selecionar imagem de capa
                                    </label>
                                </div>
                                <div class="w100 text-center">
                                    <input type="file" name="fileEdit" id="fileEdit" size="60" />
                                    <img id="img-1-edit" class="img-page" src="#" alt="" />
                                    <input type="hidden" name="imgFilmeEdit" id="imgFilmeEdit" value="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                            <input type="hidden" name="id" class="fwdIdFilme inptEdit" value=""/>
                            <button type="submit" class="btn btn-success">Alterar</button>
                            <button type="button" class="btn btn-blue-nav" data-dismiss="modal">Cancelar</button>
                    </div>
                </form>
                </div>
            </div>
        </div>

        <!-- Modal List -->
        <div class="modal fade" id="modalDetalhes" tabindex="-1" role="dialog" aria-labelledby="modalDetalhes" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <div class="div--modal__detalhes"><h5 class="modal-title">Detalhes</h5></div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body modal-body-bg">
                    <div class="fwdTituloFilme div--modal__titulo"></div>
                    <div class="fwdImgFilme div--modal__imgFilme"><img class="img--modal__imgFilme fwdImagemDetalhe"/></div>
                    <div class="div--modal__genero"><strong>Gênero:</strong> <span class="fwdGeneroFilme"></span></div>
                    <div class="div--modal__lancamento"><strong>Data de lançamento:</strong> <span class="fwdLancamentoFilme"></span></div>
                    <div class="div--modal__informacoes"><strong>Informações:</strong> <span class="fwdInformacoesFilme"></span></div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-blue-nav" data-dismiss="modal">Fechar</button>
                    <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                </div>
                </div>
            </div>
        </div> 

        <!-- Modal Deletar -->
        <div class="modal fade" id="modalDelete" tabindex="-1" role="dialog" aria-labelledby="modalDelete" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <div class="div--modal__excluir"><h5 class="modal-title">Deseja realmente excluir?</h5></div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body modal-body-bg">
                    <div class="fwdTituloFilme div--modal__titulo"></div>
                    <div class="fwdImgFilme div--modal__imgFilme"><img class="img--modal__imgFilme fwdImagemDetalhe"/></div>
                </div>
                <div class="modal-footer">
                    <form v-on:submit.prevent="deleteMovie" method="post" class="d-inline-block">
                        <input type="hidden" name="id" class="fwdIdFilme inptApagar" v-model="movieId"/>
                        <button type="submit" class="btn btn-danger">Excluir</button>
                    </form>
                    <button type="button" class="btn btn-blue-nav" data-dismiss="modal">Cancelar</button>
                </div>
                
                </div>
            </div>
        </div>
    </div>

    
</template>

<script>
    import Notification from '../notifications.vue';
    export default{
        data(){
            return{
                movies: [],
                originalMovies: [],
                movieSearch: '',
                movie:{},
                movieEdit:{},
                notifications:[],
                categoryes:[],
                movieId: ''
            }
        },
        computed: {
        },

        created: function()
        {
            this.fetchMovieData();
            this.categoryData();
        },
        methods: {
            fetchMovieData: function()
            {
                this.$http.get('https://limitless-tundra-52590.herokuapp.com/api/v1/movie/all').then((response) => {
                    this.movies = response.body;
                    this.originalMovies = this.movies
                }, (response) => {

                });
            },

            categoryData: function()
            {
                this.$http.get('https://limitless-tundra-52590.herokuapp.com/api/v1/category/all').then((response) => {
                    this.categoryes = response.body;
                    this.originalCategoryes = this.categoryes
                    console.log(this.originalCategoryes)
                }, (response) => {

                });
            },

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
                    this.fetchMovieData();
                }, (response) => {
                    this.notifications.push({
                        type: 'error',
                        message: 'Filme não cadastrado.'
                    });
                });
            },

            editMovie: function()
            {
                this.movieId               = $(".inptEdit").val();
                this.movieEdit.name        = $("#name_edit").val();
                this.movieEdit.publishIn   = $("#ano_edit").val();
                this.movieEdit.description = $("#informacoes_edit").val();

                this.$http.put('https://limitless-tundra-52590.herokuapp.com/api/v1/movie/' + this.movieId, this.movieEdit, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    this.notifications.push({
                        type: 'success',
                        message: 'Filme alterado com sucesso'
                    });
                    this.fetchMovieData();
                }, (response) => {
                    this.notifications.push({
                        type: 'error',
                        message: 'Filme não alterado'
                    });
                });
            },

            deleteMovie: function()
            {   
                var id = $(".inptApagar").val();
                this.movieId = id;

                this.$http.delete('https://limitless-tundra-52590.herokuapp.com/api/v1/movie/' + id, this.movie, {
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }).then((response) => {
                    location.reload();
                }, (response) => {
                    this.notifications.push({
                        type: 'danger',
                        message: 'Filme não excluído'
                    });
                });
            },

            searchMovie: function()
            {
                if(this.movieSearch == '')
                {
                    this.movies= this.originalMovies;
                    return;
                }

                var searchedFuncionarios = [];
                for(var i = 0; i < this.originalMovies.length; i++)
                {
                    var movieName = this.originalMovies[i]['name'].toLowerCase();

                    if(movieName.indexOf(this.movieSearch.toLowerCase()) >= 0)
                    {
                        searchedFuncionarios.push(this.originalMovies[i]);
                    }
                }

                this.movies = searchedFuncionarios;
            }
        },

        components: {
            'notification' : Notification
        }
    }
    
</script>
