<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Primeros componentes que creamos</p>
    <Saludo myName="Alejandro"></Saludo>
  </div>
</template>



<script>
import Saludo from './Saludo.vue'

export default {
  name: 'HelloWorld',
  components: {
    Saludo
  },
  created() {
    console.log('Created')
    console.log('props msg', this.msg)
  },
  mounted() {
    console.log('Mounted')
    console.log('props msg', this.msg)
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
