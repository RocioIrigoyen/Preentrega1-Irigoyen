import React from 'react'
import ItemDetail from './ItemDetail'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import Document from './Document'

const ItemDetailContainer = () => {
 

  
/*   const mostrarProducto = new Promise ((resolve, reject)=> {
    if (productos.length > 0) {
      setTimeout(()=>{
        resolve({productos})
      }, 5000)
  
    } else {
        reject("No hay productos disponibles")
    }
  })
  
  mostrarProducto
  .then((resultado)=> {
    console.log(resultado)
  })
  .catch((error)=> {
    console.log(error)
  }) */
  
  
    return (
      <>
       <Document/>
       
      </>
    )
  }

export default ItemDetailContainer