<template>
    
    <div id="all-departamentos" class="container padd-mancha">
        <div class="col-xs-12 col-sm-10 col-lg-10">
            <h2>Departamentos</h2>

            <p><router-link :to="{ name: 'create_departamento' }" class="btn btn-primary">Novo</router-link></p>

            <div class="form-group">
                <input type="text" name="search" v-model="departamentoSearch" placeholder="Procurar departamentos" class="form-control" v-on:keyup="searchDepartamento">
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
                    <tr v-for="departamento in departamentos">
                        <td>{{ departamento.name }}</td>
                        <td>{{ departamento.description }}</td>
                       <!--  <td v-for="departamento in departamentos" v-if="funcionario.departmentId == departamento.id">{{ departamento.description}} </td> -->
                        
                        <td>
                            <router-link :to="{name: 'edit_departamento', params: { id: departamento.id }}" class="btn btn-primary">Editar</router-link>
                            <router-link :to="{name: 'delete_departamento', params: { id: departamento.id }}" class="btn btn-warning">Excluir</router-link>
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
                departamentos: [],
                originalDepartamentos: [],
                departamentoSearch: '',
            }
        },
        computed: {
          },

        created: function()
        {
            this.fetchFuncionarioData();
            this.fetchDepartamentoData();
        },
        methods: {
            fetchFuncionarioData: function()
            {
                this.$http.get('http://localhost:8080/employees').then((response) => {
                    this.funcionarios= response.body;
                    // this.originalDepartamentos = this.funcionarios
                }, (response) => {

                });
            },
            fetchDepartamentoData: function()
            {
                this.$http.get('http://localhost:8080/departments').then((response) => {
                    this.departamentos= response.body;
                    this.originalDepartamentos = this.departamentos
                }, (response) => {

                });
            },

            searchDepartamento: function()
            {
                if(this.departamentoSearch == '')
                {
                    this.departamentos= this.originalDepartamentos;
                    return;
                }

                var searchedDepartamentos = [];
                for(var i = 0; i < this.originalDepartamentos.length; i++)
                {
                    var departamentoName = this.originalDepartamentos[i]['name'].toLowerCase();
                    var departamentoDescription = this.originalDepartamentos[i]['description'].toLowerCase();

                    if(departamentoName.indexOf(this.departamentoSearch.toLowerCase()) >= 0)
                    {
                        searchedDepartamentos.push(this.originalDepartamentos[i]);
                    }
                    else if(departamentoDescription.indexOf(this.departamentoSearch.toLowerCase()) >= 0)
                    {
                        searchedDepartamentos.push(this.originalDepartamentos[i]);
                    }
                }

                this.departamentos= searchedDepartamentos;
            }
        }
    }
</script>
