import {React, useState} from 'react'

const Form = () => {


    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [purchasedId, setPurchasedId] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        nombre === "" || email === "" ? alert("Existen campos vacíos") : alert(`Gracias, ${nombre}. Te enviamos un mail a ${email} con los detalles de tu compra`)
    }
  return (
    <>
        <form onSubmit={handleSubmit}>  {/* Evento onSubmit */}
            <input type="text" onChange={(e)=> setNombre(e.target.value)} /> {/* Evento onChange */}
            <input type="email" onChange={(e)=> setEmail(e.target.value)} /> 
            <button type='submit'>Enviar</button>
        </form>

        { 
         purchasedId === "" ? 
         <p>Por favor, ingresa tus datos</p> : 
         <p>Tu compra fue realizada con éxito. ID: {purchasedId}</p>

        }
    </>
  )
}

export default Form