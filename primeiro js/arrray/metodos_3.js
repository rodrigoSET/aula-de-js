const numeros = [10, 20, 30];

for (let numero = 0; numero < numeros.length; numero++) {
  console.log(numeros[numero]);
}

numeros.forEach(function (elemento, indice, array) {
  console.log(elemento, indice, array);
});

numeros.forEach(function (_, _, array) {
  console.log(array);
});
