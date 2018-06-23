<template>
<div class="navbar navbar-inverse navbar-fixed-top">
  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="#">Help - Gestão</a>
  </div>
  <div class="navbar-collapse collapse">
    <ul class="nav navbar-nav">
        <li class="active"><router-link :to="{ name: 'all_funcionarios' }">Funcionários</router-link></li>
        <li class="active"><router-link :to="{ name: 'all_departamentos' }">Departamentos</router-link></li>
        <li class="active"><router-link :to="{ name: 'all_reunioes' }">Reuniões</router-link></li>
    </ul>
  </div>
</div>
</template>