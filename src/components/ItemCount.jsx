import React from 'react'
import {useState, useEffect, useContext} from "react"
import {NumberInput, NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,Button} from "@chakra-ui/react"
import { CartContext } from '../context/ShoppingCartContext'

const ItemCount = ({p}) => {
  
    const {cart, setCart, cantidad, setCantidad, montoAPagar, setMontoAPagar, addItem, id} = useContext(CartContext)


    const [ocultar, setOcultar] = useState(false)

    const onAdd = () => {
      if (cantidad > 0) {
        addItem(p, cantidad)
        setOcultar(true)
        alert(`Agregado al carrito: ${cantidad} productos`)
      } else {
        alert("Por favor, indique la cantidad de productos")
      }

    }
    
    const sumarCantidad = () => {
      if (cantidad < 10) {
        setCantidad(cantidad + 1)
      }
    }

    const restarCantidad = () => {
      if (cantidad > 1) {
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
        <NumberInput size='md' maxW={24} defaultValue={0} min={0} max={10} value={cantidad}>
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

