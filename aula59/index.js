// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7 , 11, 15, 22, 27];
// const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];
    
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);

console.log(pessoasComMaisDeCinquentaAnos);