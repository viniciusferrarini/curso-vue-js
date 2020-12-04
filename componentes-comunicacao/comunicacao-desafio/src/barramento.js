import Vue from 'vue';
export default new Vue({
    methods: {
       // Metodo que envia a informação ao outro componente 
       selecionouUsuario(usuario) {
            this.$emit('selecionouUsuario', usuario);
       },
       // Metodo que espera a informação no componente destino
       quandoUsuarioForSelecionado(callback) {
            this.$on('selecionouUsuario', callback);
       }
    }
});