//ATIVIDADE ASSINCRONA A1

function calcular(){
    let notas = 0;
    const notasMax = 4;

    for(i=1; i <= notasMax; i++) {
        notas += Number(prompt("Digite a nota do 1º, 2º, 3º e 4º bimestre."))
    }

    let media = notas / notasMax;
    alert(`A média das notas do aluno é: ${media}`);
}
