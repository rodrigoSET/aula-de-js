var a1 = 13;
var b1 = 32;
var c1 = 42;
var d1 = 51;

var a2 = 21;
var b2 = 23;
var c2 = 62;
var d2 = 59;

var resultado1;
var resultado2;

function adicao(a, b, c, d) {
  resultado1 = a + b;
  resultado2 = c + d;
  console.log(`${resultado1}, ${resultado2}`);
}

function subtracao(a, b, c, d) {
  resultado1 = a - b;
  resultado2 = c - d;
  console.log(`${resultado1}, ${resultado2}`);
}

subtracao(a1, b2, c2, d1);
