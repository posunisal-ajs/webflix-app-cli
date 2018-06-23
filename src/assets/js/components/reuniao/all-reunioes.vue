<template>
    
    <div id="all-reunioes" class="container padd-mancha">
        <div class="col-xs-12 col-sm-10 col-lg-10">
            <h2>Reuniões</h2>

            <p><router-link :to="{ name: 'create_reuniao' }" class="btn btn-primary">Novo</router-link></p>

            <div class="form-group">
                <input type="text" name="search" v-model="reuniaoSearch" placeholder="Procurar reunioes" class="form-control" v-on:keyup="searchReuniao">
            </div>
            <table class="table table-hover">
                <thead>
                <tr>
                    <td>Nome</td>
                    <td>Descrição</td>
                    <td>Ações</td>
                </tr>
                </thead>

                <tbody>
                    <tr v-for="reuniao in reunioes">
                        <td>{{ reuniao.name }}</td>
                        <td>{{ reuniao.description }}</td>
                       <!--  <td v-for="departamento in reunioes" v-if="funcionario.departmentId == departamento.id">{{ departamento.description}} </td> -->
                        
                        <td>
                            <router-link :to="{name: 'edit_reuniao', params: { id: reuniao.id }}" class="btn btn-primary">Editar</router-link>
                            <router-link :to="{name: 'delete_reuniao', params: { id: reuniao.id }}" class="btn btn-warning">Excluir</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                funcionarios: [],
                reunioes: [],
                originalReunioes: [],
                reuniaoSearch: '',
            }
        },
        computed: {
          },

        created: function()
        {
            this.fetchFuncionarioData();
            this.fetchReuniaoData();
        },
        methods: {
            fetchFuncionarioData: function()
            {
                this.$http.get('http://localhost:8080/employees').then((response) => {
                    this.funcionarios= response.body;
                    // this.originalReunioes = this.funcionarios
                }, (response) => {

                });
            },
            fetchReuniaoData: function()
            {
                this.$http.get('http://localhost:8080/meetings').then((response) => {
                    this.reunioes= response.body;
                    this.originalReunioes = this.reunioes
                }, (response) => {

                });
            },

            searchReuniao: function()
            {
                if(this.reuniaoSearch == '')
                {
                    this.reunioes= this.originalReunioes;
                    return;
                }

                var searchedReunioes = [];
                for(var i = 0; i < this.originalReunioes.length; i++)
                {
                    var departamentoName = this.originalReunioes[i]['name'].toLowerCase();
                    var departamentoDescription = this.originalReunioes[i]['description'].toLowerCase();

                    if(departamentoName.indexOf(this.reuniaoSearch.toLowerCase()) >= 0)
                    {
                        searchedReunioes.push(this.originalReunioes[i]);
                    }
                    else if(departamentoDescription.indexOf(this.reuniaoSearch.toLowerCase()) >= 0)
                    {
                        searchedReunioes.push(this.originalReunioes[i]);
                    }
                }

                this.reunioes= searchedReunioes;
            }
        }
    }
</script>
