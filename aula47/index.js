const nome = 'João';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Paulo'; 
    falaNome();
}
usaFalaNome();