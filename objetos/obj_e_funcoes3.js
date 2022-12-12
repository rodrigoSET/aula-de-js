function Data(dia = 1, mes = 1, ano = 2022) {
  this.dia = dia;
  this.mes = mes;
  this.ano = ano;
  this.exibir = function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  };
}

const d2 = new Data();
const d1 = new Data(12, 12, 2022);
const d3 = new Data(2, 2, 2022);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());
