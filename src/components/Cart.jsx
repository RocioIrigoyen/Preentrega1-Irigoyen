import React from 'react'
import Form from './Form'
import { Card, Heading, Text, CardBody, Stack, CardFooter, Button, Image, Divider, ButtonGroup } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'

const Cart = () => {
  const {cart, setCart, cantidad, setCantidad, montoAPagar, setMontoAPagar, addItem, id} = useContext(CartContext)
  
  return (
    <>
  {  cart.map((p)=>{
      return (
        <div key= {p.id}>
        <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://sugarfreelondoner.com/wp-content/uploads/2020/12/sugar-free-birthday-cake-chocolate-1200.jpg'
                alt='torta de chocolate'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{p.nombre}</Heading>
                </Stack>
                <Text color='blue.600' fontSize='2xl'>
                  ${p.precio}
                </Text>
                <Text py='2'>
                 Cantidad: ingresar cantidad
                </Text>
            </CardBody>
        </Card> 
        </div>
      )
    })}
    
    {cart.length > 0 ? 
    <Form/> 
    : 
    <div>
      <h2>No hay productos en el carrito</h2> 
      <button>Volver al inicio</button>
    </div>}
    
    </>
  )
}

export default Cart