// Atividade A3
const btnMakeUl = document.getElementById("btnMake");
const valorInput = document.getElementById("tarefa");

btnMakeUl.addEventListener("click", () => {
        // Crie o elemento da lista:
        var list = document.getElementById('list');

        // Crie o item da lista:
        var item = document.createElement('li');
    
        item.innerHTML = valorInput.value;
        
        // Adicione-o à lista:
        list.appendChild(item);
    

})


// function makeUL(...listaToDo) {

//     // Retorne a lista construída:
//     return list;
// }
// Adicione o conteúdo a div produtos:
// document.getElementById('produtos').appendChild(makeUL(options[0]));