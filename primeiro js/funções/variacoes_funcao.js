//retorno e parametro
function soma(a, b) {
  return a + b;
}
console.log(soma(32, 53));

//parametro
function eximult(a, b) {
  console.log(a * b);
}
eximult(2, 5);

//retorno
function data() {
  return new Date();
}
console.log(data());

//nenhum
function data2() {
  console.log(new Date().getHours());
}
data2();
