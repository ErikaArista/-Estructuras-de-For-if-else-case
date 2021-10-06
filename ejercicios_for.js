var x = parseInt(prompt("Ingrese un numero"));
var contador = 1;
var total = 0;
while (contador <= x) {
    var n = parseInt(prompt("Ingrese un numero"));
    total = total + n;    
    contador++;
}
for (var i = 1; i <= x; i++) {
    var n = parseInt(prompt("Ingrese un numero"));
    total = total + n; 
}
console.log(total);

var frase = prompt("Ingrese una frase");
var contador = 0;
for (var i = 0; i < frase.length; i++) {
    if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u") {
        contador++;
    }
}
// console.log("Cantidad: "+contador);
var frase = prompt("Ingrese una frase");
var contador = 0;
for (var i = 0; i < frase.length; i++) {
    switch (frase[i]) {
        case "a":
            console.log("a");
            contador++;
        break;
        case "e":
            console.log("e");
            contador++;
        break;
        case "i":
            console.log("i");
            contador++;
        break;
        case "o":
            console.log("o");
            contador++;
        break;
        case "u":
            console.log("u");
            contador++;
        break;
    }
}

