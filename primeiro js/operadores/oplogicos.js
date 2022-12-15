var temDinheiro = true;
var estaEnsolarado = true;
var carroEstaNaGaragem = true;

var resultadoDoAnd = "1 vai ao shopping? ";
resultadoDoAnd += temDinheiro && estaEnsolarado;

console.log(resultadoDoAnd);

var resultadoOr = "2 vai ao shopping? ";
resultadoOr += estaEnsolarado || carroEstaNaGaragem;

console.log(resultadoOr);
console.log(true != false);
console.log(true != true);
