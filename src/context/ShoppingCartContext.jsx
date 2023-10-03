import { createContext, React, useState} from 'react'
import { useParams } from 'react-router-dom'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children})=> {

    const {id} = useParams()

    const [cantidad, setCantidad] = useState(0) 
    const [cart, setCart] = useState([])  
    const [montoAPagar, setMontoAPagar] = useState(0)

    const addItem = (item) => {
        const nuevoProd = item
        const verifyIndex =  cart.findIndex((p) => {
            return p.id === nuevoProd.id
        })
        if(verifyIndex === -1){
            setCart([...cart, nuevoProd])
            console.log(cart)
        } 
    }

    /* addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
      removeItem(itemId) // Remover un item del cart por usando su id
      clear() // Remover todos los items
      isInCart: (id) => true|false
 */


    return(
        <CartContext.Provider value={{id, cart, setCart, cantidad, setCantidad, montoAPagar, setMontoAPagar, addItem}}>  {/* doble llave */}
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider