import React from 'react'
import {Card,CardBody,Image,Stack,Heading,Divider,CardFooter,ButtonGroup,Button} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Item = ({nombre, id, imagen}) => {
  return (
    <div>
        <Card maxW='sm' align="center">
            <CardBody>
                <Image
                boxSize='250px' 
                src={imagen}
                alt='img'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md' textAlign="center">{nombre}</Heading>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Link to={`/item/${id}`}>
                    <Button variant='solid' colorScheme='pink'>
                        Detalle
                    </Button>
                </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>              
    </div>
  )
}

export default Item