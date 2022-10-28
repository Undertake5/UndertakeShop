import React, { useState } from "react";
import '../styles/styleAdmin.css';
import Inicio from "./inicio"
import ListVentas from "./ListVentas";
import ListProductos from "./ListProductos";
import Carros from "./Carros";
import ModProductos from "./modProductos";


function Admin(){
  const volver =() =>{
    setBarra(barra = <Inicio/>)
    setListProductos(listProductos= "")
    setModProductos(modProductos= "")
    setListVentas(listVentas= "")
    setCarrito(Carrito = "")
  }
  
  const listarProductos =() =>{
    setListProductos(listProductos= <ListProductos/>)
    setModProductos(modProductos= "")
    setListVentas(listVentas= "")
    setCarrito(Carrito = "")
  }

  let modificarProductos =() =>{
    setModProductos(modProductos= <ModProductos/>)
    setListProductos(listProductos= "")
    setListVentas(listVentas= "")
    setCarrito(Carrito = "")
  }

  const listarVentas =() =>{
    setListVentas(listVentas= <ListVentas/>)
    setModProductos(modProductos= "")
    setListProductos(listProductos= "")
    setCarrito(Carrito = "")
  }

  const carritoVenta =() =>{
    setCarrito(Carrito = <Carros/>)
    setModProductos(modProductos= "")
    setListVentas(listVentas= "")
    setListProductos(listProductos= "")
  }

  let init =<div className="blockAdmin">
              <img  className="iconoHome" src="./imagenes/undertake.png" align="left"></img>
              <button onClick={listarProductos} className="buttonAdmin">Listar productos</button>
              <button  onClick={modificarProductos} className="buttonAdmin">Modificar productos</button>
              <button  onClick={listarVentas} className="buttonAdmin">Lista ventas</button>
              <button  onClick={carritoVenta} className="buttonAdmin">Carrito</button>
              <button  onClick={volver} className="buttonAdmin">Volver</button>
            </div>

  let [barra, setBarra] = useState(init)
  let [listVentas, setListVentas] = useState("")
  let [modProductos, setModProductos] = useState("")
  let [listProductos, setListProductos] = useState("")
  let [Carrito,setCarrito] = useState("")

  return (
    <div >
      {barra}
      {listProductos}
      {modProductos}
      {listVentas}
      {Carrito}
    </div>
  )
}

export default Admin