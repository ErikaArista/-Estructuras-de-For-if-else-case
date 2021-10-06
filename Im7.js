function vocales(frase1){
    return frase1.replace(/[^aeiou]/g," ").length;
}
         var frase= prompt("Inserta una frase");
 console.log(frase);