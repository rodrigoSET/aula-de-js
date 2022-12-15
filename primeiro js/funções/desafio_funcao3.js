var nota1 = 7.8;
var nota2 = 3.1;
var nota3 = 6.7;

var maiorNota1;

function minimo(n1, n2, n3) {
  return n1 <= n2 ? n1 : n2;
}
function media(n1, n2, n3) {
  const menorNota = minimo(n1, minimo(n2, n3));
  if (menorNota === n1) {
    return (n2 + n3) / 2;
  } else if (menorNota === n2) {
    return (n1 + n3) / 2;
  } else if (menorNota === n3) {
    return (n2 + n1) / 2;
  }
}

function status(medida) {
  if (medida >= 7) {
    return "aprovado";
  } else if (medida >= 4) {
    return "recuperacao";
  } else {
    return "reprovado";
  }
}
function status(media)
