<template>
    <div>
        <h2>Imagen astro del dia</h2>
        <img :src="urlImg" :alt="titulo">
        <p>{{titulo}}</p>
        <slot></slot>
        <p class="error">{{error}}</p>
    </div>
</template>

<script>

import axios from 'axios'

const APIKey = 'cDrHlbclNIkfMJs2V4ysyvTr03BGTfXj8ysLb9lZ'
const url = `https://api.nasa.gov/planetary/apod?api_key=${APIKey}`
export default {
    name: 'Astro',
    data() {
        return {
            titulo: '',
            urlImg: '',
            error: ''
        }
    },
    created() {
        axios.get(url).then(
            (resp) => { 
                console.log(resp) 
                console.log(resp.data)
                this.titulo = resp.data.title
                this.urlImg = resp.data.url
            }
        ).catch(
            (error) => {
                console.dir(error) 
                if(error.message) {
                    this.error = error.message
                }
            }
        )

        /*fetch(url).then( resp => {
            console.log(resp) 
            if (resp.ok) {
                return resp.json()
            } else {
                throw resp
            }
            
        }).then(
            (data) => {
                console.log(data)
                this.titulo = data.title
                this.urlImg = data.url 
            }
        ).catch(
            (error) => {
                console.dir(error) 
                if(error.message) {
                    this.error = error.message
                } else {
                    this.error  = error.status + ': ' + error.statusText
                }
            }
        ) */
    },
    
}
</script>

<style>

.error {
    color: crimson;
}

</style>