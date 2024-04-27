function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // valor
        writable: true, // Pode alterar
        configurable: true // Configurável 
    });

    Object.defineProperties(this,  {
   nome: {   
    enumerable: true, // Mostra a chave
    value: nome, // valor
    writable: true, // Pode alterar
    configurable: true // Configurável 
    },
    preco: {   
     enumerable: true, // Mostra a chave
     value: preco , // valor
     writable: true, // Pode alterar
      configurable: true // Configurável 
      },
});
}


const p1 = new Produto('Camiseta', 20, 3);
    console.log((p1));