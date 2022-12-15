const a = 8;
const b = 4;
const sinal = "/";

var resultado =
  sinal == "+" //
    ? a + b
    : sinal == "-"
    ? a - b
    : sinal == "/"
    ? a / b
    : sinal == "*"
    ? a * b
    : "sem sinal";

console.log(resultado);
