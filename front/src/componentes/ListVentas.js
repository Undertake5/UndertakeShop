import datos from '../ventas.json'
import '../styles/styleListVentas.css'

function ListVentas(){

  let visualizar = datos

  return(
    <div >
      <table className='tablaVentas'>
        <tr>
          <th className='colVenta'>Fecha</th>
          <th className='colVenta'>IdVenta</th>
          <th className='colVenta'>Valor</th>
        </tr>
      
      {visualizar.map( (elem, idx) => {
          return(
              <tr>
                  <td className='rowVenta'> {elem.fecha} </td>
                  <td className='rowVenta'> {elem.idVenta} </td>
                  <td className='rowVenta'>$ {elem.valor} </td>
              </tr>
          )
      })}
      </table>
    </div>
  )
}

export default ListVentas
