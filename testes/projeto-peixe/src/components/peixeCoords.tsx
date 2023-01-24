export function calculos(x: any, y: any) {
  let xFinal = x;
  let yFinal = y;

  if (x < -425) {
    xFinal = -425;
  }

  if (x > 425) {
    xFinal = 425;
  }

  if (y < -195) {
    yFinal = -195;
  }

  if (y > 170) {
    yFinal = 170;
  }

  return {
    xFinal,
    yFinal,
  };
}
