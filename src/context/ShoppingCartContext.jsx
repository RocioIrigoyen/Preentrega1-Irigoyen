import { createContext, React, useState} from 'react'
import { useParams } from 'react-router-dom'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children})=> {

    const {id} = useParams()

    const [cantidad, setCantidad] = useState(0) 
    const [cart, setCart] = useState([])  
    const [montoAPagar, setMontoAPagar] = useState(0)
    const [cantidadCart, setCantidadCart] = useState(0)


    const isInCart = (id) => {
        return cart.find((item) => item.id === id)
    }

    const addItem = (item, quantity) => {
        setCart([...cart, item])
        setCantidadCart(cantidadCart + cantidad)
        item.cantidadAgregada = quantity
        item.precioFinal = item.precio * quantity
        setMontoAPagar(montoAPagar + item.precioFinal)
        console.log(cart)
        setCantidad(0)
    }



    const removeItem = (item,ItemId) => {
        setCart(cart.filter((p)=> p.id !== ItemId))
        setCantidadCart(cantidadCart - item.cantidadAgregada)
    }

    const clearCart= () => {
        setCart([])
        setCantidadCart(0)
    }



    return(
        <CartContext.Provider value={{id, cart, setCart, cantidad, setCantidad, montoAPagar, setMontoAPagar, addItem, clearCart,removeItem,cantidadCart,setCantidadCart}}>  {/* doble llave */}
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider