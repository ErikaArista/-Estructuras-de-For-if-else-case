var Flor1 = "Girasol";
var Flor2 = "Tulipan";

if( Flor1 == Flor2){
    switch(Flor2)
    {
        case 1:
            if(Flor2 == Flor1){
                console.log("Son Iguales");
            }
            else{
                switch(Flor1){
                    case "Tulipan":                        
                        console.log("No es un Tulipan");
                    break;
                    
                }
            }
        break;
        case "Girasol":
            console.log("Si es un girasol");
        
        break;
        default:
            console.log("Estas no son flores");
        break;
    }
}
else{
    console.log("Son diferentes"); 
}
