import React from 'react'
import Item from './Item'


const ItemList = ({productos, productosPorCategoria}) => {
  return (
    <>

      {productosPorCategoria.map((p)=>{
          return (
            <div key= {p.id}>
                <Item
                id={p.id}
                nombre={p.nombre}
                descripcion={p.descripcion}
                precio={p.precio}
                imagen={p.imagen}
                stock={p.stock}
                />
            </div> 
          )
        })}
        
    </>
  )
}

export default ItemList