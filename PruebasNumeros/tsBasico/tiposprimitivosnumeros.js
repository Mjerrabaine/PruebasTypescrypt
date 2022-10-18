"use strict";
let varNumerica = 10;
console.log(`varNumerica ${varNumerica}`);
let operando1 = 20;
let operando2 = 5;
operando1++;
console.log(`Incrementar ${operando1}`);
operando2--;
console.log(`Decrementar ${operando2}`);
operando1 -= 1;
console.log(`Asignacion ${operando1}`);
operando2 += 1;
console.log(`Asignacion ${operando2}`);
let resultado = 0;
resultado = operando1 + operando2;
console.log('Sumar' + resultado);
// NAN not a number
operando2 = "abc";
resultado = operando1 / operando2;
console.log('Dividir:' + resultado);
let otroNumero = 10.34;
//Para ver el numero en notacion exponencial
console.log('Notacion exponencial:' + otroNumero.toExponential(2));
//Para ver el numero con solo 2 digitos osea 10
console.log('Precision 2 digitos:' + otroNumero.toPrecision(2));
// boolean
console.log(false);
console.log(true);
let estaEntendiendo = true;
console.log(`Está entendiendo ${estaEntendiendo}`);
estaEntendiendo = !estaEntendiendo;
console.log(`Está entendiendo ${estaEntendiendo}`);
let otroBooleano = true;
let resultadoBool;
// AND
resultadoBool = estaEntendiendo && otroBooleano;
console.log(`Resultado && ${resultadoBool}`);
// EL or se expresa con el simbolo || (pipe) alt+124
resultadoBool = estaEntendiendo || otroBooleano;
console.log(`Resultado || ${resultadoBool}`);
console.log(`Operadores de comparacion`);
console.log(`Igualdad  ${operando1 != 24}`);
//condicion ? valor1: valor2
// Si se cumple la condicion devuelve valor 1 de lo contrario devuelve valor 2
console.log(operando1 >= 20 ? operando1 : 20 - operando1);
operando1 = 15;
console.log(operando1 >= 20 ? operando1 : 20 - operando1);
// any, undefine, null
//any significa que no se el tipo lo voy a asignar a medida que avanze
let varTipoDesconocido;
console.log(`variable varTipodesconocido cuyo valor es :  ${varTipoDesconocido}`);
//Aqui tomaria el valor de un booleano
varTipoDesconocido = true;
console.log(`variable varTipodesconocido cuyo valor es :  ${varTipoDesconocido}`);
let varVoid = undefined;
