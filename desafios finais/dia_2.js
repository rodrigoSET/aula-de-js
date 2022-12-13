function maiorOuMenor(n1, n2) {
  return n1 >= n2;
}

console.log(maiorOuMenor(2, 4));

function inversao(v1) {
  switch (typeof v1) {
    default:
      return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof v1}`;
    case "boolean":
      return !v1;
    case "number":
      return v1 * -1;
  }
}

console.log(inversao(20));

function estaEntre(n = 0, min = 0, max = 0) {
  return n > min && n < max;
}

console.log(estaEntre(50, 20, 100));

function multiplicacao(n1, n2) {
  if (n1 < 0 && n2 < 0) return;
  let resultado = n1;
  for (let repeticoes1 = 1; repeticoes1 < n2; repeticoes1++) {
    resultado += n1;
  }
  return resultado;
}

console.log(multiplicacao(2, 6));

function repetir1(repetido, n) {
  let arry = [];
  for (let repeticoes2 = 1; repeticoes2 <= n; repeticoes2++) {
    arry.push(repetido);
  }
  return arry;
}

console.log(repetir1(3, 5));

function repetir2(n) {
  let resultado2 = "";
  for (let repeticoes3 = 1; repeticoes3 <= n; repeticoes3++) {
    resultado2 += "+";
  }
  return resultado2;
}

console.log(repetir2(5));

function primeiroUltimo(ar) {
  if (console.log(Array.isArray(ar) !== true)) return;
  return [ar[0], ar.pop()];
}
console.log(primeiroUltimo([1, 2, 3]));

function removerPropiedade(a, b) {
  if (typeof a !== "object" && typeof b !== "string") return;
  delete a[b];
  return a;
}

console.log(removerPropiedade({ rato: undefined, barata: 10 }, "barata"));

function filtrarNumeros(a) {
  let arNovo2 = [];
  a.forEach((element) => {
    if (typeof element === "number") arNovo2.push(element);
  });
  return arNovo2;
}

console.log(filtrarNumeros(["texto", true, 1, 2, 3, "texto", 4]));

let objetoTeste = {
  a: 12,
  b: 24,
};

function objetoParaArray(objeto) {
  let resultado3 = [];
  for (let chave in objeto) resultado3.push([chave, objeto[chave]]);
  return resultado3;
}

console.log(
  objetoParaArray({
    trator: 32,
    rodas: 128,
  })
);

// function idcPar(ar) {
//   let resultado = [];
//
// if (console.log(Array.isArray(ar) !== true)) return;
//   for (let r = 0; r <= ar.length; r = +2) {
// const numeroPar = ar[r] % 2 === 0;
//
// if (numeroPar) resultado.push(ar[r]);
//   }
//   return resultado;
// }
// console.log(idcPar[(10, 11, 10)]);

function receberSomenteOsParesDeIndicesPares(numeros) {
  let resultado = [];
  for (let i = 0; i < numeros.length; i += 2) {
    const numeroPar = numeros[i] % 2 === 0;
    if (numeroPar) resultado.push(numeros[i]);
  }
  return resultado;
}
console.log(receberSomenteOsParesDeIndicesPares([1, 2, 2, 1, 2]));

function anoBI(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
}

console.log(anoBI(400));

function somaArray(array) {
  let soma = 0;
  array.forEach((array) => (soma += array));
  return soma;
}

console.log(somaArray([1, 2, 3, 4]));

function somaDespesas(itens) {
  let total = 0;

  for (let item of itens) total += item.preco;
}

console.log(
  somaDespesas({
    nome: "carro",
    preco: "20000",
    nome: "canoa",
    preco: 1000,
    nome: "TV",
    preco: 650,
  })
);
