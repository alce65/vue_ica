<template>
    <div>
        <h2>Lista</h2>
        <input type="text" placeholder="Items" v-model="item">
        <button type="button" @click="onGuardar()">Guardar</button>
        <div v-show="aDatos.length">
            <h3>Items</h3>
            <ul>
                <li v-for="(item, i) in aDatos" :key="i">
                    {{item}} <span @click="onBorrar(i)">🗑</span>
                </li>
            </ul>
        </div>
        <div v-show="!aDatos.length">
            <p>Añade algo a la lista</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Lista',
    data: function() {
        return {
            item: '',
            aDatos: []
        }
    },
    methods: {
        onGuardar: function () {
            this.aDatos.push(this.item)
            this.item = ''
            console.log(this.aDatos)
        },
        onBorrar(i) {
            this.aDatos.splice(i,1)
        }
    },
}
</script>

<style scoped>
    span {
        cursor: pointer;
    }
</style>