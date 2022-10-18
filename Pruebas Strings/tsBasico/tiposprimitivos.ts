console.log("Hola Mundo");
//Comillas sencillas alt + 39

//no sabe donde acaban  unas comillas y donde empiezan las otras
//por tanto se usa \
let tagDiv: string = "<div class= \"panel\">...</div>";
console.log(tagDiv);
//otro metodo es usando las comillas sencillas al final y dentro las dobles
tagDiv = '<div class= \"panel\">...</div>';
console.log(tagDiv);

//----
let apellido : string = 'Rulfo';
let nombre : string = 'Juan';

// le puse el espacio para que no me aparesca RulfoJuan sino Rulfo Juan
let nombreApellido : string = apellido + " " +nombre;
console.log('El apellido y nombre es: ' + nombreApellido);

//comillas invertidas alt +96
// solo cuando suo comillas invertidas puedo usar $ para obtener el valor de la variable
console.log(`El apellido y nombre es:  ${nombreApellido}`);


//Me lo imprime en dos lineas diferentes esto solo lo hace con comillas graves o invertidas sin necesidad de nada mas
console.log(`Nombre:  ${nombre} 
Apellido: ${apellido}`);

//----
// puedo hacer una concatenacion con otra 
console.log(apellido.concat(' ').concat(nombre));

console.log(`la longitud de ${apellido} es ${apellido.length}`)

console.log(nombre.toUpperCase());

