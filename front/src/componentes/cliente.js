import React, { useState } from "react";
import '../styles/styleAdmin.css';
import Inicio from "./inicio"
import ListVentas from "./ListVentas";
import ListProductos from "./ListProductos";

function Cliente(){
  const volver =() =>{
    setBarra(barra = <Inicio/>)
    setListProductos(listProductos= "")
    setModProductos(modProductos= "")
    setListVentas(listVentas= "")
  }
  
  const listarProductos =() =>{
    setListProductos(listProductos= "Listar Productos")
    setModProductos(modProductos= "")
    setListVentas(listVentas= "")
  }
  let init =<div className="blockClient">
              <img  className="iconoHome" src="./imagenes/undertake.png" align="left"></img>
              <button onClick={listarProductos} className="buttonACliente">Lista de  productos</button>
              <button className="buttonCliente">Carrito</button>
              <button  onClick={volver} className="buttonCliente">Volver</button>
            </div>

  let [barra, setBarra] = useState(init)
  let [listVentas, setListVentas] = useState("")
  let [modProductos, setModProductos] = useState("")
  let [listProductos, setListProductos] = useState("")

  return (
    <div >
      {barra}
      {listProductos}
     
    </div>
  )
}

export default Cliente