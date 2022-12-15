function criarData(dia, mes, ano) {
  return {
    dia: dia,
    mes: mes,
    ano: ano,
    dataCompleta: function () {
      return `${this.dia}/${this.mes}/${this.ano}`;
    },
  };
}

const d1 = criarData(12, 12, 2022);
const d2 = criarData(2, 2, 2022);
const d3 = criarData(1, 1, 2022);

console.log(d1.dataCompleta());
console.log(d2.dataCompleta());
console.log(d3.dataCompleta());
