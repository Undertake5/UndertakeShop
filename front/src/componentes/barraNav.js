import React, {useState} from "react";
import Login from "./login";

function Barra (propiedad){
  
  let [mensaje, setMensaje] = useState("hola")
  let iniciar =() =>{
    setMensaje(mensaje= "Inicio")
  }
  let listProductos =() =>{
    setMensaje(mensaje= "Listar productos")
  }
  let modProductos =() =>{
    setMensaje(mensaje= "Modificar productos")
  }
  let listVentas =() =>{
    setMensaje(mensaje= "LIsta ventas")
  }
  let carrito =() =>{
    setMensaje(mensaje= "Carrito")
  }

  let logear =() =>{
    setMensaje(<Login/>)
  }
  let registrar =() =>{
    setMensaje(mensaje= "Registrar")
  }
  return(
    <div>
        <div className="blockBarra">
          <img  className="iconoHome" src="./imagenes/undertake.png" alt="logo" width="110" align="left"></img>
          <button onClick={listProductos}>{propiedad.mess2}</button>
          <button onClick={modProductos}>{propiedad.mess3}</button>
          <button onClick={listVentas}>{propiedad.mess4}</button>
          <button onClick={carrito}>{propiedad.mess5}</button>
          <button onClick={logear}>{propiedad.mess6}</button>
          <button onClick={registrar}>{propiedad.mess7}</button>
        </div>
        <div>
          <h1> {mensaje} </h1>
        </div>
    </div>
  )
}

export default Barra 

