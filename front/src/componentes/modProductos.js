import React from 'react'
import datos from '../productos.json'
import '../styles/stylesModProductos.css'
import './ListProductos'




function ModProductos(){

  let visualizar=datos
  return(
    <div className='tabla'>  


          <tr >
            <th className='imagenProducto'><img src={datos.Imagen} /></th>
            <th className='imagenProducto'>Imagen</th>
            <th className='producto'>Nombre</th>
            <th className='producto'>Descripcion</th>
            <th className='producto'>Valor</th>
          </tr>
        
          {visualizar.map( (elem, idx) => {
            return(
              <tr>
                  <td> {<img src={elem.Imagen} />} </td>
                  <td > {elem.imagen} </td>
                  <td > {elem.nombre} </td>
                  <td > {elem.descripcion} </td>
                  <td >$ {elem.valor} </td>
              </tr>
            )
            
      })}
      <div className='botonModificar' ><button>Modificar</button></div>
      <div className='botonGuardar' ><button> guardar </button></div>
  
    </div>

  )
}


export default ModProductos
