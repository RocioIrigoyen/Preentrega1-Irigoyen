import React from 'react'
import {useState, useContext} from "react"
import {NumberInput, NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,Button} from "@chakra-ui/react"
import { CartContext } from '../context/ShoppingCartContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({p}) => {
  
    const {cantidad, setCantidad, addItem} = useContext(CartContext)


    const [ocultar, setOcultar] = useState(false)

    const mensajeDeExito = () => {
      toast.success(`Agregaste ${cantidad} unidades de ${p.nombre} al carrito`, {
          position: toast.POSITION.TOP_CENTER
      })
  }

  const mensajeDeError = () => {
    toast.error(`Por favor, indicá la cantidad de productos`, {
        position: toast.POSITION.TOP_CENTER
    })
}


    const onAdd = () => {
      if (cantidad > 0) {
        addItem(p, cantidad)
        setOcultar(true)
        mensajeDeExito()
      } else {
        mensajeDeError()
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

    
    return (
      <>
      <ToastContainer />

      { !ocultar && (
        <>
        <NumberInput size='md' maxW={24} defaultValue={0} min={0} max={10}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper  onClick={sumarCantidad} />
            <NumberDecrementStepper onClick={restarCantidad}/>
          </NumberInputStepper>
        </NumberInput>
        
        <Button variant='solid' colorScheme='pink' onClick={onAdd}>Agregar al carrito</Button>
        </>
       )
      }

      </>
    )
}

export default ItemCount

