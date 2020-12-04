new Vue({
	el: '#desafio',
	data: {
		mostraElemento: true,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		caminhoes: [
			{
				potencia: 440,
				marcaModelo: 'Scania R440'
			},
			{
				potencia: 510,
				marcaModelo: 'Mercedes-Benz 2651'
			},
			{
				potencia: 460,
				marcaModelo: 'Volvo 460'
			}
		]
	}
});
