/*
&& -> false && true -> false "o valor meso"
|| -> true || or false -> vai retornar o valor verdadeiro

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/
const corUsuario = 'vermelho'
const corPadrao = corUsuario || 'preto'

console.log(corPadrao);