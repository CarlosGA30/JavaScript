const comidas=['quesadilla','pozole','tacos'];
/*
push - agrega al final del arreglo
pop - regresa e ilimina el ultimo elemento
unshift - agrega al inicio
shift - devueleve y elimina el primer elemnto
forEach
*/

comidas.forEach(function (ele){
    console.log(ele);
});
comidas.forEach((ele, i, comidas) => {
    console.log(i+" ghjg "+ele+comidas);
});
//ejercicio
const arr = [];
function suma(num){
    let sumNum =num +1;
    return arr.push(sumNum);
}
suma(1);
suma(3);
suma(4);
suma(5);

console.log(arr);
