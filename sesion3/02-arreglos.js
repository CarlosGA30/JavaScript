/*
Coleccion de elementos 
Tienes metodos o funciones 
manipular los datos almacenados
*/
//manera 1
const arreglo1=[];
//manera 2
const arreglo2=Array.of(1,'hola',true);
//manera 3
const arreglo3=new Array(1,'hola',true);
const frutas=['manzanas','naranjas',
'uvas','sandias',[1,2,3,4,5,['A','B','C','D']]];
//notacion de corchetes
document.write('<h1>'+frutas[1]+'</h1>');
document.write('<h1>'+frutas[3]+'</h1>');
document.write('<h1>'+frutas[4]+'</h1>');
document.write('<h1>'+frutas[4][4]+'</h1>');
document.write('<h1>'+frutas[4][5][1]+'</h1>');
document.write('<h1>'+frutas+'</h1>');
//Metodos 
// length=longitud
const letras=['A','B','C','D','A','B'];
document.write('<h1>'+letras+" "+letras.length+'</h1>');

//push=añade un elemento al final del arreglo
letras.push(['C',2])
document.write('<h1>'+letras+" "+letras.length+'</h1>');

//pop = elimina el ultimo elemento
letras.pop();
document.write('<h1>'+letras+" "+letras.length+'</h1>');

//unshift =afrega un elemento al inicio del arreglo
letras.unshift("1");
document.write('<h1>'+letras+" "+letras.length+'</h1>');

//shift = elimina el primer elemento
letras.shift();
document.write('<h1>'+letras+" "+letras.length+'</h1>');

/*let img=document.getElementById("i_imag");
img.addEventListener('error', e => {
    img.src = "vacio.jpg"
   })
/*if(img.onerror){
    img.src="vacio.jpg";
}*/

function cuantosElementosHayArreglo(arreglo,dato){
    let total=0;
    for(let elemento of arreglo){
       if(elemento==dato) total++;
    }
    return total;
}

function cuantasVecesSeRepite(arr){
    const datos=[];
    for (let index of arr) {
        if((datos.indexOf([index,cuantosElementosHayArreglo(arr,index)]))<0){ 
            datos.push([index,cuantosElementosHayArreglo(arr,index)]);
            
        }
        
    }
    return datos;
}
////dado un arreglo o cadena devuelve cuantas veses se repite un elemento
function seRepite(arreglo){
    const datos=[];
    //let arr=new arreglo;
    let arr=Array.from(arreglo);
    /*let arr=[];
    arreglo.forEach(element => {
        arr.push(element);
    });/**/
      
    while(arr.length>0){
        let va=arr.shift();
        let encontrado=false;
        for(let index=0;( index<datos.length )&& !encontrado;index++){
            if(datos[index][0]==va){
                encontrado=true;
                datos[index][1]++;
            }
        }
        
        if(!encontrado){
            datos.push([va,1]);
        }
        
   }
   return datos;
}
//document.write('<h1>'+cuantosElementosHayArreglo("gallina",'l')+'</h1>');
//document.write('<h1>'+letras+'</h1>');
//document.write('<h1>'+cuantasVecesSeRepite(letras)+'</h1>');
document.write('<h1>'+"se repite"+seRepite(letras)+'</h1>');
console.log(seRepite("gallina"));
console.log("si ppas")
console.log(letras);
document.write('<h1>'+seRepite("gallina")+'</h1>');

