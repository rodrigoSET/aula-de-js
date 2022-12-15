const calculoX = (a, b, delta, sinal) =>
  (-b + (sinal == "-" ? Math.sqrt(delta) * -1 : Math.sqrt(delta))) / (2 * a);

const bhaskara = (a, b, c) => {
  let delta = b ** 2 - 4 * a * c;
  return `${calculoX(a, b, delta, "+")}, ${calculoX(a, b, delta, "-")}`;
};

console.log(bhaskara(3, -15, 12));
