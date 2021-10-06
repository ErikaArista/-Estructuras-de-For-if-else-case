var Triangulo= 3;
var Cuadrado= 4;

if( Triangulo != Cuadrado){
    switch(Triangulo)
    {
        case 1:
            if(Triangulo == Cuadrado){
                console.log("No son las mismas figuras");
            }
            else{
                switch(Triangulo){
                    case 4:                        
                        console.log("No es un triangulo");
                    break;
                    
                }
            }
        break;
        case 3:
            console.log("Es un triangulo");
        
        break;
        default:
            console.log("No hay figuras");
        break;
    }
}
else{
    console.log("Son diferentes"); 
}
