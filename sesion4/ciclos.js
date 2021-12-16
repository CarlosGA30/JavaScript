(function ciclos(){
    document.write("<h1>Ciclos - bucles -loops</h1>");

    /*
    Ciclos - bucles -loops
    While
    do while
    for
    */
    /*while
    let condicion =1;//valor inicial
    while(condicion){
        //tu codigo
        //modificaion a nuetro valos inicial
    }
    *
    let condicion =11;//valor inicial
    while(condicion <=10){//entra al ciclo si la condicion se cumple
        
        console.log("while "+condicion);
        condicion++;
    }
    let numero=11;
    numero++;//aummenta de 1 en 1 es igual a numero=numero + 1
    console.log(numero);
    numero--;//disminuye de 1 en 1 es igual a numero=numero - 1
    console.log(numero);
    /
    do while
    
   do{
    console.log("do while "+numero);
    numero++;  
   }while(numero<=10);
   /*
   for
   utiliza contador
   */
/*
    for (let control = 1; control < 10; control++) {
        console.log("for "+control);
    }
    const comidas=['Pozole',"Tortas",'tacos',"Tamales"];
    for (let i = 0; i < comidas.length; i++) {
        console.log("for "+comidas[i]);
        
    }
    for (const x of comidas) {
        console.log("for of "+x);
    }


})();


numeros.array.forEach(element => {
    resultado.push(element*2);*/
});
const numeros=[1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
//const resultado=[];
for(let multiplicacion=0;multiplicacion<numeros.length;multiplicacion++){
    //numeros
    resultado=numeros[multiplicacion]*2;
    console.log(resultado);


}
//console.log(resultado);
