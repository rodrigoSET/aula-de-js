const t1 = true;
const t2 = true;

var tv50 = t1 && t2; //and
console.log('vamos comprar a TV de 50"?' + tv50);

var tv32 = t1 !== t2; //xor
console.log('vamos comprar a TV de 32"?' + tv32);

var tomarSorvete = t1 || t2; //or
console.log("vamos tomar sorvete?" + tomarSorvete);

var ficarCasa = !tomarSorvete; //not
console.log("vamos ficar em casa?" + ficarCasa);
