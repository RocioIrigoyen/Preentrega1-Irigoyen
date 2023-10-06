import React from 'react'
import Form from './Form'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'
import { Button } from '@chakra-ui/react'

const Checkout = () => {
    const {montoAPagar} = useContext(CartContext)
  return (
    <>
    <h2>¡Ya casi es tuyo!</h2>
    <h3>Monto a pagar: ${montoAPagar}</h3>
    <Form/>
    </>
  )
}

export default Checkout