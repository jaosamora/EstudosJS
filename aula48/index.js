//Global
function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('João');
const funcao2 = retornaFuncao('Luiz');
console.dir(funcao);
console.dir(funcao);

console.log(funcao(), funcao2());