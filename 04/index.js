let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
const ciclo = tempoAlarmandoEmSegundos + tempoParaAlarmarEmSegundos;

console.log(`Timer iniciado, disparando alarme em ${tempoParaAlarmarEmSegundos} segundos!`)

let tempo = 0;

const timer = setInterval(() => {
    tempo++;

    if (tempo >= tempoParaAlarmarEmSegundos && tempo < ciclo) {
        console.log("Beep beep!");

    } else if (tempo >= ciclo) {
        clearInterval(timer)
    }

}, 1000);
