import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Heading, Text, CardBody, Stack,Button, Image, Flex, Spacer } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'


const Cart = () => {
  const {cart, montoAPagar, clearCart, removeItem} = useContext(CartContext)
  
  return (
    <>
  {  cart.map((p)=>{
      return (
        <div key= {p.id}>
        <Card   
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <Image
         objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src='https://sugarfreelondoner.com/wp-content/uploads/2020/12/sugar-free-birthday-cake-chocolate-1200.jpg'
          alt='torta de chocolate'
          borderRadius='lg'
          />                
          <Stack mt='6' spacing='3'>
              <CardBody>
                      <Heading size='md'>{p.nombre}</Heading>

                  <Text color='pink.600' fontSize='2xl'>
                    ${p.precioFinal}
                  </Text>
                  <Text py='2'>
                  Cantidad seleccionada: {p.cantidadAgregada} productos
                  </Text>
                  <Button colorScheme='red' variant='outline'  onClick={() => removeItem(p,p.id)}>Eliminar</Button>
              </CardBody>
          </Stack>
        </Card> 
        </div>
      )
    })}
    
    {cart.length > 0 ? 
    <div>
      <Flex>
        <h3>Monto a pagar: ${montoAPagar}</h3>
        <Spacer/>
        <Link to={"/checkout"}>
          <Button colorScheme='pink'>Finalizar compra</Button>
        </Link>
        <Spacer/>
        <Button colorScheme='red' variant='link' onClick={clearCart}>Vaciar carrito</Button>
      </Flex>
    </div>
    : 
    <div>
      <h2>No hay productos en el carrito</h2>
      <Link to={"/"}>
       <Button colorScheme='pink'>Volver al inicio</Button>
       </Link> 
    </div>}
    
    </>
  )
}

export default Cart