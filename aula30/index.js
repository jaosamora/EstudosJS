// Usando var
var a = 10;
if (true) {
    var a = 20; // reatribuição
    console.log(a); // 20
}
console.log(a); // 20, o valor de a foi alterado

// Usando let
let b = 10;
if (true) {
    let b = 20; // reatribuição dentro de outro escopo
    console.log(b); // 20
}
console.log(b); // 10, o valor de b não foi alterado

// Tentando redeclarar no mesmo escopo
var c = 10;
var c = 20; // Isso é permitido com var
console.log(c); // 20

let w = 10;
// let w = 20; // Isso gerará um erro
