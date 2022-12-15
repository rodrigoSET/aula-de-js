function calculoX(a, b, c, sinal) {
  let delta = b ** 2 - 4 * a * c;
  switch (sinal) {
    case "+":
      return (-b + Math.sqrt(delta)) / (2 * a);
    case "-":
      return (-b - Math.sqrt(delta)) / (2 * a);
    default:
      return undefined;
  }
}
