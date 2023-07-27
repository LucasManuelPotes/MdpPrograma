const prompt=require("prompt-sync")({sigint:true});

//REALIZAR UNA FUNCION QUE PERMITA SEGUN DADA POR EL USUARIO MOSTRAR POR PANTALLA LA TABLA DE MULTIPLICAR, SUMAR, RESTAR, DIVIDIR. 
//DADO EL VALOR INGRESADO POR EL USUARIO

let numero = parseFloat(prompt("Ingrese el número: "));
let operacion = prompt("Elija una operación:\n1 - Mostrar tabla de multiplicar\n2 - Sumar\n3 - Restar\n4 - Dividir");

console.log(numero);
console.log(operacion);

const sumar = (numero) => { 
    console.log("Tabla de Sumar:");
    for (let i = 1; i <= 10; i++){
        console.log(`${numero} + ${i} = ${numero + i}`);
    }
}

const restar = (numero) => { 
    console.log("Tabla de Restar:");
    for (let i = 1; i <= 10; i++){
        console.log(`${numero} - ${i} = ${numero - i}`);
    }
}

const multiplicar = (numero) => { 
    console.log("Tabla de Multiplicar:");
    for (let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

const dividir = (numero) => { 
    console.log("Tabla de Dividir:");
    for (let i = 1; i <= 10; i++){
        console.log(`${numero} / ${i} = ${numero / i}`);
    }
}

switch (operacion) {
    case "1":
        multiplicar(numero);
        break;
    case "2":
        sumar(numero);
        break;
    case "3":
        restar(numero);
        break;
    case "4":
        dividir(numero);
        break;
    default:
        console.log("Operación inválida. Intente nuevamente seleccionando una opción válida.");
        break;
}
