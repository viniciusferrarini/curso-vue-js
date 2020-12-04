<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p> {{ exercicioUm | trocaEspacoPorVirgula }} </p>
		<hr>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<p> {{ exercicioDois | contaPalavras }} </p>
		<hr>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<p> {{ fraseComVirgulas }} </p>
		<p> {{ fraseComTamanhos }} </p>
		<hr>
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<p> {{ fraseComVirgulas }} </p>
		<p> {{ fraseComTamanhos }} </p>
		
	</div>
</template>
contaPalavrasComputed
<script>

import stringMixin from './stringMixin';

export default {
	mixins: [ stringMixin ],
	filters: {
		trocaEspacoPorVirgula(valor) {
			return valor.replace(/\s/g,  ', ');
		}
	},
	data() {
		return {
			exercicioUm: 'Vinicius Alana Valdir Ana',
			exercicioDois: 'Pedro é legal'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
