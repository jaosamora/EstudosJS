try {
    let resultado = dividir(10, 0); // Tenta dividir 10 por 0
    console.log(resultado);
} catch (erro) {
    console.log('Erro:', erro.message); // Se der erro, mostra a mensagem de erro
} finally {
    console.log('Fim do programa.'); // Sempre é executado no final
}

function dividir(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error('Divisão por zero!'); // Lança um erro de propósito
    }
    return dividendo / divisor;
}
