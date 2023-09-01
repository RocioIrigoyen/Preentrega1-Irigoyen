

import NavBar from "./components/NavBar"
import ItemListContainer from "./components/itemListContainer"


const App = () => {

  const greeting = "Bienvenidos a Cookie Submarine"


  return (
   <>


    <NavBar/>
    <ItemListContainer
    greeting = {greeting}
    />

   </>
  )
}

export default App

