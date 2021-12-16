console.log("   ejercicio 04-Operadores");
/*
operadores aritmeticos nos sirven para hacer operaciones
    +sirve para sumar o concatenar sirve con los tipo de dato (number / String)
    -sirve para restar sirve con los tipo de dato (numbers)
    *sirve para multiplicar sirve con los tipo de dato (numbers)
    /sirve para dividir sirve con los tipo de dato (numbers)
    %sirve para optener el residuo sirve con los tipo de dato (numbers)
*/
// se declaran dos constantes numero 1 y numero 2
//se usa la funcion prompt() para optener los valores que son ingresados por el usuario
//se usa la funcion peseInt para covertir String en numbers
const numero1=2//parseInt(prompt("Ingresa el numero 1"));
const numero2=3//parseInt(prompt("Ingresa el numero 2"));

//se muestra en consola las constantes numero1 y numero2
console.log("numero1: "+numero1)
console.log("numero2: "+numero2)

//Se realizan las operaciones directo en la salida a consola
console.log("suma "+numero1+numero2);
console.log("resta "+ (numero1-numero2));
console.log("multiplicación "+numero1*numero2);
console.log("divición "+numero1/numero2);
console.log("residuo "+numero1%numero2);

//se crea una constante para cada operacion
const suma=numero1+numero2;
const resta=numero1-numero2;
const multiplicacion=numero1*numero2;
const divicion=numero1/numero2;
const residuo=numero1%numero2;

//se muestran los resultados de las constantes suma,resta,multiplicacion,divicion,residuo
console.log("Suma "+suma,"Resta "+resta,"Mult "+multiplicacion,"Divición "+divicion,"Residuo"+residuo)

/*
Opreadores Logicos
	&& AND y
	|| OR o
	! NOT no
*/