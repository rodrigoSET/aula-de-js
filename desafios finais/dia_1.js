function comprimentar(nome) {
  return `olá, ${nome}!!!`;
}

console.log(comprimentar("felipe"));

function anosEmDias(idade) {
  return idade * 365;
}

console.log(anosEmDias(25));

function dinheiros2(h, rs) {
  var salario = h * rs;
  return `Salário igual a R$ ${salario}`;
}

console.log(dinheiros2(30, 16));

const meses = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

function conversao(n1) {
  return meses[n1 - 1];
}

console.log(conversao(7));
