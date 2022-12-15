function retornaUmaFuncao() {
  return function () {
    return function () {
      return "bom dia!";
    };
  };
}
console.log(retornaUmaFuncao);
console.log(retornaUmaFuncao());
console.log(retornaUmaFuncao()());
console.log(retornaUmaFuncao()()());
