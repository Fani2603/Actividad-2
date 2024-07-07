let num1 = 10;
let num2 = 20;
let operacion = "/";
let resultado;

if (operacion === "+") {
  resultado = num1 + num2;
} else if (operacion === "-") {
  resultado = num1 - num2;
} else if (operacion === "*") {
  resultado = num1 * num2;
} else if (operacion === "/") {
  if (num2 === 0) {
} else {
    resultado = num1 / num2;
  }

}

console.log("El resultado es:", resultado);