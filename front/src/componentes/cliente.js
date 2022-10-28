import React, { useState } from "react";
import '../styles/styleCliente.css';
import Inicio from "./inicio"
import ListVentas from "./ListVentas";
import ListProductos from "./ListProductos";
import ListarProductosCliente from "./ListProductosCliente";
import Carros from "./Carros";

function Cliente(){
  const volver =() =>{
    setListProductos(listProductos= "")
    setListCarrito(listCarrito= "")
    setBarra(barra = <Inicio/>)
  }
  
  const listarProductos =() =>{
    setListProductos(listProductos=  <ListarProductosCliente/>)
    setListCarrito(listCarrito= "")
  }

  const listarCarrito =() =>{
    setListCarrito(listCarrito= <Carros/>)
    setListProductos(listProductos= "")
  }

  let init =<div className="blockCliente">
              <img  className="iconoHome" src="./imagenes/undertake.png" align="left"></img>
              <button onClick={listarProductos} className="buttonCliente">Lista de  productos</button>
              <button onClick={listarCarrito} className="buttonCliente">Carrito</button>
              <button  onClick={volver} className="buttonCliente">Volver</button>
            </div>

  let [barra, setBarra] = useState(init)
  let [listProductos, setListProductos] = useState(<ListarProductosCliente/>)
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