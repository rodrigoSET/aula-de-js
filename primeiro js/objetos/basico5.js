const cliente = {
  codigo: 16532,
  nome: "ana",
  VIP: true,
  endereco: {
    logradouro: "rua ABC",
    numero: 123,
    complemento: "apt 101 bloco B",
  },
  filhos: ["jao1", "jao2", "jao3"],
};

console.log(cliente.endereco.logradouro);
console.log(cliente.filhos[2]);
