import React from 'react'
import {useState, useEffect} from "react"
import {NumberInput, NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,Button} from "@chakra-ui/react"

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(0)
    const [ocultar, setOcultar] = useState(false)

    const onAdd = () => {
      alert(`Agregado al carrito: ${cantidad} productos`)
      setOcultar(true)
    }
    
    const sumarCantidad = () => {
      if (cantidad < 10) {
        setCantidad(cantidad + 1)
      }
    }

    const restarCantidad = () => {
      if (cantidad > 0) {
        setCantidad(cantidad - 1)
      }
    }

    const vaciarCarrito = () => {
      setCantidad(0)
    }

    
    return (
      <>

      { !ocultar && (
        <>
        <NumberInput size='md' maxW={24} defaultValue={0} min={0} max={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper  onClick={sumarCantidad} />
            <NumberDecrementStepper onClick={restarCantidad}/>
          </NumberInputStepper>
        </NumberInput>
        
        <Button variant='solid' colorScheme='blue' onClick={onAdd}>Agregar al carrito</Button>
        </>
       )
      }

      </>
    )
}

export default ItemCount

