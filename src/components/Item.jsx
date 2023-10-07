import React from 'react'
import {Card,CardBody,Image,Stack,Heading,Divider,CardFooter,ButtonGroup,Button} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Item = ({nombre, id}) => {
  return (
    <div>
        <Card maxW='sm'>
            <CardBody>
                <Image
                src='https://sugarfreelondoner.com/wp-content/uploads/2020/12/sugar-free-birthday-cake-chocolate-1200.jpg'
                alt='torta de chocolate'
                borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{nombre}</Heading>
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