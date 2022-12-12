const notas = [7, 8, 3, 5, 10, 9, 8, 8];

var valores = "";

for (var nota of notas) {
  valores += nota + ", ";
}

console.log(valores);

var indices = "";

for (var indice in notas) {
  indices += indice + ", ";
}

console.log(indices);
