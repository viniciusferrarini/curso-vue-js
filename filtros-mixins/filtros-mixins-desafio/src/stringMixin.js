export default {
    computed: {
		fraseComVirgulas() {
			return this.exercicioUm.replace(/\s/g, ', ');
		},
		fraseComTamanhos() {
			return this.exercicioDois.split(' ').map(p => `${p} (${p.length})`).join(' ');
		}
	}
}