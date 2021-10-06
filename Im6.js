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
