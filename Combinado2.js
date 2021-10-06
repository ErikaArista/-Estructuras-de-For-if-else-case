var Oso1 = "Pardo";
var Oso2 = "Pardo";

if( Oso1 == Oso2){
    switch(Oso1)
    {
        case 1:
            if(Oso1 == Oso2){
                console.log("Ambos son osos Pardos");
            }
            else{
                switch(Oso1){
                    case 2:                        
                        console.log("No es un oso");
                    break;
                    
                }
            }
        break;
        case "Pardo":
            console.log("Si es un oso Pardo");
        
        break;
        default:
            console.log("No son osos");
        break;
    }
}
else{
    console.log("Son diferentes"); 
}
