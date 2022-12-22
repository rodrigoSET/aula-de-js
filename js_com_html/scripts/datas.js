const data = new Date();
console.log(data);

const ano = data.getMonth() + 1;
console.log(ano);

const dataBR = data.toLocaleDateString("pt-br", { dateStyle: "short" });
console.log(dataBR);

const dataInicial = new Date();
const dataFinal = new Date(2023, 3, 12);
