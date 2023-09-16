import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {


  const productos = [
    {id: 1, nombre: "Mousse de Chocolate",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.", stock: 10, precio: 8000, imagen: "#!", categoria: "torta"},
    {id: 2, nombre: "Cheesecake",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.", stock: 10, precio: 6700, imagen: "#!", categoria: "torta"},
    {id: 3, nombre: "Chocolate amargo",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.", stock: 10, precio: 5300, imagen: "#!", categoria: "chocolate"},
    {id: 4, nombre: "Brownies",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.", stock: 10, precio: 1500, imagen: "#!", categoria: "brownie"},
    {id: 5, nombre: "Cookies",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.", stock: 10, precio: 500, imagen: "#!", categoria: "cookie"},
    {id: 6, nombre: "Red Velvet",descripcion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.", stock: 10, precio: 800, imagen: "#!", categoria: "torta"}
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