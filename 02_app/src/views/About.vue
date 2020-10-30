<template>
  <div class="about">
    <h1>Acerca de nosotros</h1>
    <Astro>
      Imagen del {{hoy}}
    </Astro>
  </div>
</template>

<script>
import Astro from '../components/Astro.vue'

export default {
  components: {
    Astro
  }, 
  data() {
    return {
      hoy: (new Date()).toLocaleDateString()
    }
  },
}
</script>