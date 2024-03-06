/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint. symbol) - Valores copiados

referência (mutável) - array, object, function - Passados por referência 
*/
let var1 = 2
let var2 = var1
console.log(var1);
console.log(var2);

var2 = 4
console.log(var1);
console.log(var2);

let obj1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    Idade: '25'
};

console.log(obj1.nome);
console.log(obj1.sobrenome);
console.log(obj1.Idade);

let obj2 = obj1
obj2.nome = 'João'

console.log(obj1.nome);
console.log(obj1.sobrenome);
console.log(obj1.Idade);