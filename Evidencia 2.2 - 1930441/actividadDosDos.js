Escribir un programa en JS que calcule la desviacion estandar de un conjunto de valores. 




let array = [600, 470, 170, 430, 300];
var suma = 0;
var val1 = 600;
var val2 = 318;
var val3 = 170;
var val4 = 358;
var val5 = 300;

for(let i of array){
    suma += i;
}

let restaUno = 394 - val1;
let restaDos = 394 - val2;
let restaTres = 394 - val3;
let restaCuatro = 394 - val4;
let restaCinco = 394 - val5;

let cuadrado = (Math.pow(restaUno,2)) + (Math.pow(restaDos,2)) + (Math.pow(restaTres,2)) + (Math.pow(restaCuatro,2)) + (Math.pow(restaCinco,2));

let division = cuadrado / 5;

let raiz = parseInt(Math.sqrt(division)) + " " + "mm";

console.log(raiz);


