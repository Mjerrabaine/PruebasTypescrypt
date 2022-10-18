"use strict";
// Se pueden almacenar en variables
// se pueden pasar por parametro a otra funcion
// pueden ser retornadas desde una funcion
//definicion basica, :void es el retorno de la funcion
function imprimir(aImprimir) {
    console.log(aImprimir);
}
imprimir('Otra vez hola mundo');
// esta bien pero si no le mando el segundo nombre me da undefined lo cual no se ve muy bonito
function nombresApellidos(nombre, apellido, segundoNombre) {
    return `
    nombres : ${nombre} ${segundoNombre}
    Apellido: ${apellido}`;
}
console.log(nombresApellidos('Ana', 'Suarez', 'Maria'));
console.log(nombresApellidos('Ana', 'Suarez'));
// esto lo puedo corregir definiendo el segundo nombre como un string vacio
function nombresApellidos2(nombre, apellido, segundoNombre = '') {
    return `
    nombres : ${nombre} ${segundoNombre}
    Apellido: ${apellido}`;
}
console.log(nombresApellidos2('Ana', 'Suarez', 'Maria'));
console.log(nombresApellidos2('Ana', 'Suarez'));
//una funcion contenida en una variable
let varsumar = function (op1, op2) {
    return op1 + op2;
};
console.log(varsumar(4, 4));
// operador arrow function o lamda function
// antes de la flecha van los parametros y despues la instruccion
let saludarConsola = () => console.log("Hola");
console.log(saludarConsola());
let varSumar = (op1, op2) => op1 + op2;
console.log(varSumar(4, 10));
// una funcion como parametro de otra
let varMult = (op1, op2) => op1 * op2;
console.log('Funcion como parametro');
function calculadora(op1, op2, operador) {
    return operador(op1, op2);
}
//si llamo la funcion sin los parentesis no la invoco me la imprime osea no hago calculadora()
console.log(`${calculadora}`);
console.log(`10*2 es ${calculadora(10, 2, varMult)}`);
// funcion de alto orden es una funcion que devuelve o recibe una funcion
// calculadora es una funcion de alto orden
// varMult es una funcion callback por que es una funcion que va a ser llamada dentro de otra funcion
//funciones de alto orden sobre arreglos
// la gran mayoria retorna undefined
//forEach
//filter
//search
//map, retorna un arreglo nuevo
//reduce, retorna un valor
//sort
//reverse
// ejemplo
// n es el valor en la posicion i , i es el indice del arreglo y arrelgo es el arreglo numeros
//numeros.forEach((n,i,arreglo) => arreglo[i] = n*2)
