function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  
    this.falar = function() {
      console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    };
  }
  
  const pessoa1 = new Pessoa('João', 15);
const pessoa2 = new Pessoa('Maria', 30);

pessoa1.falar(); 
pessoa2.falar();  