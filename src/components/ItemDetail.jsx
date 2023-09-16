import React from 'react'
import { Card, Heading, Text, CardBody, Stack, CardFooter, Button, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'

const ItemDetail = ({productos}) => {
    const {id} = useParams()

    const productosFiltrados = productos.filter((producto) => producto.id == id)

  return (
    <div>
        {productosFiltrados.map((p)=>{
            return(
                <div key={p.id}>
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
                            />
            
                        <Stack>
                            <CardBody>
                                <Heading size='md'>{p.nombre}</Heading>
                        
                                    <Text color='blue.600' fontSize='2xl'>
                                    ${p.precio}
                                    </Text>
                                    <Text py='2'>
                                        {p.descripcion}
                                    </Text>
                                    <Text py='2'>
                                        Stock disponible: {p.stock}
                                    </Text>
                                </CardBody>
                    
                                <CardFooter>
                                    <Button variant='solid' colorScheme='blue'>
                                        Agregar al carrito
                                    </Button>
                                    <ItemCount/>
                                </CardFooter>
                            </Stack>
                    </Card>
                </div>

            )
        })}
    </div>
  )
}

export default ItemDetail