var nota = 10;

switch (Math.ceil(nota)) {
  case 0:
    console.log("F");
    break;
  case 10:
    console.log("A+");
    break;
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B+");
    break;
  case 7:
    console.log("B");
    break;
  case 6:
    console.log("C+");
    break;
  case 5:
    console.log("C");
    break;
  case 4:
    console.log("D+");
    break;
  case 3:
    console.log("D");
    break;
  case 2:
    console.log("E+");
    break;
  case 1:
    console.log("E");
    break;
  default:
    console.log("nota invalida");
}
