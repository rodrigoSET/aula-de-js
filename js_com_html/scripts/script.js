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

function ativarContagem() {
  //   document.getElementById("tempo").innerHTML = "começou a contar";
  //   setTimeout(function () {
  //     document.getElementById("tempo").innerHTML = "executou o setTimeout";
  //   }, 2000);

  tempo = setInterval(() => {
    let cronometro = document.getElementById("tempo").innerHTML;
    let soma = parseInt(cronometro) - 1;

    if (soma === 0) {
      document.getElementById("tempo").innerHTML = "tempo esgotado";
      pararContagem();
    } else document.getElementById("tempo").innerHTML = soma;
  }, 1000);
}

function pararContagem() {
  clearInterval(tempo);
  // document.getElementById("tempo").innerHTML = "parou a contagem";
}
