import { createContext, React, useState} from 'react'
import { useParams } from 'react-router-dom'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children})=> {

    const {id} = useParams()

    const [cantidad, setCantidad] = useState(0) 
    const [cart, setCart] = useState([])  
    const [montoAPagar, setMontoAPagar] = useState(0)

    const addItem = (item, quantity) => {
        setCart([...cart, item])
        item.cantidadAgregada = quantity
        item.precioFinal = item.precio * quantity
        setMontoAPagar(montoAPagar + item.precioFinal)
        console.log(cart)
    }

    const removeItem = (id) => {
        const newCart = cart.filter((p)=> p.id !== id)
        setCart(newCart)
        //tira error
    }

    const clearCart= () => {
        setCart([])
        setCantidad(0)
    }

    /* 
      removeItem(itemId) // Remover un item del cart por usando su id
      isInCart: (id) => true|false
 */


    return(
        <CartContext.Provider value={{id, cart, setCart, cantidad, setCantidad, montoAPagar, setMontoAPagar, addItem, clearCart,removeItem}}>  {/* doble llave */}
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider