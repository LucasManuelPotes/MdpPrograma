/*FUNCIONES CRECION
FUNCIONES DECLARATIVAS*/


function nombreFuctionSp(){
console.log("Hola......!")
nombreFuctionCp(1,3,5);
}
function nombreFuctionCp(x,y,z){
       let suma = x + y+z;
       console.log(suma);
       return suma;
}

//llamado a la ejecucion de la funcion
nombreFuctionSp();
let xy =  nombreFuctionCp(2,3,5);
console.log(xy * 100)


/* FUNCIONES POR EXPRESIONES
MATORMENTE SE INICIALIZA UNA VARIABLE DE TIPO FUNCION*/

const prueba = function ejemplo(){

};

prueba ();

/*FUNCIONES ANONIMAS*/
const anonimas = function(){

};

/*FUNCIONES AUTOEJECUTABLES*/
(
function(x,y){
    for(let i=x;i <=y; i++ ){
    console.log("ejemplo" + x);
}
}
)(1,10);

/*ARROW fuction
const prueba = function ejemplo(){
}
 */
const arrowFunc = () => console.log()


arrowFunc();

const sumaArrow = (x,z,y) => { return x+y+z}





