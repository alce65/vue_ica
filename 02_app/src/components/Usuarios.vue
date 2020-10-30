<template>
    <div>
        <h2>Lista de Usuarios</h2>
        <input type="text" placeholder="User Name" v-model="user.name">
        <input type="text" placeholder="User Email" v-model="user.email">
        <button type="button" @click="onGuardar()">Guardar</button>
        <button type="button" @click="onDeleteAll()">Borrar</button>
        <div v-if="aUsuarios.length">
            <h3>Usuarios</h3>
            <ul>
                <li v-for="(item) in aUsuarios" :key="item.id">
                    <span>{{item.id}} </span>
                    <span>{{item.name}} </span>
                    <span>{{item.email}} </span>
                    <span @click="onBorrar(item.id)">🗑</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
const urlUsers = 'http://localhost:3000/users'
export default {
    name: 'Usuarios',
    data() {
        return {
            aUsuarios: [],
            user : {}
        }
    },
    methods: {
        onGuardar() {
            if (!this.user.name) {
                return
            }
            axios.post(urlUsers, this.user ).then(
                () => this.getUsers()
            )
        },
        onBorrar(id) {
            axios.delete(urlUsers+'/'+id).then(
                () => this.getUsers()
            )
        },
        onDeleteAll() {},
        getUsers() {
            axios.get(urlUsers).then(
                resp => {
                    console.log(resp)
                    this.aUsuarios = resp.data
                    }
            )            
        }
    },
    created() {
        this.getUsers()
    },
}
</script>