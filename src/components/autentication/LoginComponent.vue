<template>
  <div class="flex justify-center items-center h-lvh w-full h-full bgimg">
          <form class="grid rounded-sm p-12 shadow-lg h-auto gap-8 items-center justify-center bg-white bg-opacity-20 backdrop-blur-lggrid rounded-lg p-12 shadow-lg h-auto gap-8 items-center justify-center bg-white bg-opacity-20 backdrop-blur-lg" @submit.prevent="handleForm">
            
            <h3 class="text-2xl font-semibold text-center w-full">Iniciar sesión</h3>
.
              <div class="flex gap-2 flex-col min-w-96">
                <label class="font-semibold text-sm">Nombre de usuario</label>
                <v-text-field
                v-model="user.userName"
                color="indigo"
                class="focused:border-indigo-500 w-full outline-none rounded-sm p-2 pl-3"
                ></v-text-field>
              </div>

              <div class="flex gap-2 flex-col min-w-96">
                <label class="font-semibold text-sm">Contrasena</label>
                <v-text-field
                  v-model="user.password"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-2"
                  value="wqfasds"
                  class="focused:border-yellow-500 w-full outline-none rounded-sm p-2 pl-3"
                  @click:append="show1 = !show1"
                ></v-text-field>
              </div>
            
            <p v-if="error === true" class="w-auto text-center text-red-600 ml-5 mr-5"> {{ mesage }}</p>
            
            <div class="flex w-full items-center justify-center">
                <button class="pl-4 pr-4 pb-2 pt-2 rounded-sm shadow-lg bg-white hover:bg-red-400 hover:text-white" @click="logIn">
                  Iniciar sesión    
                </button>
            </div>
          
          </form>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data() {
    return {
      user: {
        userName: "",
        password: "",
      },
      show1: false,
      mesage: "",
      error: false,
    };
  },
  methods: {
    logIn() {
      this.$store.commit("setUserName", this.user.userName);
      this.$store.commit("setPassword", this.user.password);
      this.$router.push('/about'); 
    },
  },
};
</script>


<style scoped>
  .bgimg {
    background-image: url('@/assets/background.jpg');
    background-size: cover;
    background-position: center;
  }   

  .v-text-field--outlined fieldset {
    border: solid 2px #214f6e !important;
    }.v-text-field--outlined fieldset {
    border: solid 2px #214f6e !important;
    }

</style>