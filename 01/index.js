function tabuada(numero, callback) {

    for (let i = 0; i < 10; i++) {
        const resultado = `${numero} x ${i} = ${numero * i}`;
        callback(resultado);
    }

}

tabuada(5, (resultado) => {
    console.log(resultado)
})