<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="alterarIdade">Alterar Idade</button>
    </div>
</template>

<script>
import barramento from '@/barramento';

export default {
    data() {
        return {
            idade: 33    
        }
    },
    methods: {
        alterarIdade() {
            //this.idade = 33 Não precisa necessáriamente setar o valor local, pois quando o pai receber o $emit, os filhos serão notificados
            //this.$emit('idadeMudou', 33);
            this.idade += 1
            //Comunicando com o componente irmão através de barramento, desta forma não se faz necessário passar pelo componente pai para então enviar o valor para o componente irmão.
            //barramento.$emit('idadeMudou', this.idade);
            barramento.alterarIdade(this.idade);
        }
    },
};
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
