var Gato = "Felino";
var Perro = "Canino";

if( Perro == Gato){
    switch(Gato)
    {
        case 1:
            if(Perro != Gato){
                console.log("No son de la misma especie");
            }
            else{
                switch(Perro){
                    case "Canino":                        
                        console.log("El perro no es un felino");
                    break;
                    
                }
            }
        break;
        case 2:
            console.log("El perro se come al gato");
        
        break;
        default:
            console.log("No existen");
        break;
    }
}
else{
    console.log("Son diferentes"); 
}

