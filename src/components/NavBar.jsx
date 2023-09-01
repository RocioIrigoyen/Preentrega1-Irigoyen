import CartWidget from "./cartWidget"
import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from "@chakra-ui/react"

const NavBar = () => {
  
return (
  <>
  <Flex>
  <Box p='4'>
    Cookie Submarine
  </Box>
  <Spacer />
  <Box p='4'>
    <Menu>
      <MenuButton>
        Productos
      </MenuButton>
      <MenuList>
        <MenuItem>Tortas</MenuItem>
        <MenuItem>Brownies</MenuItem>
        <MenuItem>Cookies</MenuItem>
        <MenuItem>Personalizados</MenuItem>
      </MenuList>
    </Menu>
  </Box>
  <Spacer />
  <Box p='4'>
   <CartWidget/>
  </Box>
 </Flex>





  </>

)
}

export default NavBar