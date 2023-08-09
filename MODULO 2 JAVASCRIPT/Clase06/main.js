 const prompt =require('prompt-sync')({sigint:true});



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

//PROMEDIO DE EDAD

// const promedio = () => {
//     let suma = 0;
//     dataPersona.forEach((element)=>{
//   suma = suma + element.birthday;
//     })
//     let promedio = suma / dataPersona.length;
//     return promedio;
// }

//SEGUNDA FORMA DE HACERLO CON METODO DE ARRAY LLAMADO REDUCE
//reduce((variableAcumulador,dataArray)=>{},valorInicialVariableAcumuladora)

let sumaEdades = dataPersona.reduce((sumaEdades,persona)=>{
    return sumaEdades+ persona.birthday;
},0);

let promedioReduce = sumaEdades / dataPersona.length;
console.log(promedioReduce)



/*METODO DE CADENA */
let palabra ="HoLA, MunDO,  H, k,   ";

//LONGITUD DE LA CADENA
console.log(palabra.length);

//CONVERTIR EL STRING MAYUSCULA, MINUSCULA 
console.log(palabra.toUpperCase()); //Mayuscula
console.log(palabra.toLocaleLowerCase());//Minuscula

//trim--> LIMPIAR LOS ESPACIOS EN BLANCO AL PRINCIPIO Y AL FINAL 
console.log(palabra.trim().length);

//replace(valor a buscar y valor de remplazo) --> REMPLAZAR
console.log(palabra.replace("H","J"))

//replaceALL(valor a buscar al valor a remplazar TODA LA PALABRA)
console.log(palabra.replaceAll("H","J"))

console.log(palabra[0])

/*METODO DE SUBCADENAS. DADO UN VALOR DEVUELVE UN ARRAY */
console.log(palabra.split("H"));

//includes("Criterio a buscar")devolver un valor verdadero o false
console.log(palabra.toLowerCase().includes("hola"))

//starWith("critertio a buscar") busca por primera letra

// filtre por nombre (coincidncia) (solicitar al usuario el nombre a buscar)*/

let words = prompt("INGRESE EL CREITERIO A BUSCAR:")

let dataFilter = dataPersona.filter((element)=>{
//    words = words.toLowerCase();
//    let nombre = element.firstName.toLocaleLowerCase()
   return element.firstName.toLowerCase().includes(words.toLowerCase()) || 
    element.lastName.toLowerCase().includes(words.toLocaleLowerCase());
})

console.table(dataFilter)

console.log("**********")
dataFilter = dataPersona.filter((element)=>{
    words = words.toLowerCase();
    let nombre = element.firstName.toLowerCase()
    return nombre.startsWith(words);
 })

 console.table(dataFilter)