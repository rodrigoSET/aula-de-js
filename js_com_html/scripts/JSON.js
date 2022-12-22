const carro = {
  marca: "fiat",
  modelo: "uno",
  ano: "2001",
};

let texto = JSON.stringify(carro);

document.getElementById("texto").innerHTML = texto;

let obj = JSON.parse(texto);

console.log(obj.modelo);
