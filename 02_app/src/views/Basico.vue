<template>
    <div>
        <h2>Componentes básicos - Curso de Vue</h2>
        <Lista></Lista>
        <Tareas></Tareas>
        <Codex></Codex>
        <Letras></Letras>
    </div>
</template>

<script>
import Lista from '../components/Lista.vue'
import Tareas from '../components/Tareas.vue'
import Codex from '../components/Codificador.vue'
import Letras from '../components/Letras.vue'

export default {
    components: {
        Lista,
        Tareas,
        Codex,
        Letras
    }
}
</script>

<style scoped>

</style>