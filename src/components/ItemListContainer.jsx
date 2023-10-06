import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import { SimpleGrid} from '@chakra-ui/react'
import {useState,useEffect}from 'react'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import Loader from "./Loader"



const ItemListContainer = () => {
  
  const {categoryId} = useParams()
  const [loading, setLoading] = useState(true)
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
 


useEffect(()=>{
  setTimeout(() => {
    setLoading(false)
  }, 2000);
},[])

if (loading){
  return <Loader/>
}


  return (
    <>

    <h1>Te damos la bienvenida a Cookie Submarine</h1>

    <SimpleGrid columns={2} spacing={10}>
    <ItemList
    productosPorCategoria={productosPorCategoria}/>
    </SimpleGrid>
     

     
    </>
  )
}

export default ItemListContainer