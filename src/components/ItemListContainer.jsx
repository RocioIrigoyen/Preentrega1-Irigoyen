import ItemCount from "./ItemCount"
import ItemList from "./ItemList"


const ItemListContainer = ({greeting}) => {

  const productos = [
    {id: 1, nombre: "Producto A",descripcion:"lorem A", stock: 10},
    {id: 2, nombre: "Producto B",descripcion:"lorem B", stock: 10},
    {id: 3, nombre: "Producto C",descripcion:"lorem C", stock: 10},
    {id: 4, nombre: "Producto D",descripcion:"lorem D", stock: 10},
    {id: 5, nombre: "Producto E",descripcion:"lorem E", stock: 10},
    {id: 6, nombre: "Producto F",descripcion:"lorem F", stock: 10}
]

const mostrarProducto = new Promise ((resolve, reject)=> {
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
})


  return (
    <>
      <h2> {greeting}</h2>
      {productos.map((p)=>{
        return (
          <div key= {p.id}>
          <h2>{p.nombre}</h2>
          <p>{p.descripcion}</p>
          <ItemList/>
          <ItemCount/>
          </div>


        )
      })
      
      }
    </>
  )
}

export default ItemListContainer