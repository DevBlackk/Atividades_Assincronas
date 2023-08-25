//Atividade A4

let resposta = [
    "Os objetos são importantes nas linguagens de programação porque permitem modelar e abstrair conceitos e problemas do mundo real em programas de computador.",
    "Utilizar objetos em linguagens de programação é uma forma de aplicar o paradigma orientado a objetos (POO), que é um dos mais populares e utilizados no desenvolvimento de software.",
    "A vantagem que os objetos nos proporcionam é que eles nos permitem representar entidades e conceitos do mundo real de forma mais fiel e intuitiva, além de facilitar a reutilização, a extensibilidade e a manutenção do código, além de torná-lo mais confiável e natural."
]

let btnResposta = document.getElementById("responder");

btnResposta.addEventListener("click", () => {
        console.log(resposta);  
})

