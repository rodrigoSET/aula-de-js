const futuro = Date.now() + 10000;
var quantidade = 0;

while (Date.now() < futuro) {
  quantidade++;
}

console.log(quantidade);
