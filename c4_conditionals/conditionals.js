/*
	LOGIC OPERATORS
	less than < mayor than > 
	OR   ||
	AND  &&
	EQUAL == ====
	NOT EQUAL != !===
	NOT ! 
*/
var numero_uno = 22;
var numero_dos = "22";

console.log('numero_uno = ' + numero_uno);
console.log('numero_dos = ' + numero_dos);
//conditions
if(numero_uno > numero_dos) {
	console.log('numero_uno > numero_dos');
}
else if(numero_uno < numero_dos) {
	console.log('numero_uno < numero_dos');
}
else if(numero_uno == numero_dos) {
	console.log('numero_uno igual numero_dos');
}
else if(numero_uno === numero_dos) {
	console.log('numero_uno exactamente igual numero_dos');
}
else if(numero_uno != numero_dos) {
	console.log('numero_uno diferente numero_dos');
}
else if(numero_uno !== numero_dos) {
	console.log('numero_uno exactamente diferente numero_dos');
}