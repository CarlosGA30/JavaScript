// funcion que da los descuentos
function calcularDescuento(valorDeCompra){
    let descuento=0;
    if(valorDeCompra<100 && valorDeCompra>=0){
        descuento=0.1;
    }else if(valorDeCompra>=100 && valorDeCompra<200){
        descuento=0.2;
    }else if(valorDeCompra>=200){
        descuento=0.3;
    }else{
        descuento=0;
    }
    return descuento;
}
//funcion que calcula el total a pagar
function totalPagar(valorCompra){
    let descuento=valorCompra*calcularDescuento(valorCompra)
    let total=valorCompra-descuento;
    return total;
}

let precio=parseInt(prompt("dame total"));
document.write('<h1>'+totalPagar(precio)+" tu descuento fue "+
calcularDescuento(precio)*precio+'<h1>');
