<template>
    <div>
        <h2>Lista de Tareas</h2>
        <input type="text" placeholder="Items" v-model="item">
        <button type="button" @click="onGuardar()">Guardar</button>
        <div v-if="aDatos.length">
            <h3>Tareas</h3>
            <ul>
                <li v-for="(item, i) in aDatos" :key="i">
                    <input type="checkbox" v-model="item.isCompleted" @change="onChange()">
                    {{item.name}} <span @click="onBorrar(i)">🗑</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tareas',
    data: function() {
        return {
            item: '',
            aDatos: []
        }
    },
    methods: {
        onGuardar: function () {
            this.aDatos.push({name: this.item, isCompleted: false})
            this.item = ''
            console.log(this.aDatos)
        },
        onBorrar(i) {
            this.aDatos.splice(i,1)
        },
        onChange() {
            console.log(this.aDatos)
        }
    },
}
</script>

<style scoped>
    span {
        cursor: pointer;
    }
    ul {
        list-style: none;
    }
</style>