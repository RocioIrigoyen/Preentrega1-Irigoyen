import { Link } from "react-router-dom"
import CartWidget from "./cartWidget"
import {Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer} from "@chakra-ui/react"



const NavBar = () => {
  
return (
  <>
  <Flex bg="pink">
  <Box p='4' >
    <Link to={"/home"}>
      Cookie Submarine
    </Link>
  </Box >
  <Spacer />
  <Box p='4' >
    <Menu>
      <MenuButton>
        Productos
      </MenuButton>
      <MenuList>
        <MenuItem><Link to={`/category/${"torta"}`}>Tortas</Link></MenuItem>
        <MenuItem><Link to={`/category/${"brownie"}`}>Brownies</Link></MenuItem>
        <MenuItem><Link to={`/category/${"cookie"}`}>Cookies</Link></MenuItem>
        <MenuItem><Link to={`/category/${"chocolate"}`}>Chocolates</Link></MenuItem>
      </MenuList>
    </Menu>
  </Box>
  <Spacer />
  <Box p='4'>
   <Link to={"/cart"}>
      <CartWidget/>
   </Link>
  </Box>
 </Flex>





  </>

)
}

export default NavBar