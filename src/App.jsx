import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShoppingCartContext from "./context/ShoppingCartContext"
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/itemListContainer"
import Contacto from "./components/Contacto"
import Cart from "./components/Cart"
import Form from "./components/Form"
import { useEffect, useState } from "react"
import Loader from "./components/Loader"
import Document from "./components/Document"

//Renderizado condicional basado en una expresión

/* const isVisible = true

{isVisible && <Form/>} */

//Renderizado condicional basado en un operador ternario
/* const usuarioRegistrado = true
{usuarioRegistrado ? <Registrado/> : <NoRegistrado/> 

const [mensaje, setMensaje] = useState("")

{mensaje ? <h1>{mensaje}</h1>} : <h3>No hay mensajes</h3>

<butto onClick={() => setMensaje("Mensaje modificado")}>Cambiar mensaje</button>*/

//Renderizado condicional basado en un operador OR (||)
/*  const variable = "" (string vacío da FALSE)
{variable || <ComponenteA/>}*/
//Renderizado condicional basado en el estado de un componente (useState)

const App = () => {

 


  return (
   <>

    <BrowserRouter>
     <ShoppingCartContext>
        <NavBar/>



        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/contacto" element={<Contacto/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
          <Route exact path="/item/:id" element={<Document/>}/>
          <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
        </Routes>
     </ShoppingCartContext>
    </BrowserRouter>
    

   </>
  )
}

export default App

