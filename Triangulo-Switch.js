//realiza un programa que determine si un triangulo es equilatero,isosceles o escaleno segun las longitudes de sus lados 
const n1 = 5
;
const n2 = 10;
const n3 = 8;

switch (true) {
  case (n1 === n2 && n2 === n3):
    console.log("El triángulo es equilátero");
    break;
  case (n1 === n2 || n1 === n3 || n2 === n3):
    console.log("El triángulo es isósceles");
    break;
  default:
    console.log("El triángulo es escaleno");
}
