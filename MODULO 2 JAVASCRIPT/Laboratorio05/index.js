const palabrasArray = ["serpiente", "tarantula", "camellos", "murcielago", "escorpion"];
let selectPalabras = "";
let adivinarLetra = [];
let intentos = "6";

const palabraAdivinar = document.getElementById("palabra-adivinar");
const intento = document.getElementById("intentos");
const letras = document.getElementById("letras");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", startGame);

function startGame() {
    selectPalabras =  palabrasArray[Math.floor(Math.random() * palabrasArray.length)];
    adivinarLetra = [];
    intentos = "6";
    for (let i = 0; i < selectPalabras.length; i++) {
        adivinarLetra.push('_');
    }
    palabraAdivinar.textContent = adivinarLetra.join(' ');
    intento.textContent = `Intentos restantes: ${intentos}`;

       
 }


 




