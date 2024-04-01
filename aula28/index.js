// const tresHoras = 60 * 60 * 3 * 1000;
// const data = new Date(0) // 01/01/1970 Timestamp unix ou época unix
//const data = new Date(); // a, m, d, h, M, s, ms
const data = new Date('2024-03-26 20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo 6 - Sábado
console.log(data.toString());