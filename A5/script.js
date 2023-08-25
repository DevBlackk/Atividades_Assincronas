let resposta = [
    'Os objetos são importantes nas linguagens de programação porque eles nos ajudam a criar programas que representam o mundo real de forma simples e organizada.',
    'Utilizar objetos em linguagens de programação é uma forma de seguir o paradigma orientado a objetos (POO), que é um dos mais usados e eficientes no desenvolvimento de software',
    'A vantagem que os objetos nos proporcionam é que eles nos permitem reaproveitar, modificar e testar o código com mais facilidade, além de torná-lo mais confiável e natural.'
];

let responder = document.getElementById("resposta");

responder.addEventListener('click', () => {
    console.log(resposta);
});