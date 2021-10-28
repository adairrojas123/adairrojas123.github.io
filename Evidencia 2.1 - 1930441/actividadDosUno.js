La CFE genera la factura con base en la lectura de Kwh consumidos en un bimestre,
los primeros 300kw son a la tarifa1 (basica) los siguientes 300 kw son a la tarifa 
2(intermiedia) de 601 kw hacia arriba son a la tarifa de alto consumo dado un 
consumo en Kw y los costos de cada tarifa escribir un pequeño programa  en 
javascipt que obtenga el total a pagar y presente el detalle a pagar de cada tarifa.



var t1 = 300;
var t2 = 300;
var t3 = 400;

let resUnoT1 = t1 * parseInt(1);
let resUnoT2 = t2 * parseInt(3);
let resUnoT3 = t3 * parseInt(5);

console.log("300 * 1");
console.log("300 * 3");
console.log("400 * 5");

console.log("--------------");

console.log(resUnoT1);
console.log(resUnoT2);
console.log(resUnoT3);

console.log("--------------");

let resultadoFinal = resUnoT1 + resUnoT2 + resUnoT3;

console.log("Su total a pagar es" + " " + resultadoFinal);
