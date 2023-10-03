import {React, useState,useEffect}from 'react'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const Collection = () => {

    const {categoryId} = useParams()
    const [productos, setProductos] = useState([])

    useEffect(()=> {
        const db = getFirestore()

        const ItemCollection = collection(db,"productos")
        getDocs(ItemCollection).then((snapshot) => {
          const docs = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

            setProductos(docs)
        })


    }, [])

    const productosPorCategoria = productos.filter((producto) => producto.categoria == categoryId)

  return (
    <>     
    <ItemList
    productosPorCategoria={productosPorCategoria}/>
    </>
  )
}

export default Collection
