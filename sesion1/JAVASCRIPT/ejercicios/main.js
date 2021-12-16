const pi=Math.PI;
var  titulo=document.getElementById("titulo");
var  btnTitulo=document.getElementById("btnTitulo");
//alert("hola mundo");comentario de una linea
//otro comentrio 
/*
este es un 
comentario 
multilinea
*/
/*
palabras reservadas
var 
const
let
*/
let i=1;
//valores primitivos
//string cadena de texto
// se crea una variable String "miNombre" y se le asigna carlos
let miNombre="carlos";

// se crean 3 variables nu8mber numero1,numero2,numero3 y se le asigna un numero
let numero1 =10;
let numero2 =10.05;
let numero3 =-50;

console.log(numero1,numero2,numero3);
console.log("El valor de numero 1 es " + numero1);
console.log("El valor de numero 2 es " + numero2);
console.log("El valor de numero 3 es " + numero3);

//alert("var = "+pi);

let miBoolean1=true;
let miBoolean2=false;
console.log("El valor de la variable 1 es " + miBoolean1);
console.log("El valor de la variable 2 es " + miBoolean2);

/*
null
 la variable esta vacia intencionalmente
*/
let variableVacia=null;
/*
undefined 
indica que una variable  esta vacia
*/
let variable;


variable="hola";
btnTitulo.onclick=function(){
    titulo.innerHTML='si cambio '+i;
    i++;
}

console.log(miNombre);
//sleep();
