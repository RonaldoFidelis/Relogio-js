const relogio = {

    date: function () {
        let date = new Date();

        return {
            hora: date.getHours(),
            minuto: date.getMinutes(),
            segundo: date.getSeconds(),
        }
    },

    hora: function () {

        const pontHora = document.querySelector('.ponteiro-hora');
        const pontMinuto = document.querySelector('.ponteiro-minuto');
        const pontSegundo = document.querySelector('.ponteiro-segundo');

        const { hora, minuto, segundo } = this.date();

        pontHora.style.transform = `translate(0, -50%) rotate(${hora * 30}deg)`;
        pontMinuto.style.transform = `translate(0, -50%) rotate(${minuto * 6}deg)`;
        pontSegundo.style.transform = `translate(0, -50%) rotate(${segundo * 6}deg)`;
    },

    roda: function() {
        setInterval(() => {
            relogio.hora();
        },1000)
    }

}

relogio.roda();