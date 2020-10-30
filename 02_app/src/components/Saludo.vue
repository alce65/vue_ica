<template>
    <div>
        <!-- Binding en dos direcciones -->
        <!-- <p>Hola <span v-html="usuario"></span>, soy {{myName}}</p> -->
        <p class="resaltado">Hola <span>{{usuario}}</span>, soy {{myName}}</p>
        <input type="text" :placeholder="inputMsg" v-model="usuario">
        <button id="b" type="button" @click.prevent="onBorrar($event, 'b')">Borrar</button>
        <button id="bl" type="button" @click="onBorrar($event, 'bl')">Borrar lento</button>
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
    },
    methods: {
        onBorrar: function (ev, id) {
            console.log('Borando', ev, id)
            if (id === 'b') {
                this.borrar()
            } else {
                setTimeout(this.borrar, 1000)
            }
        },
        borrar : function () {
            this.usuario = ''
        }
    },
}
</script>

<style scoped>
    p {
        font-size: 1.5rem;  
    }
    .resaltado {
        color: brown;
    }
</style>