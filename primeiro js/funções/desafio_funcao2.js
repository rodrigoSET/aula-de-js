function tranformacao(nota) {
  switch (Math.ceil(nota)) {
    case 0:
      return "F";
    case 10:
      return "A+";
    case 9:
      return "A";
    case 8:
      return "B+";
    case 7:
      return "B";
    case 6:
      return "C+";
    case 5:
      return "C";
    case 4:
      return "D+";
    case 3:
      return "D";
    case 2:
      return "E+";
    case 1:
      return "E";
    default:
      return "nota invalida";
  }
}
console.log(tranformacao(8));
