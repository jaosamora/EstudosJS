function* numerosPares(limite) {
    for (let i = 0; i <= limite; i += 2) {
      yield i;
    }
  }

  const iterador = numerosPares(10);

console.log(iterador.next().value);  
console.log(iterador.next().value);  
console.log(iterador.next().value);  


  