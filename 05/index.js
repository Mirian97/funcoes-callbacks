let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 2;

console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`)

let tempo = 0;

const beep = setInterval(() => {
    tempo++;

    if (tempo >= tempoParaAlarmarEmSegundos && (tempo < tempoParaAlarmarEmSegundos + tempoAlarmandoEmSegundos)) {
        console.log("Beep beep!");

    } else if (tempo >= (tempoParaAlarmarEmSegundos + tempoAlarmandoEmSegundos)) {

        if (numeroDeSonecas === 0) {
            console.log("Fim do Timer!");
            clearInterval(beep);

        } else {
            console.log(`Soneca ativada, próximo alarme em ${tempoSonecaEmSegundos} segundos`);
            tempoParaAlarmarEmSegundos += tempoAlarmandoEmSegundos + tempoSonecaEmSegundos;
            numeroDeSonecas--;
        }
    }
}, 1000);
