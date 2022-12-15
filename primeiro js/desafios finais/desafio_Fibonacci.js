const difereResultado = (resultado) =>
  resultado.length > 2 ? resultado.slice(1) : resultado;

function Fibonacci() {
  let sequenciaF = [0, 1];
  let sequencia = [0, 1];

  // for (let i = 0; i <= 1; i++) {
  //   if (sequenciaF.length == 1) {
  //     sequenciaF.push(1);
  //   } else if (sequenciaF.length == 0) {
  //     sequenciaF.push(0);
  //   } else;
  // }

  let resultado = sequenciaF;

  for (let i = 1; i < 20; i++) {
    resultado = difereResultado(resultado);
    let soma = resultado[0] + resultado[1];
    resultado.push(soma);
    sequencia.push(soma);
  }
  // console.log(resultado.splice(2));
  return sequencia;
}

console.log(Fibonacci());
