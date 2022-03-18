new Vue({
    el: '#app',
    data: {
        running: false,
        playerLife: 100,
        monsterLife: 100,
        logs: [],
    },
    computed: {
        hasResult() {
            return this.playerLife == 0 || this.monsterLife == 0;
        }
    },
    methods: {
        startGame() {
            this.running = true;
            this.playerLife = 100;
            this.monsterLife = 100;
            this.logs = [];
        },
        attack(especial) {
            if (this.running) {
                this.hurt('playerLife', 7, 12, false, 'Herói', 'Monstro', 'player');
                if(this.monsterLife > 0) {
                    this.hurt('monsterLife', 5, 10, especial, 'Monstro', 'Herói', 'monster');
                }
            }
        },
        hurt(atr, min, max, especial, source, target, cls) {
            const plus = especial ? 5 : 0;
            const damage = this.getRandom(min + plus, max + plus);
            this[atr] = Math.max(this[atr] - damage, 0);
            this.registerLog(`${source} atingiu ${target} com ${damage} de dano.`, cls);
        },
        healAndHurt() {
            if (this.running) {
                this.heal(10, 15);
                this.hurt('playerLife', 10, 15, false, 'Monstro', 'Herói', 'monster');
            }
        },
        heal(min, max) {
            const heal = this.getRandom(min, max);
            this.playerLife = Math.min(this.playerLife + heal, 100);
            this.registerLog(`Herói curou ${heal} pontos.`, 'player');
        },
        getRandom(min, max) {
            const value = Math.random() * (max - min) + min;
            return Math.round(value)
        },
        registerLog(text, cls) {
            this.logs.unshift({text, cls});
        }
    },
    watch: {
        hasResult(value) {
            if (value) {
                this.running = false;
            }
        }
    }
})