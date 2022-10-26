import React, { useState } from "react";
import '../styles/styleAdmin.css';
import Inicio from "./inicio"
import ListVentas from "./ListVentas";

function Admin(){
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

  let modificarProductos =() =>{
    setModProductos(modProductos= "Modificar productos")
    setListProductos(listProductos= "")
    setListVentas(listVentas= "")
  }

  const listarVentas =() =>{
    setListVentas(listVentas= <ListVentas/>)
    setModProductos(modProductos= "")
    setListProductos(listProductos= "")
  }

  let init =<div className="blockAdmin">
              <img  className="iconoHome" src="./imagenes/undertake.png" align="left"></img>
              <button onClick={listarProductos} className="buttonAdmin">Listar productos</button>
              <button  onClick={modificarProductos} className="buttonAdmin">Modificar productos</button>
              <button  onClick={listarVentas} className="buttonAdmin">Lista ventas</button>
              <button className="buttonAdmin">Carrito</button>
              <button  onClick={volver} className="buttonAdmin">Volver</button>
            </div>

  let [barra, setBarra] = useState(init)
  let [listVentas, setListVentas] = useState("")
  let [modProductos, setModProductos] = useState("")
  let [listProductos, setListProductos] = useState("")

  return (
    <div >
      {barra}
      {listProductos}
      {modProductos}
      {listVentas}
    </div>
  )
}

export default Admin