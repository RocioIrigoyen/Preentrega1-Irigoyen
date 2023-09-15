import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {


    const productos = [
        {id: 1, nombre: "Producto A",descripcion:"lorem A", stock: 10, precio: 1500, imagen: "#!", categoria: "torta"},
        {id: 2, nombre: "Producto B",descripcion:"lorem B", stock: 10, precio: 1500, imagen: "#!", categoria: "torta"},
        {id: 3, nombre: "Producto C",descripcion:"lorem C", stock: 10, precio: 1500, imagen: "#!", categoria: "chocolate"},
        {id: 4, nombre: "Producto D",descripcion:"lorem D", stock: 10, precio: 1500, imagen: "#!", categoria: "brownie"},
        {id: 5, nombre: "Producto E",descripcion:"lorem E", stock: 10, precio: 1500, imagen: "#!", categoria: "cookie"},
        {id: 6, nombre: "Producto F",descripcion:"lorem F", stock: 10, precio: 1500, imagen: "#!", categoria: "torta"}
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
       
       <ItemDetail productos={productos}/>
       
      </>
    )
  }

export default ItemDetailContainer