let input = document.getElementById("input-principal")
let button = document.getElementById("button-adicion")
let tarefa = document.getElementById("nome-tarefa-id")
let listCompleta = document.getElementById("tarefas")

let arrayDeTarefas = []
recarregarTarefa()

function mostrarTarefas() {

    let novaLi = ""

    arrayDeTarefas.forEach((tarefa, index) => {

        novaLi = novaLi + `<li class="iten-tarefa ${ tarefa.concluida == true ? "concluido" : ""  }"> 

    <button class="botao-foguete" onclick="concluirTarefa(${index})">
        <i class="fas fa-rocket"></i>
    </button>

    <p class="nome-tarefa ${ tarefa.concluida == true ? "concluida" : ""  } id="nome-tarefa-id">${tarefa.tarefa}</p>

    <button class="delete" onclick="deletarTarefa(${index})">
        <i class="fas fa-trash"></i>
    </button>

</li>
`

    })


    listCompleta.innerHTML = novaLi

    localStorage.setItem("lista", JSON.stringify(arrayDeTarefas))

}


function deletarTarefa(index) {
    arrayDeTarefas.splice(index, 1)

    mostrarTarefas()

}
function adicionarTarefa() {
    arrayDeTarefas.push({
        tarefa: input.value,
        concluida: false
    })


    

    mostrarTarefas()

}

function concluirTarefa(index){
    arrayDeTarefas[index].concluida = !arrayDeTarefas[index].concluida 
    
    mostrarTarefas()
}

function recarregarTarefa(){
    let minhasTarefas = localStorage.getItem("lista")
    arrayDeTarefas = JSON.parse(minhasTarefas )
    
    mostrarTarefas()

}

button.addEventListener("click", adicionarTarefa)


