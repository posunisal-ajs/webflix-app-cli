<template>  
    <div>
        <div id="page" class="funcionarios-cont">
            <menuSite></menuSite>
            <transition name="fade">
                <router-view></router-view>
            </transition>
            <Rodape></Rodape>  
        </div>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>
     import menuHeader from './assets/js/components/header.vue';
     import menuFooter from './assets/js/components/footer.vue';

    export default{
        data(){
            return{

            }
        },
         components: {
             'menuSite': menuHeader,
             'Rodape': menuFooter,
         },
    }
</script>
