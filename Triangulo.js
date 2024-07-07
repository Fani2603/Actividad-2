//realiza un programa que determine si un triangulo es equilatero,isosceles o escaleno segun las longitudes de sus lados 
let lado1=10;
let lado2=9;
let lado3=5;

if(lado1===lado2 && lado2 === lado3){
    console.log("El triangulo es equilatero");
} else if (lado1===lado2 || lado1===lado3||lado2===lado3 ){
    console.log("El triangulo es isosceles")
} else{
    console.log("Es triangulo es escaleno")
}