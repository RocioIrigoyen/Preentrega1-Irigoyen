import { createContext, React, useState} from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children})=> {

    const {id} = useParams()

    const [cantidad, setCantidad] = useState(0) 
    const [cart, setCart] = useState([])  
    const [montoAPagar, setMontoAPagar] = useState(0)
    const [cantidadCart, setCantidadCart] = useState(0)


    const isInCart = (id) => {
        return cart.find((item) => item.id === id) ? true : false
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            item.cantidadAgregada += quantity
            item.precioFinal = item.precio * quantity
            setCart(
                cart.map((p)=>{
                    return p.id === item.id ?
                    {...p, cantidadAgregada: p.cantidadAgregada += quantity} && 
                    {...p, precioFinal: p.precioFinal += (p.precio * quantity)} :
                    p
                })
            )
            setCantidadCart(cantidadCart + quantity)
            setMontoAPagar(montoAPagar + item.precio * quantity)
            setCantidad(0)

        } else {
            setCart([...cart, item])
            setCantidadCart(cantidadCart + quantity)
            item.cantidadAgregada = quantity
            item.precioFinal = item.precio * quantity
            setMontoAPagar(montoAPagar + item.precioFinal)
            console.log(cart)
            setCantidad(0)
        }

    }



    const removeItem = (item,ItemId) => {
        setCart(cart.filter((p)=> p.id !== ItemId))
        setCantidadCart(cantidadCart - item.cantidadAgregada)
        setMontoAPagar (montoAPagar - item.precioFinal)
        item.cantidadAgregada = 0
        toast.info(`Eliminaste el producto del carrito`, {
        position: toast.POSITION.TOP_CENTER})
    }

    const clearCart= () => {
        setCart([])
        setCantidadCart(0)
        setMontoAPagar (0)
    }



    return(
        <CartContext.Provider value={{id, cart, setCart, cantidad, setCantidad, montoAPagar, setMontoAPagar, addItem, clearCart,removeItem,cantidadCart,setCantidadCart}}>  {/* doble llave */}
            {children}
            <ToastContainer/>
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider