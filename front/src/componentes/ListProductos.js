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
            {/*<div src={imagen[0].url}></div>*/}
            <th className='imagenProducto'>Imagen</th>
            <th className='producto'>Nombre</th>
            <th className='producto'>Descripcion</th>
            <th className='producto'>Valor</th>
          </tr>
        
          {visualizar.map( (elem, idx) => {
            return(
              <tr>
                <td > {elem.imagen} </td>
                  <td > {elem.nombre} </td>
                  <td > {elem.descripcion} </td>
                  <td >$ {elem.valor} </td>
              </tr>
            )
      })}
    </table>
    </div>
  )
}

export default ListarProductos

