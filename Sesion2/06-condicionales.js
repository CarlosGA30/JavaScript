/*
condicional se utiliza para tomar decisiones dentro de nuetro programa

*/

    let edad=parseInt(prompt("Quieres una cervesa ,dime tu edad"));
    if(edad !=null){
        alert("la edad debe ser en numeros")
    }else if(edad>=18 && edad<60){
        document.write('Eres joven, rifate dos 🍻 ');
    }else if(edad>=60){
        document.write('Eres un adulto mayor, toma una 🍺');
    }else if(edad>=15 && edad<18){
        document.write('Lo siento no eres mayor de edad, pero faltan pocos años');
    }else if(edad >0){
        document.write('Lo siento eres un niño');
    }else{
        document.write('La edad no es valida'); 
    }
