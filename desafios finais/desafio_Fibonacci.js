function Fibonacci() {
  let sequencia = [1, 1];
  let comprimento = sequencia.length;
  let resultado;

  for (let i = 0; i < 10; i++) {
    resultado = sequencia[comprimento - 1] + sequencia[comprimento - 2];
    comprimento++;
    sequencia.push(resultado);
    console.log(sequencia);
  }
  return resultado;
}

console.log(Fibonacci());
