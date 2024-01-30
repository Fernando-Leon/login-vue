<template>
    <div>
      <!-- Utilizamos el icono con el nombre proporcionado como prop -->
      <i :class="`${iconName}`"></i>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      // Definimos la prop "iconName" que recibirá el nombre del icono
      iconName: {
        type: String,
        required: true
      }
    }
  };
  </script>