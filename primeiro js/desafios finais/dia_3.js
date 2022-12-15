function calMedia(numeros) {
  const quantidadeDeNumeros = numeros.length;
  let soma = 0;
  for (numero of numeros) {
    soma += numero;
  }
  return soma / quantidadeDeNumeros;
}

console.log(calMedia([1, 2, 3, 4, 5]));

function areaTriangulo(n1, n2) {
  const area = (n1 * n2) / 2;
  return area.toFixed(2);
}

console.log(areaTriangulo(21, 35));

function calMenor(arry) {
  let menor = arry[0];
  for (let id in arry) {
    if (arry[id] < menor) menor = arry[id];
  }
  return menor;
}

console.log(calMenor([1, 2, 3, 4, -12]));

function sorteio(numeroEscolhido) {
  const numeroSorteado = parseInt(Math.random() * (10 - 1) + 1);
  if (numeroSorteado === numeroEscolhido) {
    return `Parabéns! O número sorteado foi o ${numeroSorteado} `;
  } else return `Que pena! O número sorteado foi o ${numeroSorteado} `;
}

console.log(sorteio(5));

function palavras(frase) {
  const qunatidade = frase.split("");
  return qunatidade;
}

console.log(palavras("eu sou uma frase"));

function contarCaractere(caractere, string) {
  caracteresSeparados = string.split("");
  qntCaracteres = 0;
  for (let id in caracteresSeparados) {
    if (caracteresSeparados[id] === caractere) qntCaracteres++;
  }
  return qntCaracteres;
}

console.log(contarCaractere("u", "eu sou uma frase"));

function filtro(chave, arry) {
  let filtragem = "";
  arryNovo = [];

  for (let id in arry) {
    filtragem = arry[id].split(chave);
    if (filtragem.pop() !== arry[id]) {
      arryNovo.push(arry[id]);
    }
  }
  return arryNovo;
}

console.log(filtro("pro", ["programação", "mobile", "profissional"]));

function removerVogais(string) {
  const semVogal = string.replace(/[aeiou]/gi, "");
  return semVogal;
}

console.log(removerVogais("teste com batata e arroz"));

function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
  let resultado = [];
  for (numero of numeros) {
    const quantidadeDeDigitos = String(numero).length;
    if (quantidadeDeDigitos === quantidadeDesejada) resultado.push(numero);
  }
  return resultado;
}

console.log(filtrarPorQuantidadeDeDigitos([12, 1, 23, 5, 73, 4, 9, 90], 2));

function segundoMaior(numeros) {
  let indiceDoMaior = 0;
  let segundoMaior;
  numeros.forEach((numero, indice) => {
    if (numero > numeros[indiceDoMaior]) indiceDoMaior = indice;
  });
  numeros.splice(indiceDoMaior, 1);
  segundoMaior = numeros[0];
  numeros.forEach((numero) => {
    if (numero > segundoMaior) segundoMaior = numero;
  });
  return segundoMaior;
}

console.log(segundoMaior([1, 2, 3, 4, 5]));

const soma = (array) =>
  array.reduce((acumulador, atual) => acumulador + atual, 0);
const media = (array) => soma(array) / array.length;
function recerberMelhorEstudante(estudantes) {
  const estudantesComMedias = Object.entries(estudantes).map((estudante) => {
    const chave = 0,
      valor = 1;
    return { nome: estudante[chave], media: media(estudante[valor]) };
  });
  const estudantesOrdenados = estudantesComMedias.sort(
    (estudanteA, estudanteB) => estudanteB.media - estudanteA.media
  );
  const melhorEstudante = estudantesOrdenados[0];
  return melhorEstudante;
}

console.log(
  recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9],
  })
);
