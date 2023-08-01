const prompt=require("prompt-sync")({sigint:true});

/*agregar 10 objetos personas con diferentes datos
1- filtre por nombre (coincidncia) (solicitar al usuario el nombre a buscar)*/

let dataPersona= [];

const addDataPersona = (firstName,lastName,birthday,address,status, orientacion) => {
   let person= {
    firstName,
    lastName,
    birthday,
    address,
    status
   };
    if(orientacion){
        dataPersona.push(person);
    } else{
        dataPersona.unshift(person);
    }

}

// let nombreBuscar = prompt("INGRESE EL NOMBRE:")


addDataPersona("Lucas", "Potes", 30, "Mar del Plata", 0, true)
addDataPersona("Leandro", "Martin", 44, "Miramar", 0, true)
addDataPersona("Jose", "Perez", 14, "Mendoza", 0, true)
addDataPersona("Lucia", "Geor", 32, "Otamendi", 0, true)
addDataPersona("Jimena", "Leon", 54, "Carilo", 0, true)
addDataPersona("Martin", "Aguirre", 20, "Bariloche", 0, true)
addDataPersona("Lucrecia", "Marino", 84, "Pinamar", 0, true)
addDataPersona("Leonor", "Sanchez", 47, "Claromeco", 0, true)
addDataPersona("Juan", "Lafayye", 66, "Santaclara", 0, true)
addDataPersona("Lisandro", "Gutierrez", 23, "CABA", 0, true)


console.table(dataPersona)

//  const filtrarPorNombre = dataPersona.filter((nombre)=>{
//     return element.firstName === nombre;                        ESTA MAL
//  });

// const filtrarPorNombre = (nombre) => {
//     return dataPersona.filter((element) => {                     ESTA INCOMPLETO
//         return element.firstName === nombre;
//     });
// };

const filtrarPorNombre = (nombre) => {
    return dataPersona.filter((element) => {
        return element.firstName.toLowerCase().includes(nombre.toLowerCase());
    });
};

let nombreBuscar = prompt("INGRESE EL NOMBRE:");
let dataPersonaFiltradoPorNombre = filtrarPorNombre(nombreBuscar);

console.table(dataPersonaFiltradoPorNombre);
console.log("**********************************");



//2-Mostrar el promedio de las edades


const calcularPromedioEdades = (personas) => {
    if (personas.length === 0) {
        return 0;
    }
    const sumaEdades = personas.reduce((total, persona) => total + persona.birthday, 0);
    return sumaEdades / personas.length;
};

const promedioEdades = calcularPromedioEdades(dataPersonaFiltradoPorNombre);
console.log("Promedio de edades:", promedioEdades);