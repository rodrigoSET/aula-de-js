function sempreRetornaUm() {
  return 1;
}
var valor = sempreRetornaUm();
console.log(valor);

function textoOuNum(retornaTexto) {
  return retornaTexto ? "texto" : 123;
}
console.log(textoOuNum(false));
