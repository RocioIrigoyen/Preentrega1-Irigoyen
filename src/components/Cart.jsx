import React from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'
import { Card, Heading, Text, CardBody, Stack, CardFooter, Button, Image, Divider, ButtonGroup } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'


const Cart = () => {
  const {cart, setCart, cantidad, setCantidad, montoAPagar, setMontoAPagar, addItem, clearCart, removeItem} = useContext(CartContext)
  
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
                  ${p.precioFinal}
                </Text>
                <Text py='2'>
                 Cantidad seleccionada: {p.cantidadAgregada} productos
                </Text>
                <Button  onClick={() => removeItem(p,p.id)}>Eliminar</Button>
            </CardBody>
        </Card> 
        </div>
      )
    })}
    
    {cart.length > 0 ? 
    <div>
      <h3>Monto a pagar: ${montoAPagar}</h3>
      <Form/>
      <Button onClick={clearCart}>Vaciar carrito</Button>
    </div>
    : 
    <div>
      <h2>No hay productos en el carrito</h2>
      <Link to={"/"}>
       <button>Volver al inicio</button>
       </Link> 
    </div>}
    
    </>
  )
}

export default Cart