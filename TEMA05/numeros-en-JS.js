// Ejercicio tema 05, curso Javascript:

// Variable con mi altura en centimetros
let altura_centimetros = 169;

// Variable con mi altura en metros
let altura_metros = parseFloat((altura_centimetros) / 100);
console.log(altura_metros);

//Variable con mi peso en kg
let peso_kg = 68.200;

// Variable con mi altura redondeada hacia arriba en metros
altura_redondeada_arriba = Math.ceil(altura_metros);
console.log(altura_redondeada_arriba);

// Variable redondeando mi peso corporal hacia abajo
peso_redondeado_abajo = Math.floor(peso_kg);
console.log(peso_redondeado_abajo);

// Igualdad de "numero max" y "numero maximo +1"?
let num_max = Number.MAX_VALUE
let num_max2 = num_max + 1;

console.log(num_max);
console.log(num_max2);

if (num_max === num_max2) {
    console.log("Si son iguales");
} else {
    console.log("No, son distintos");
};