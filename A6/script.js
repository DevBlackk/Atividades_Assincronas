class Pessoa{ 
    constructor(nome, idade, email){
    this.nome = nome;
    this.idade = idade;
    this.email = email;
    }
}

let inputNome = document.getElementById("nome");
let inputIdade = document.getElementById("idade");
let inputEmail = document.getElementById("email");

const confirma = document.getElementById("cadastrar");

confirma.addEventListener('click', () => {
    let cadastro = new Pessoa(inputNome.value, inputIdade.value, inputEmail.value);
    console.log(cadastro);
});