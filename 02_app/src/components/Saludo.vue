<template>
    <div>
        <!-- Binding en dos direcciones -->
        <p>Hola {{usuario}}, soy {{myName}}</p>
        <input type="text" :placeholder="inputMsg" v-model="usuario">
    </div>
</template>

<script>
export default {
    name: 'Saludo',
    data: function () {
        return {
        usuario: 'Pepe',
        inputMsg: 'Dime tu nombre'
        }
    },
    props: {
        myName: String
    }
}
</script>

<style scoped>
    p {
        font-size: 1.5rem;
        color: brown;
    }
</style>