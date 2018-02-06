// the string is a structure of variables with the same type
var nombre = "David";
var saludo = "Hola";
var cadena = saludo + " " + nombre;

// concatenation
console.log(cadena)
// string size with length attribute
console.log("tamaño de la cadena = " + (cadena.length))
// indexOf() funtion returns index position of string as parameter if it don't exist retuns -1
console.log("indice de \"David\" = " + cadena.indexOf("David"));
console.log("indice de \"Warrior\" = " + cadena.indexOf("Warrior"));
// we can access to an string element like an array
console.log("Primer elemento = " + cadena[0]);
console.log("Ultimo elemento = " + cadena[cadena.length - 1]);
// we can replace an element of string by other, replace the first element
console.log("Remplazar a por E: " + cadena.replace('a', 'E'));
// we can cut an string by index its element as range with slice() function
console.log("String desde el indice 3 hasta el 7 = " + cadena.slice(3, 7));
// we can convert string to UpperCase or LowerCase
console.log('Mayusculas: ' + cadena.toUpperCase());
console.log('Minusculas: ' + cadena.toLowerCase());
