function tabuada(array, callback) {

    for (let numero of array) {
        for (let i = 0; i < 10; i++) {
            const resultado = `${numero} x ${i} = ${numero * i}`;
            callback(resultado);
        }
        console.log("---------------\n");
    }
}

tabuada([1, 5, 2], (resultado) => {
    console.log(resultado)
})