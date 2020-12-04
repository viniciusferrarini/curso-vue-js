new Vue({

    el: '#desafio',
    data: {
        nome: 'Vinícius Ferrarini',
        idade: 28,
        imagem: 'https://blogwlmscania.itaipumg.com.br/wp-content/uploads/2018/12/protecao-lateral-do-caminhao-o-que-diz-a-lei-780x450.jpeg'
    },
    methods: {
        nomeComIdade: function(){
            return this.nome + " - " + this.idade
        },
        idadeVezesTres: function () {
            return this.idade * 3;
        },
        numeroRandom: function() {
            return Math.random(0, 1);
        }
    }

});