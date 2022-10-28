import React from 'react'
import datos from '../productos.json'
import '../styles/styleListProduct.css'
import "../componentes/administrador"


function ListarProductos(){ 

  let visualizar = datos
  
  return(
    <div >
       <table className='tabla'>
          <div ></div>
          <tr >
          <th className='iconoCliente'><img src={datos.imagen} align="left" /></th>
            <th className='producto'>Nombre</th>
            <th className='producto'>Descripcion</th>
            <th className='producto'>Unidades Disponibles</th>
            <th className='producto'>Valor</th>
          </tr>
        
          {visualizar.map( (elem, idx) => {
            return(
              <tr>
                <td> {<img className='iconoCliente' src={elem.imagen} align="left"/>} </td>
                  <td > {elem.nombre} </td>
                  <td > {elem.descripcion} </td>
                  <td > {elem.stock} </td>              
                  <td >$ {elem.valor} </td>
              </tr>
            )
      })}
    </table>
    </div>
  )
}

export default ListarProductos

