<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Usuarios></Usuarios>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Usuarios from '../components/Usuarios.vue'

export default {
  components: {
    HelloWorld,
    Usuarios
  }
}
</script>
