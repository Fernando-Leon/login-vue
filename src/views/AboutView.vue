<template>
  <div class="flex flex-col gap-4 justify-center items-center h-lvh w-full h-full bgimg">
    <h1 class="text-xl">Nombre de usuario: <span class="text-red-600 font-semibold"> {{ userName }} </span></h1>
    <h2 class="text-xl" >Contrasena: <span class="text-red-600 font-semibold">{{ password }}</span> </h2>
  </div>
</template>

<script>
export default {
  name: "AboutView",
  computed: {
    userName() { return this.$store.state.userName; },  
    password() { return this.$store.state.password; },
  },
};
</script>
<style scoped>
  .bgimg {
    background-image: url('@/assets/background.jpg');
    background-size: cover;
    background-position: center;
  }   

</style>
