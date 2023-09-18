 "use client";
 import { useRouter } from "next/navigation";
const acercaDe = () => {
    // Hooks useRuter objet next/router               TODAS ESTAS SON ACCIONES PARA UN BOTON
      const router = useRouter();
    //  router.push("/productos")
    //  router.back();
    //  router.push({pathname:"/productos/:id",
    //                query:{id:1}}) //rutas dinamicas
    // router.replace("/acercade")

    /*/UseContext --nos ayuda adeclarar variables globales
    *createContext
    *Consume*/

    return (
        <div className="p-8">
            <h1 className="text-4x1 py-4">Acerca De</h1>
         <button onClick={()=>{
             router.push("/productos")}}>Volver</button>
         </div>
     );
     } 
    
    export default acercaDe;