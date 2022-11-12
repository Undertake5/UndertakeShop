import '../styles/styleListVentas.css'

let url = "http://localhost:5000"
let visualizar = consultarDatos()

function ListVentas(){

  consultarDatos()

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
                  <td className='rowVenta'> {elem._id} </td>
                  <td className='rowVenta'>$ {elem.valor} </td>
              </tr>
          )
      })}
      </table>
    </div>
  )
}

function consultarDatos(){
  return fetch(url+'/consultarVentas', {
      method:'post',
      headers:{'Content-Type':'application/json'}
  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    visualizar = data
  })

}


export default ListVentas
