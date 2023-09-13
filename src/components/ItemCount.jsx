import React from 'react'
import {useState, useEffect} from "react"
import {NumberInput, NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper} from "@chakra-ui/react"

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(0)
    const onAdd = () => {
      alert(`Agregado al carrito: ${cantidad} productos`)
    }
    
    useEffect(()=>{
      console.log("UseEffect")
  
    },[cantidad])
    
    return (
      <>
      <h2>{cantidad}</h2>
      <button onClick={()=> setCantidad(cantidad + 1)}>Sumar</button>
      <button onClick={()=> setCantidad(cantidad - 1)}>Quitar</button>


      <NumberInput size='md' maxW={24} defaultValue={0} min={0} max={10}>
        <NumberInputField />
        <NumberInputStepper>
        <NumberIncrementStepper  onClick={()=> setCantidad(cantidad + 1)} />
        <NumberDecrementStepper onClick={()=> setCantidad(cantidad - 1)}/>
        </NumberInputStepper>
      </NumberInput>

      <button onClick={onAdd}>Agregar al carrito</button>
      </>
    )
}

export default ItemCount

//¿Cómo hacer un if dentro del setCantidad? ¿un for?