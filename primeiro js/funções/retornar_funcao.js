function retornar() {
  function bomDia() {
    return "bom dia!";
  }
  return bomDia;
}

console.log(retornar);
console.log(retornar());
console.log(retornar()());

const umaFuncao = retornar();
console.log(umaFuncao());
