var nota = 3;

switch (Math.ceil(nota)) {
  case 10:
  case 9:
  case 8:
  case 7:
    console.log("aprovado");
    break;
  case 6:
  case 5:
  case 4:
  case 3:
    console.log("reprovado");
    break;
  case 2:
  case 1:
  case 0:
    console.log("repetiu");
    break;
  default:
    console.log("nota n/a");
}
