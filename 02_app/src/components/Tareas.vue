<template>
    <div>
        <h2>Lista de Tareas</h2>
        <input type="text" placeholder="Items" v-model="item">
        <button type="button" @click="onGuardar()">Guardar</button>
        <button type="button" @click="onDeleteAll()">Borrar</button>
        <div v-if="aDatos.length">
            <h3>Tareas</h3>
            <ul>
                <li v-for="(item, i) in aDatos" :key="i">
                    <input type="checkbox" v-model="item.isCompleted" @change="onChange()">
                    <span :class="{selected: item.isCompleted}">{{item.name}} </span>
                    <span @click="onBorrar(i)">🗑</span>
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Animate a empezar la lista</p>
        </div>
    </div>
</template>

<script>
const store = 'Tareas'
export default {
    name: 'Tareas',
    data: function() {
        return {
            item: '',
            aDatos: localStorage.getItem(store) ? 
                JSON.parse(localStorage.getItem(store)) : []
        }
    },
    methods: {
        onGuardar: function () {
            this.aDatos.push({name: this.item, isCompleted: false})
            this.salvar()
            this.item = ''
            console.log(this.aDatos)
        },
        onBorrar(i) {
            this.aDatos.splice(i,1)
            this.salvar()
        },
        onChange() {
            console.log(this.aDatos)
            this.salvar()
        },
        salvar() {
            localStorage.setItem(store, JSON.stringify(this.aDatos))
        },
        onDeleteAll(){
            localStorage.removeItem(store)
            this.aDatos = []
        }
    }
}
</script>

<style scoped>
    span {
        cursor: pointer;
    }
    ul {
        list-style: none;
    }
    .selected{
        font-style: italic;
        text-decoration: line-through;
    }
</style>