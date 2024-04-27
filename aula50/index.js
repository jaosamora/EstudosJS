// IIFE -> immediately invoked function expression
(function(idade, peso, altura) {

    const sobrenome = "Silva"
    function criaNome(nome) {
      return nome + ' ' + sobrenome
    }

   function falaNome() {
    console.log(criaNome('João'));
   }

   falaNome();
   console.log(idade, peso, altura);

})(15, 64, 1.70);