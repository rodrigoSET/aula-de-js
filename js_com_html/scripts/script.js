function dblClique() {
  alert("clique duplo");
}

function viraVermelho() {
  let div = document.getElementById("teste");
  div.style.backgroundColor = "red";
}

function viraAzul() {
  let div = document.getElementById("teste");
  div.style.backgroundColor = "blue";
}

function mudou() {
  console.log("mudou");
}

function eventoClique() {
  document.body.style.backgroundColor = "yellow";
}

function teclaPressionada() {
  let input = document.getElementById("campo").value;
  console.log(input);
}
