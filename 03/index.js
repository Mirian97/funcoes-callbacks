const jogadores = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];
const rodada = 10;
const intervalo = rodada / jogadores.length;

let index = 0;

console.log("A rodada começou!")

const temporizador = setInterval(() => {
    console.log(jogadores[index]);
    index++;

    if (index >= jogadores.length) {
        console.log("A rodada terminou!");
        clearInterval(temporizador);
    }
}, intervalo * 1000);

