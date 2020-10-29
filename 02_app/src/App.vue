<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Saludos, curso de Vue.js App"/>
    <Lista></Lista>
    <Tareas></Tareas>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Lista from './components/Lista.vue'
import Tareas from './components/Tareas.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Lista,
    Tareas
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
