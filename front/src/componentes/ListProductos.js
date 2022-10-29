import React from 'react'
import datos from '../productos.json'
import '../styles/styleListProduct.css'
import "../componentes/administrador"

function ListarProductos(){ 

  let visualizar = datos
  
  return(
    <div >
       <table className='tablaProductos'>
          <tr >
          <th ><img src={datos.imagen} align="left" /></th>
            <th className='colProductos'>Nombre</th>
            <th className='colProductos'>Descripcion</th>
            <th className='colProductos'>Unidades Disponibles</th>
            <th className='colProductos'>Valor</th>
          </tr>
        
          {visualizar.map( (elem, idx) => {
            return(
              <tr>
                  <td className='rowProductos'> {<img className='iconoCliente' src={elem.imagen} align="left"/>} </td>
                  <td className='rowProductos'> {elem.nombre} </td>
                  <td className='rowProductos'> {elem.descripcion} </td>
                  <td className='rowProductos'> {elem.stock} </td>              
                  <td className='rowProductos'>$ {elem.valor} </td>
              </tr>
            )
      })}
    </table>
    </div>
  )
}

export default ListarProductos

