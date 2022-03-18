new Vue({
    el: '#desafio',
    data: {
        nome: 'Cristiano',
        idade: 35,
        imgLink: 'https://cristianocastro.net/wp-content/uploads/2019/04/s3-part2-1080x675.png' 
    },
    methods: {
        idadeTripla() {
            return this.idade * 3;
        },
        random() {
            return Math.random().toFixed(2);
        },
        changeInput(event) {
            this.nome = event.target.value;
        }
    }
});