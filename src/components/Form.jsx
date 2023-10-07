import React from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useState } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {

  const {cart, clearCart} = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [purchasedId, setPurchasedId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(orderCollection, order).then(({id}) => setPurchasedId(id) )
        nombre === "" || email === "" ? 
        toast.error(`Completá todos los campos`, {
          position: toast.POSITION.TOP_CENTER
          }) : 
        toast(`Gracias, ${nombre}. Te enviamos un mail a ${email} con los detalles de tu compra`, {
          position: toast.POSITION.TOP_CENTER
        })
    }

    const order = {
      buyer: {
        nombre, email
      },

      items: cart.map(({id, nombre, precio, precioFinal, cantidadAgregada})=>({id, nombre, precio, precioFinal, cantidadAgregada})
      )

    }

    const orderCollection= collection(db,"order")
  return (
    <>
        <form onSubmit={handleSubmit}>  {/* Evento onSubmit */}
            <input type="text" placeholder="Nombre y apellido" onChange={(e)=> setNombre(e.target.value)} /> {/* Evento onChange */}
            <input type="email" placeholder="Correo electrónico" onChange={(e)=> setEmail(e.target.value)} /> 
            <button type='submit'>Enviar</button>
        </form>
        <ToastContainer/>

        { 
         purchasedId === null ? 
         <p>Por favor, ingresa tus datos</p> :
         <div>
          <p>Tu compra fue realizada con éxito. ID: {purchasedId}</p>
          <Link to={"/home"}><Button colorScheme="pink" onClick={clearCart}>Finalizar</Button></Link>
         </div> 

        }
    </>
  )
}

export default Form