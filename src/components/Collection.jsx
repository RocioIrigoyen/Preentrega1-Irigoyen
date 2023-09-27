import {React, useState,useEffect, useParams }from 'react'
import {collection, getDocs, getFirestore} from "firebase/firestore"

const Collection = () => {

    const {categoryId} = useParams()
    const [productos, setProductos] = useState([])

    useEffect(()=> {
        const db = getFirestore()

        const ItemCollection = collection(db,"productos")
        getDocs(ItemCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            setProductos(docs)
        })


    }, [])

  return (
    <>{productos.map((p)=> {
        <h3>nombre: {p.nombre}</h3>

    })}</>
  )
}

export default Collection
