//Realiza un programa que muestre todos los numeros primos en el rango que el usuarios digite 
console.log("Los nummeros primos en el rango de 1 a 100 son:");

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }


  if (isPrime) {
    console.log(i, "- Es un numero primo");
}
}