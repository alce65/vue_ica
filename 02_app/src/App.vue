<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Saludos, curso de Vue.js App"/>
    <Lista></Lista>
    <Tareas></Tareas>
    <Codex></Codex>
    <Letras></Letras>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Lista from './components/Lista.vue'
import Tareas from './components/Tareas.vue'
import Codex from './components/Codificador.vue'
import Letras from './components/Letras.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Lista,
    Tareas,
    Codex,
    Letras
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
