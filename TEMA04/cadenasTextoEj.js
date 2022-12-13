// Ejercicio tema 04 del curso de JS Basico de OpenBootcamp:
let nombre = "Nicolás";
console.log(nombre);

let apellido = "Manfredi";
console.log(apellido);

let estudiante = nombre.concat(" ", apellido);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

console.log(estudiante.length);

console.log(estudiante.indexOf("Nicolás"));
console.log(estudiante.charAt(0));

console.log(estudiante.lastIndexOf("i"));
console.log(estudiante.charAt(15));

console.log(estudiante.trim().length);

console.log(estudiante.includes(nombre, apellido));