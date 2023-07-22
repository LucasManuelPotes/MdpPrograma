//Estructura de control Js

/*Condicionales 
 if Condicion simple , si ocurre algo ejecuta lo siguiente 
 ejemplo:
if(condicion ){}
if(condicion && condicion ||condicion){}
*/

/* if / else 
if (condicion){
    }esle{
      }

    if(condicion) ? "aqui" : "otro";  
*/

let nota = 10;
var mensaje;
//condicion si la nota es mayor a 10 aprobo.
if(nota>10){
    mensaje= "aprobado";
}else {
    mensaje="Reprobado"
}
console.log("El usuario esta: ",mensaje);

mensaje = (nota<=10) ? "aprobado" : "Reprobado";
console.log(" T---- El usuario esta: ",mensaje);



/*CONDICIONAL MULTIPLE If- else if -else 
NOTA < 5 INSUFICIENT, NOTA < 10 SUFICIENTE, NOTA < 15 BIEN, MAYOR 15 EXCELENTE*/
nota = 16;
if (nota < 5){
    mensaje = "INSUFICIENTE"
}else if(nota < 10){
    mensaje = "SUFICIENTE";
}else if(nota < 15){
    mensaje = "BIEN";
}else {
    mensaje = "EXELENTE";
}

console.log("Mi nota es: ", mensaje)


/**CONDICIONAL SWITCH caso de uso 
 * switch (variable){
 case "": bloque...break
 case "": bloque...break
 case "": bloque...break
 * }
*/
nota = 11;
switch (nota) {
    case 0: 
    case 1:
    case 2: 
    case 3:
     case 4: 
     mensaje="Insuficiiente"
    break;
    case 5: 
    case 6:
    case 7: 
    case 8:
    case 9: 
     mensaje ="SUFICIENTE"
    break;
    case 10: 
        mensaje="CASI BIEN"
    case 11:
    case 12: 
    case 13:
    case 14: 
     mensaje ="BIEN"
          default: mensaje = "EXELENTE";
}
console.log("***********************!")
console.log("Mi nota es: ", mensaje)

//------------------------------------------------------------

let dia ="miercoles";
switch (dia) {
    case "Lunes":
         mensaje ="Buen dia feliz inicio de semana";
        break;
        case "Martes":
         mensaje ="Hoy es martes";
         break;
         case "miercoles":
            mensaje ="Estamos a la mitad de la semana";
            break;
        
    default:
        mensaje ="FELIZ VIERNES....";
        break;
}
console.log(mensaje);

/*OPERADOR TERNARIO ANIDADO CONDICIONES MULTIPLES (IF-ELSE IF-ELSE) ? : */
mensaje = (nota<5) ? "INSUFICIENTE" :
           (nota < 10) ? "suficiente" : 
           (nota<15)? "BIEN" : "EXELENTE"


//CALCULAAAAAAR EL NUMERO MAYOR Y MENOR DE TRES VARIABLES If- else ? : 
//CALCULA sI UN  NUMERO ES PAR O IMPAR 
//DADOS DOS VARIABLES REALIZAR LAS OPERACIONES BASICAS(+,-,*,/). MEDIANTE CASOS DE USOS (CASE)
//
// nota = 2;
// nota = 3;
// nota = 4


//  num = 6
// if(num%2==0){
//     console.log("par")
// }else{
//     console.log("impar")
// }