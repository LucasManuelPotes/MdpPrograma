//CALCULAAAAAAR EL NUMERO MAYOR Y MENOR DE TRES VARIABLES If- else ? : 


let num1 = 10;
let num2 = 16;
let num3 = 30;

let mayor, menor;

if (num1 > num2 && num1 > num2) {
    mayor = num1;
} else if (num2 > num1 && num2 > num3) {
    mayor = num2;
} else {
    mayor = num3;
}

if (num1 < num2 && num1 < num2) {
    menor = num1;
} else if (num2 < num1 && num2 < num3) {
    menor = num2;
} else {
    menor = num3;
}

console.log("el numero mayor es: ", mayor);
console.log("el numero menor es: ", menor);

//CALCULA sI UN  NUMERO ES PAR O IMPAR 

num5 = 6

if (num5 % 2 == 0) {
    console.log("par")
} else {
    console.log("impar")
}

//DADOS DOS VARIABLES REALIZAR LAS OPERACIONES BASICAS(+,-,*,/). MEDIANTE CASOS DE USOS (CASE)

let a = 4;
let b = 6;

let suma = "+";
let resta = "-";
let multi = "*";
let div = "/";


switch (multi) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        console.log(a / b);
        break;

    default:
        console.log("Hubo un error en tu calculo");
        break;
}



