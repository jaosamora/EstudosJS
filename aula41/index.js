try {
    let resultado = dividir(10, 0); // Tenta dividir 10 por 0
    console.log(resultado);
} catch (err) {
    console.log('Ocorreu um erro:', erro.message); // Se der erro, mostra a mensagem de erro
}

function dividir(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error('Divisão por zero não é permitida.'); // Lança um erro se o divisor for zero
    }
    return dividendo / divisor;
}
