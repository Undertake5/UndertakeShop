import datos from '../ventas.json'
import '../styles/styleListProduct.css'

function ListVentas(){

  let visualizar = datos

  return(
    <div >
      <table className='tabla'>
        <tr>
          <th>Fecha</th>
          <th>IdVenta</th>
          <th>Valor</th>
        </tr>
      
      {visualizar.map( (elem, idx) => {
          return(
              <tr>
                  <td> {elem.fecha} </td>
                  <td> {elem.idVenta} </td>
                  <td>$ {elem.valor} </td>
              </tr>
          )
      })}
      </table>
    </div>
  )
}

export default ListVentas
