"use client"
import {useRef} from "react";

export const Form = () =>{
    const inputRef = useRef(null)

    const handleClick = () =>{
        inputRef.current.focus();
    }

    return(
        <div>
            <input ref={inputRef}/>
            <button onClick={handleClick}>Accion Ref</button>
        </div>
    );
}