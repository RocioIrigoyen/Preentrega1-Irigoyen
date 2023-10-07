import {React, useState, useEffect }from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  const {id} = useParams()
  const[producto, setProducto] = useState([])

  useEffect(()=>{
      const db = getFirestore()
      const oneItem = doc(db,"productos",`${id}`)
      getDoc(oneItem).then((snapshot)=> {
          if (snapshot.exists()){
              const docs = snapshot.data()
              const docId = snapshot.id
              setProducto(docs)
          }
      })
  }, [])

  


    return (
      <>
      <ItemDetail producto={producto}/>
      </>
    )
  }

export default ItemDetailContainer