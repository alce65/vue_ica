<template>
    <div>
        <h2>Codex</h2>
        <input type="text" v-model="cadena" :placeholder="msg">
        <p>CADENA : {{cadena}}</p>
        <p>Prop Comp REVERSE : {{cadenaReverse}}</p>
        <p>FILTRO REVERSE : {{cadena | reverse }}</p>
        <p>Time: {{now}}</p>
        <p>Time: {{renderNow()}}</p>
    </div>
</template>

<script>
export default {
    name: 'Codex',
    data() {
        return {
            msg: 'Escribe un texto',
            cadena: ''
        }
    },
    filters: {
        reverse(item) {
            return item.split('').reverse().join('')
        }
    },

    computed: {
        cadenaReverse() {
            return this.cadena.split('').reverse().join('')
        },
        now() {
            const fecha = new Date()
            return String(fecha.getHours())
                    + String(fecha.getMinutes())
                    + String(fecha.getSeconds())
        }
    },
    methods: {
        renderNow() {
            const fecha = new Date()
            return String(fecha.getHours())
                    + String(fecha.getMinutes())
                    + String(fecha.getSeconds())
        }
    },
    watch: {
        cadena(newCadena,oldCadena){
            console.log('Antes', oldCadena)
            console.log('Ahora', newCadena)
        }
    },
}
</script>
