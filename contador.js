//Realiza un programa que sume todos los numeros pares del 0 al 1000

let suma = 0;
let i = 0;

while (i <= 1000) {
  if (i % 2 === 0) {
    suma += i;
  } else {

  }
  i++;
}

console.log("La suma de todos los números pares es:"+suma);