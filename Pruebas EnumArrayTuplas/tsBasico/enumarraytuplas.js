"use strict";
console.log('Tipo de datos: enumeraciones, arreglos y tuplas');
//premiten definir un conjunto de constantes nombradas
// No existen en javascript
// America tiene valor 1 Europa 2 Africa 3 etc
var Continentes;
(function (Continentes) {
    Continentes[Continentes["America"] = 1] = "America";
    Continentes[Continentes["Europa"] = 2] = "Europa";
    Continentes[Continentes["Africa"] = 3] = "Africa";
    Continentes[Continentes["Oceania"] = 4] = "Oceania";
})(Continentes || (Continentes = {}));
//tipo continentes
let miContinente = Continentes.America;
console.log('Mi continente es: ' + miContinente);
miContinente = Continentes.Oceania;
console.log(`Mi continente es ${miContinente}`);
var Direccion;
(function (Direccion) {
    Direccion["norte"] = "NORTE";
    Direccion["sur"] = "SUR";
    Direccion["este"] = "ESTE";
    Direccion["oeste"] = "OESTE";
})(Direccion || (Direccion = {}));
let miDireccion = Direccion.sur;
console.log(`Mi direccion es ${miDireccion}`);
//Arreglos
//los valores no tiene que ser todos del mismo tipo
// dos formas de definir un arreglo
let cuentas2 = [123.4, 56.8, 90.3];
let cuentas = [123.4, 56.8, 90.3];
console.log(`Las cuentas son ${cuentas}`);
let valoresMezclados = ['Manzana', 2, 'Pera', 3, 4, 'Mango'];
console.log(`Los valores mezclados son ${valoresMezclados}`);
//Para agregar un valor a un arreglo, con push
valoresMezclados.push(34.6);
console.log(`Los valores mezclados son ${valoresMezclados}`);
//Para obtener el indice de un elemento
console.log(`EL indice donde esta el elemento "34.6" es : 
${valoresMezclados.indexOf(34.6)}`);
console.log(`El numero de elementos  en las cuentas son : 
${cuentas.length}`);
//Tuplas
let estudiante;
estudiante = [1, 'Maria Ramos', true];
console.log(`El estudiante Actual es:
Id: ${estudiante[0]}
Nombre: ${estudiante[1]}
Esta Activo: ${estudiante[2] ? 'Si' : 'No'}`);
//Arreglo de tuplas
// si toca poner los corchetes
let estudiantes = [[1, 'Maria Ramos', true]];
estudiantes.push([2, 'Alba Avila', false]);
estudiante = estudiantes[1];
console.log(`El estudiante: ${estudiante[0]}
Nombre: ${estudiante[1]}
Esta Activo: ${estudiante[2] ? 'Si' : 'No'}`);
console.log(`${estudiantes[1][1]}`);
