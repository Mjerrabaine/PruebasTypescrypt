"use strict";
console.log('Condicionales y ciclos');
var Continente;
(function (Continente) {
    Continente[Continente["America"] = 1] = "America";
    Continente[Continente["Europa"] = 2] = "Europa";
    Continente[Continente["Africa"] = 3] = "Africa";
    Continente[Continente["Oceania"] = 4] = "Oceania";
})(Continente || (Continente = {}));
let unContinente = 5;
if (unContinente == Continente.America) {
    console.log('El continente es :America');
}
else if (unContinente == Continente.Europa) {
    console.log('El continente es :Europa');
}
else if (unContinente == Continente.Africa) {
    console.log('El continente es :Africa');
}
else if (unContinente == Continente.Oceania) {
    console.log('El continente es :Oceania');
}
else {
    console.log('El continente no esta');
}
//switch
switch (unContinente) {
    case Continente.America: {
        console.log('El continente es :America');
        break;
    }
    case Continente.Europa: {
        console.log('El continente es :Europa');
        break;
    }
    case Continente.Africa: {
        console.log('El continente es :Africa');
        break;
    }
    case Continente.Oceania: {
        console.log('El continente es :Oceania');
        break;
    }
    default: {
        console.log('El continente no esta');
        break;
    }
}
//Operador ternario condicional
let num = 0;
//condicion? opr1: opr2
console.log(`${num == 0 ? "Es Cero" : "No es cero"}`);
//Ciclos
let cuentas = [123.4, 56.8, 90.3];
//while
let i = 0;
let suma = 0;
while (i < cuentas.length) {
    suma += cuentas[i];
    i++;
}
console.log(suma);
//for
// lo defini antes solamente le cambio el valor
suma = 0;
for (let j = 0; j < cuentas.length; j++) {
    suma += cuentas[j];
}
console.log(suma);
