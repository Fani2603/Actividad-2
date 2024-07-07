//Realizar un programa que realice la función de una calculadora básica que sume, que reste, que multiplique o que divida, dependiendo el operador que el usuario indique
let num1 = 10;
let num2 = 20;
let operacion = "/";
let resultado;
switch (operacion) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        break; // Salir del switch si hay división por cero
      }
      resultado = num1 / num2;
      break;
  }
    console.log("El resultado es:", resultado);