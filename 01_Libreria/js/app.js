document.addEventListener('DOMContentLoaded', main)
function main () {
}

    console.log('Cargdo app main') 
    const config = {
       el: '#app',
       data: {
           titulo: 'Uso de VUE como libreria 1.0 desde una variable',
           saludo: 'Hola Mundo desde VUE',
           usuario: 'Pepe',
           inputMsg: 'Dime tu nombre'
       },
       components: {
           icoPie : {
               template: `
               <address>
                    <p>{{nombre}}</p>
                    <p>{{email}}</p>
                </address>               
               `,
               data: function () {
                   return {
                       email: 'user@hotmail.es'
                   }
               },
               props: {
                   nombre: String
               }
           } 
       }
   }
   const myApp = new Vue(config)
   // document.querySelector('h1').innerHTML = config.data.titulo

  