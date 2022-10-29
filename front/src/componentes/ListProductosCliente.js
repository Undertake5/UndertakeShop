import React from 'react'
import datos from '../productos.json'
import '../styles/styleListProductosCliente.css'

function ListarProductosCliente(){ 

  let visualizar = datos
  
  return(
    <div >
        <table className='tablaProductosCliente'>
        
        <tr >
            <th ></th>
            <th className='colProClientes'>Articulo</th>
            <th className='colProClientes'>Descripcion</th>
            <th className='colProClientes'>Unidades Disponibles</th>
            <th className='colProClientes'>Valor</th>
            <th className='colProClientes'></th>
        </tr>

        {visualizar.map( (elem, idx) => {
            return(
            <tr>
                <td className='rowProClientes'> <img  className="iconoCliente" src={elem.imagen} align="left"></img> </td>
                <td className='rowProClientes'> {elem.nombre} </td>
                <td className='rowProClientes'> {elem.descripcion} </td>
                <td className='rowProClientes'> {elem.stock}  </td>
                <td className='rowProClientesBold'>$ {elem.valor} </td>
                <td className='rowProClientes'> <button className='botonComprar'>Comprar</button> </td>
            </tr>
            )
        })}
        </table>
     </div>
  )
}

export default ListarProductosCliente
