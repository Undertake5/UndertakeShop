import React, { useState } from "react";

import '../styles/stylesModProductos.css'
import "../componentes/administrador"

import ListProductos from "./ListProductos";

let url = "http://localhost:5000"
let datosProductos=consultarDatos();

function ModProductos(){ 

  consultarDatos()

  let init = <div >
                <table className='tablaProductos'>
                  <tr >
                    <th></th>
                    <th ><label className='colProductos'>id</label></th>  
                    <th ><label className='colProductos'>Nombre</label></th>                 
                    <th><label className='colProductos'>Descripcion</label></th>            
                    <th><label className='colProductos'>Unidades Disponibles</label></th>
                    <th> <label className='colProductos'>Valor</label></th>
                   
                  </tr>
                   
                  {datosProductos.map( (elem, idx) => {
                    return(
                      <tr>

                          <td className='rowProductos'> {<img className='iconoCliente' src={elem.image} align="left"/>} </td>
                           <th> <input id="id"  type="text" placeholder={elem._id} /> </th> 
                           <th> <input id="name"  type="text" placeholder={elem.name} /> </th>  
                           <th><input id ="description" type="text" placeholder={elem.description}/> </th> 
                           <th> <input id="stock" type="number"  placeholder={elem.stock}/></th> 
                           <th><input id="price" type="number" placeholder={elem.price}/></th>       
                                         
                          
                          <th><button id="buttonAgregarProductos" onClick={vistalistProducto} >Guardar</button></th>
                          <th>  <button id="buttonAgregarProductos" onClick={eliminar} >Eliminar</button></th>                        
                        
                                                                    
                      </tr>
                    )
                  })}
                </table>
                                     
                        
               
              </div>

  let [estado, setEstado] = useState(init)

  function vistalistProducto(){
    setEstado(estado=<ListProductos/>)
  }

  return(
    <div >
      {estado}
    </div>
  )
}
function eliminar(){
  let datos = {
     _id: document.getElementById('id').value
     
  }
  fetch(url+'/eliminarProducto', {
      method:'delete',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(datos)
  })
  .then(res => res.text())
  .then(data => {
    console.log("producto eliminado")
   
  })
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

export default ModProductos

