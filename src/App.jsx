import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/itemListContainer"
import Contacto from "./components/Contacto"
import Cart from "./components/Cart"
import ItemDetail from "./components/ItemDetail"


const App = () => {



  return (
   <>

    <BrowserRouter>
      <NavBar/>

      <Routes>
{/*         <ItemListContainer/>
        <ItemDetailContainer/> */}
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/contacto" element={<Contacto/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/category/:id" element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
    

   </>
  )
}

export default App

