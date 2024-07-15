//tipos de for(bucle)
/**estructura
 * for(inicializacion; condicion; actualizacion){
 *     Bucle
 * }
 * i=i + 1;
 * i +=1;
 * i++
 * i--
 * 
 */
//for
for(let i = 0; i< 10; i++){
    //esto es un bucle
    console.log(i); 
}
let lista=[1,12,34,56,586,454]
for(let i=0; i< lista.length/*Longitud de la cadena*/; i++){
    //esto es un bucle
    console.log(lista[i]); 
}

//forEach
lista.forEach(valor=>  /*Arrow function*/{
    console.log(valor);
})

//for...of
for (let valor of lista){
    console.log(valor);
}

//for...in
let persona ={
    nombre = "fani",
    edad = 20
    isDeveloper =true,
}
for (let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}