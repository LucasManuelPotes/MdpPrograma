/*Asincronia Metodos
-callbacks --> es una funcion que recibe como argumentos otra funcion
-promesa --> (3 estados) se cumple, error y no se cumple.
async (resuelve) / await (promesa)
*/

//callbacks
let ejemplo = () =>{
    alert("hola")
}
setTimeout(ejemplo,1000);

//Repetir los Numeros ALeatorios  hasta que de 10, el usuario debe ingresar la cantidad de repeticiones 

const aleatorios = (repeticion, callbacks) => {
    let numeros = [];
    for( let i= 0; i<repeticion ; i++){
     const numA1 = Math.ceil(Math.random()*repeticion+1)
     numeros.push(numA1)
     if(numA1 === 10){
        callbacks({error:true,msj:"Salio 10...", numeros})
        return;
     }
    }
    return callbacks(null, {error:false, msj:"exitoso",numeros})
}

aleatorios(10,(error, success)=>{
  if(error){
    console.error(error);
    return
  }
  console.log(success);
})

/*Promise tiene 3 estados 
-promesa se cumple , promesa resuelta --> then(resolve)
-promesa no se cumple promesa rechazada --> catch(reject)
-promesa indefinida promesa pendiente
-Finaliza la promesa --> finally(end)
-then(resolve,reject)
*/



// new Promise((resolve,reject)=>{
    
// })

