"use client"
import Image from 'next/image'
import Button from '@/app/components/button'
import {NewButton} from '@/app/components/button2'

export default function Home() {
  const variable = 43;
  return (
    <div className="container ">
      <div className='titulo1'>
    <h1 className="titulo">PRODUCTOS DE ANIME🧙‍♂️🐉</h1> 
    <p className="titulo2">Demon Slayer - DragonBall Z - Naruto - One Piece</p>
    <p className="titulo3">No esperes mas, selecciona tu personaje preferido!</p>
    </div>
    <Button name="hola" valor={variable}>
      Ejemplo de acciones
    </Button>
    <NewButton/>
    <img className='portada' src='assets/portada.png '></img>
  </div>
        
  )
}
