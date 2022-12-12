const data = {
  dia: 12,
  mes: 12,
  ano: 2022,
  dataCompleta: function () {
    return `${this.dia}/${this.mes}/${this.ano}`;
  },
};

console.log(data.dataCompleta());
