import React, { useState } from "react";
import '../styles/styleCliente.css';
import Inicio from "./inicio"
import ListVentas from "./ListVentas";
import ListProductos from "./ListProductos";

function Cliente(){
  const volver =() =>{
    setListProductos(listProductos= "")
    setListCarrito(listCarrito= "")
    setBarra(barra = <Inicio/>)
  }
  
  const listarProductos =() =>{
    setListProductos(listProductos= "Listar Productos")
    setListCarrito(listCarrito= "")
  }

  const listarCarrito =() =>{
    setListCarrito(listCarrito= "Listado mi carrito")
    setListProductos(listProductos= "")
  }

  let init =<div className="blockCliente">
              <img  className="iconoCliente" src="./imagenes/undertake.png" align="left"></img>
              <button onClick={listarProductos} className="buttonCliente">Lista de  productos</button>
              <button onClick={listarCarrito} className="buttonCliente">Carrito</button>
              <button  onClick={volver} className="buttonCliente">Volver</button>
            </div>

  let [barra, setBarra] = useState(init)
  let [listProductos, setListProductos] = useState("")
  let[listCarrito, setListCarrito] = useState("")

  return (
    <div >
      {barra}
      {listProductos}
      {listCarrito}
    </div>
  )
}

export default Cliente