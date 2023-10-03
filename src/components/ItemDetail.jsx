import React from 'react'
import { Card, Heading, Text, CardBody, Stack, CardFooter, Image } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ({producto}) => {



  return (
    <>
        
                <div key={producto.id}>
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
                                <Heading size='md'>{producto.nombre}</Heading>
                        
                                    <Text color='blue.600' fontSize='2xl'>
                                    ${producto.precio}
                                    </Text>
                                    <Text py='2'>
                                        {producto.descripcion}
                                    </Text>
                                    <Text py='2'>
                                        Stock disponible: {producto.stock}
                                    </Text>
                                </CardBody>
                    
                                <CardFooter>
                                    <ItemCount p={producto} />
                                </CardFooter>
                            </Stack>
                    </Card>
                </div>

            
        
    </>
  )
}

export default ItemDetail