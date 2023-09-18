export const NewButton = () =>{
   const x=0;

const ejemplo = () =>{
    if(x==1){
        return <p>sii..</p>
     }
     else{
        return <p>no..</p>
     }
}

const addElements = ()=> {
    const array = [];
    for(let i=0 ; i<=10; i++){
        array.push(<li key={i}>{i}</li>)
    }
    return array;
} 


    return(
        <div>
       {ejemplo()}
       <p> Hola Prueba </p>
       <ul>{addElements()}</ul>
       </div>)
}