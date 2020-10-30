<template>
	<div class="spinner">
		<h2>Estilo CSS dinamico</h2> 
		<label for="size">Tamaño de fuente</label>
		<input type="text" id="size" v-model="size"
			min="0.1" max="3" disabled>
		<input type="range" v-model="size"
			min="0.1" max="3"  step="0.1">
		<input type="text" placeholder="Escribe tu nombre"
			v-model="name">
		<p :style="fontSize">{{name}}</p>
    </div>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			size: 1.5
		}
	},
	computed: {
		fontSize() {
			return {
				fontSize: this.size+'rem', 
				color: 'blue'
			}
		}
	},
}
</script>

<style scoped>
 .spinner {
	width: 50%;
	margin: 0.2rem auto;
	display: flex;
	flex-direction: column;
 }
</style>