import { SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <h1>Te damos la bienvenida a Cookie Submarine</h1>
        <Text fontSize='50px' color="pink">
        Cookie Submarine, productos de pastelería 
        </Text>
        <SimpleGrid columns={2} rows={3} spacing={10} margin={10}>
          <Link to={`/category/${"torta"}`}>
              <Image src="../imgs/Cake.png" fluid />
          </Link>
          <Link to={`/category/${"brownie"}`}>
              <Image src="../imgs/Brownies.png" fluid />
          </Link>
          <Link to={`/category/${"cookie"}`}>
              <Image src="../imgs/Cookies.png" fluid />
          </Link>
          <Link to={`/category/${"chocolate"}`}>
              <Image src="../imgs/Chocolate.png" fluid />
          </Link>
        </SimpleGrid>
    </>
  )
}

export default Home