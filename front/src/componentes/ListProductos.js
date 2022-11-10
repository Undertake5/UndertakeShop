import React, { useState } from "react";
import datos from '../productos.json'
import '../styles/styleListProduct.css'
import "../componentes/administrador"
import AgregarProducto from './agregaProducto'

let url = "http://localhost:5000"
let datosProductos=consultarDatos();

function ListarProductos(){ 

  consultarDatos()

  let init = <div >
                <table className='tablaProductos'>
                  <tr >
                    <th ></th>
                    <th className='colProductos'>Nombre</th>
                    <th className='colProductos'>Descripcion</th>
                    <th className='colProductos'>Unidades Disponibles</th>
                    <th className='colProductos'>Valor</th>
                  </tr>
                   
                  {datosProductos.map( (elem, idx) => {
                    return(
                      <tr>
                          <td className='rowProductos'> {<img className='iconoCliente' src={elem.image} align="left"/>} </td>
                          <td className='rowProductos'> {elem.name} </td>
                          <td className='rowProductos'> {elem.description} </td>
                          <td className='rowProductos'> {elem.stock} </td>              
                          <td className='rowProductos'>$ {elem.price} </td>
                      </tr>
                    )
                  })}
                </table>
                <div id="containerAgregarProductos">
                  <button id="buttonAgregarProductos" onClick={vistaAgregarProducto} >Agregar productos</button>
                </div>
              </div>

  let [estado, setEstado] = useState(init)

  function vistaAgregarProducto(){
    setEstado(estado=<AgregarProducto/>)
  }

  return(
    <div >
      {estado}
    </div>
  )
}

function consultarDatos(){
  return fetch(url+'/consultarProductos', {
      method:'post',
      headers:{'Content-Type':'application/json'}
  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    datosProductos = data
  })

}

export default ListarProductos

