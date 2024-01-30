import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import VueSweetalert2 from 'vue-sweetalert2';

Vue.config.productionTip = false;

// Verifica si hay un token almacenado en el LocalStorage
const storedToken = localStorage.getItem('token');
const storedUser = localStorage.getItem('user');

// Inicializa el estado Vuex con el token almacenado
 if (storedToken) {
  store.commit('setToken', storedToken);
  store.commit('setUser', storedUser);
 }

new Vue({
  router,
  store,
  vuetify,
  VueSweetalert2,
  render: h => h(App)
}).$mount('#app')
