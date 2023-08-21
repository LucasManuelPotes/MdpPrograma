/*
	📌 Estructura de una clase:
	- Definición
	- Propiedades: La clase puede contener variables. Dentro de una clase se llaman propiedades.
	- Constructor: Es un metodo especial para inicializar un objeto creado a partir de una clase.
	- Métodos: La clase puede contener funciones. Dentro de una clase se llaman metodos.
    - Metodos Estaticos:
    -Metodo Privado
    -Herencia:toma las funciones de la clase padre
*/

//DECLARACIONES
class Ejemplo {

   constructor(color, marca, modelo){
      this.color = color;
      this.marca = marca;
      this.modelo = modelo;
      this.#metodoPrivado();
   }
   setColor(color){
    this.color= color;
   }
   getColor(){
    return this.color;
   }

  show(){
    console.log(`El carro es de color: ${this.color}`)
   }

   static prueba(){
    console.log("ejemplo");
 }

 #metodoPrivado(){
    console.log("hola...")
 }
  
}

class HijaEjemplo extends Ejemplo{
    constructo(color,marca,modelo,rueda){
        Super(color,marca,modelo);
        this.rueda = rueda;
    }

    newColor(color){
        Super.setColor(color);
    }

}

//INSTANCIAR UNA CLASE 
//INICIALZARLA new nombre de la clase 

Ejemplo.prueba()



const a = new HijaEjemplo("red","fiat","cronos");
console.log(a)
const b = new Ejemplo("red","fiat","cronos",4);
a.show();
b.newColor("azul")
b.show();








// class Usuario {
//     tipo = "persona";

//     constructor(nombre, apellido){
//         this.nombre = nombre;
//         this.apellido = apellido;

//        console.log("Nuevo Usuario registrado")
//     }

//     obtenerNombreCompleto(){
//         console.log("Obteniendo Datos...");
//         return`${this.nombre} ${this.apellido}`;
//     }
// }

// const persona = new Usuario("Lucas", "Potes");
// console.log(persona.obtenerNombreCompleto());

// const persona1 = new Usuario("Alejandro", "Perez");
// console.log(persona1.obtenerNombreCompleto());