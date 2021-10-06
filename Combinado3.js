var Uno = 1;
var Dos = 2;

if( Uno == Dos){
    switch(Dos)
    {
        case 1:
            if(Dos > Uno){
                console.log("Dos es mayor que uno");
            }
            else{
                switch(Uno){
                    case 3:                        
                        console.log("No hay ningun numero");
                    break;
                    
                }
            }
        break;
        case 2:
            console.log("No son iguales");
        
        break;
        default:
            console.log("No existen");
        break;
    }
}
else{
    console.log("Son diferentes"); 
}
