let contador = 0;
let input = document.getElementById("tarefa");
let btnAdd = document.getElementById("btnAdd");
let main = document.getElementById("area-lista");

function addTarefa() {
  let valorInput = input.value;

  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;
    let novoItem = `<div id="${contador}" class="item">
        <div id="marcar${contador}" onclick="marcarTarefa(${contador})" class="icone"><i id="icone${contador}" class="mdi mdi-circle-outline"></i></div>
        <div onclick="marcarTarefa(${contador})" class="nome">${valorInput}</div>
        <div class="botao">
          <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete">deletar</i></button>
        </div>
      </div>`;
    main.innerHTML += novoItem;

    input.value = "";
    input.focus();
  }
}

function marcarTarefa(id) {
  let item = document.getElementById(id);
  let classe = item.getAttribute("class");

  if (classe === "item") {
    item.classList.add("clicado");

    let icone = document.getElementById("icone" + id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-checkbox-marked-circle");

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("clicado");

    let icone = document.getElementById("icone" + id);
    icone.classList.add("mdi-circle-outline");
    icone.classList.remove("mdi-checkbox-marked-circle");
  }
}

function deletar(id) {
  let tarefa = document.getElementById(id);
  tarefa.remove();
}

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault;
    btnAdd.click();
  }
});
