console.log('Tipo de datos: enumeraciones, arreglos y tuplas');
//premiten definir un conjunto de constantes nombradas
// No existen en javascript

// America tiene valor 1 Europa 2 Africa 3 etc

enum Continentes{
    America = 1,
    Europa,
    Africa,
    Oceania,
}

//tipo continentes
let miContinente : Continentes = Continentes.America;
console.log('Mi continente es: ' + miContinente);

miContinente = Continentes.Oceania;

console.log(`Mi continente es ${miContinente}`);

enum Direccion{
    norte='NORTE',
    sur='SUR',
    este='ESTE',
    oeste='OESTE',
}

let miDireccion : Direccion = Direccion.sur;
console.log(`Mi direccion es ${miDireccion}`);

//Arreglos
//los valores no tiene que ser todos del mismo tipo
// dos formas de definir un arreglo
let cuentas2 : number[] = [123.4,56.8,90.3];

let cuentas : Array<number> = [123.4,56.8,90.3];

console.log(`Las cuentas son ${cuentas}`);

let valoresMezclados : Array<string|number> =
['Manzana',2,'Pera',3,4,'Mango'];

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
let estudiante: [number, string, boolean];

estudiante =[1,'Maria Ramos',true]

console.log(`El estudiante Actual es:
Id: ${estudiante[0]}
Nombre: ${estudiante[1]}
Esta Activo: ${estudiante[2]? 'Si': 'No'}`);

//Arreglo de tuplas
// si toca poner los corchetes
let estudiantes: [number, string, boolean] []= [[1,'Maria Ramos',true]];

estudiantes.push([2,'Alba Avila',false]);

estudiante = estudiantes[1];

console.log(`El estudiante: ${estudiante[0]}
Nombre: ${estudiante[1]}
Esta Activo: ${estudiante[2]? 'Si': 'No'}`);
console.log(`${estudiantes[1][1]}`);