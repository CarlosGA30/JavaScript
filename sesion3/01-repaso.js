/*
Repaso 
condicion : vifurca el flujo del codigo
if(condicion){
    hace algo si se cumple la condicion
} else if(condicion){
    hace algo si se cumple la condicion
} else {
    hace algo 
}
funcion 
Bloque reutilizable
*/
function procesadorDeFrutas(manzanas,naranjas){
    let jugo="Jugo de "+
    manzanas+" manzanas y "
    +naranjas+" naranjas";
    return jugo;
}
let JugoDeManzana= procesadorDeFrutas(4,0);
document.write('<h1>'+JugoDeManzana+'<h1>')
let JugoDeNaranja= procesadorDeFrutas(0,5);
document.write('<h1>'+JugoDeNaranja+'<h1>')


