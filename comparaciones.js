//comparaciones
//Igualdad
if(5===5){
    console.log("5 es igual que 5")
}
if(5 === 5){
console.log("5 es igual que 5")
}
//== solo compara los valores
// === busca ademas del valor contenido, el tipo de variavle,
// y lo hace de manera mas especifica

let a=5;
console.log(typeof a); 'number'
let b="5";
console.log(typeof b); 'string'

if(a == b){
    console.log("a es igual a b DEBIL")
}
if(a === b){
    console.log("a es igual a b FUERTE")
}
//Desigualdad,Distinto
let c =4;
let d =10;

if(c !=d){
    console.log("c es diferente que d DEBIL");
}
if(c !==d){
    console.log("c es diferente que d FUERTE");
}
//mayor que y menor que
let max =10;
let min=5;

if(max >min){
    console.log("max es diferente que d DEBIL");
}
if(max >= min){
    console.log("max es diferente que d FUERTE");
}
if(min < max){
    console.log("min es diferente que d DEBIL");
}
if(min <= max){
    console.log("min  es diferente que d FUERTE");
}