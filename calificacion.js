//Realizar un programa que muestre una letra de acuerdo a la calificación de un alumno, 
//si el alumno tuvo de 90 a 100 muestre la letra A, si el alumno tuvo de 80 a 89 muestre la letra B, 
//si el alumno obtuvo de 70 a 79 muestre la letra C, si el alumno tuvo de 60 a 69 muestre la letra D,
// si el alumno obtuvo de 59 a 0 muestre la letra E
nota= 60;
if (nota >=90  && nota<=100){
    console.log("El alumno obtuvo una A");
}else if (nota>=80 && nota <=89){
    console.log("El alumno obtuvo una B");
}else if (nota>=70 && nota <=79){
    console.log("El alumno obtuvo una C");
}else if (nota>=60 && nota <=69){
    console.log("El alumno obtuvo una D");
}else{
    console.log("El alumno obtuvo una E");
}

