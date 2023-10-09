import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShoppingCartContext from "./context/ShoppingCartContext"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/itemListContainer"
import Contacto from "./components/Contacto"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import Home from "./components/Home"
import SmallWithSocial from "./components/Footer"



const App = () => {

 


  return (
   <>

    <BrowserRouter>
     <ShoppingCartContext>
        <NavBar/>




        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/contacto" element={<Contacto/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route exact path="/checkout" element={<Checkout/>}/>
        </Routes>
     </ShoppingCartContext>
    </BrowserRouter>

    <SmallWithSocial/>
   </>
  )
}

export default App

