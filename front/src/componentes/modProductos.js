import React from 'react'
import datos from '../productos.json'
import '../styles/stylesModProductos.css'
import './ListProductos'

function ModProductos(){

  let visualizar=datos

  return(
    <div >
        <table className='tablaModProductos'>
          <tr >
              <th ></th>
              <th className='colModProductos'>Articulo</th>
              <th className='colModProductos'>Descripcion</th>
              <th className='colModProductos'>Unidades Disponibles</th>
              <th className='colModProductos'>Valor</th>
              <th className='colModProductos'></th>
          </tr>

          {visualizar.map( (elem, idx) => {
            return(
                <tr>
                  <td className='rowModProductos'> <img className="iconoCliente" src={elem.imagen} align="left"></img> </td>
                  <td className="rowModProductos"> {elem.nombre} </td>
                  <td className="rowModProductos"> {elem.descripcion} </td> 
                  <td className="rowModProductos"> {elem.stock} </td>
                  <td className="rowModProductos">$ {elem.valor} </td>
                  <td className="rowModProductos"></td><button  className="buttonMod">Guardar</button>
                  <td className="rowModProductos"></td><button  className="buttonMod">Modificar</button>
                </tr>
            )
          })}
        </table>
     </div>
  )
}

export default ModProductos
