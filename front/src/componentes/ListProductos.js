import React from 'react'
import datos from '../productos.json'
import '../styles/styleListProduct.css'
import "../componentes/administrador"

function ListarProductos(){

  let visualizar = datos

  return(
    <div className='Lista'>
      
        <tr>
          <th>Nombre</th>
          <th>descripcion</th>
          <th>Valor</th>
        </tr>
      
      {visualizar.map( (elem, idx) => {
          return(
            <div className="objetos" key={elem.id}>                        
            <strong> Objeto {idx+1} : </strong> {elem.nombre + " " + elem.descripcion + " " + elem.valor}
            </div>
          )
      })}
      
    </div>
  )
}

export default ListarProductos

