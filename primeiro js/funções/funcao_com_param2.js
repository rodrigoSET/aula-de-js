function executar(funcao, n1, n2) {
  if (typeof funcao === "function") {
    console.log(funcao(n1, n2));
  }
}
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

executar(somar, 30, 10);
executar(subtrair, 30, 10);
executar(multiplicar, 30, 10);
executar(multiplicar, 30, 20);
