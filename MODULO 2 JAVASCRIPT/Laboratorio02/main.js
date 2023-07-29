const prompt=require("prompt-sync")({sigint:true});

//FUNCION ARROW
// const ejemplo = (a,b,c,d) =>{
//     let suma = a+b+c+d;

// }
// ejemplo(a,b,c,d);



/**OBJETOS  */

let nombre = "Lucas";

const persona= {
    nombre,
    apellido: "Potes",
    edad: 20,
    status: true,
    fullName:function(){
        return `${this.nombre} ${this.apellido}`;
    }
}; 

persona.direccion="CARA";
console.log(persona);
console.log(persona.nombre);
console.log(persona.fullName());

const{status,edad} = persona;
console.log(status);
console.log(edad);
console.log(Object.keys(persona));
console.log(Object.values(persona));
console.log(Object.entries(persona));
console.log(persona?.ejemplo);

// ARRAY


const arrayEjemplo = new Array ("hhola",2,3,4,true)
console.log(arrayEjemplo.length); //legth mostrar la cantidad de elementos

const arrayDos = [3, "hola", "buenas", 4,3,4];
console.log(arrayDos.length[2]);

//Operaciones y funciones dentro de arrays
//PUSH Nos permite agregar un elemento al final del array  
//UNSHIFT Agrega un elemento al inicio de un array y empuja los elementos


arrayDos.push(4,5,6,"hola");
console.log(arrayDos.length);
arrayDos.unshift("*******")
console.log(arrayDos);
console.log(arrayDos.length);


//POP() Nos permite elimar el ultimo elemento  del array
//Shift() Elimina el primer elemento de un array y recorre los elementos 

arrayDos.pop();
console.log(arrayDos)
console.log(arrayDos.length)

arrayDos.shift();
console.log(arrayDos)
console.log(arrayDos.length)

//splice(pos,cantidad) ELIMINAR LA POSICION Y CANTIDAD QUE QUIERO , 
arrayDos.splice(2, 1);
console.log(arrayDos);
console.log(arrayDos.length);
//Tambien se utiliza para INSERTAR - Le pongo cero para no borrar y agregar 
arrayDos.splice(1, 0, "HOLAAAA");
console.log(arrayDos);
console.log(arrayDos.length);

/*METODOS DE RECORRIDO FOREACH*/
arrayDos.forEach((elements, pos)=>{
    console.log(`${elements} => ${pos}`)

});

// map()
arrayDos.map((elements, pos)=>{
    console.log(`${elements} => ${pos}`)
})

//filters

let filterArray = arrayDos.filter((element)=>{
    return element <= 4;
});

//find

filterArray = arrayDos.find((element)=>{
    return element <= 4;
})

