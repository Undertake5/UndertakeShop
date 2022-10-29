import React, { useState } from "react";
import '../styles/styleAdmin.css';
import Inicio from "./inicio"
import ListVentas from "./ListVentas";
import ListProductos from "./ListProductos";
import ModProductos from "./modProductos";

function Admin(){
  const volver =() =>{
    setBarra(barra = <Inicio/>)
    setListProductos(listProductos= "")
    setModProductos(modProductos= "")
    setListVentas(listVentas= "")
  }

  const listarProductos =() =>{
    setListProductos(listProductos= <ListProductos/>)
    setModProductos(modProductos= "")
    setListVentas(listVentas= "")
  }

  let modificarProductos =() =>{
    setModProductos(modProductos= <ModProductos/>)
    setListProductos(listProductos= "")
    setListVentas(listVentas= "")
  }

  const listarVentas =() =>{
    setListVentas(listVentas= <ListVentas/>)
    setModProductos(modProductos= "")
    setListProductos(listProductos= "")
  }

  let init =<div className="blockAdmin">
              <button onClick={listarProductos} className="buttonAdmin">Listar productos</button>
              <button onClick={modificarProductos} className="buttonAdmin">Modificar productos</button>
              <button onClick={listarVentas} className="buttonAdmin">Lista ventas</button>
              <button onClick={volver} className="buttonAdmin">Volver</button>
            </div>

  let [barra, setBarra] = useState(init)
  let [listVentas, setListVentas] = useState(<ListProductos/>)
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