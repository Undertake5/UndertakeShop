import datos from '../VentaAdm.json'
import '../styles/styleCarrito.css'

function Carros(){

  let visualizar = datos

  return(
    <div >
      <table  className='tablaCarrito'>
          <tr>
            <th></th>
            <th className='colCarrito'>Cantidad</th>
            <th className='colCarrito'>Producto</th>
            <th className='colCarrito'>Valor</th>
            <th className='colCarrito'>Total</th>
          </tr>
        
          {visualizar.map( (elem, idx) => {
              return(
                  <tr>
                      <td > <img className='imagCarrito' src={elem.Imagen} align="50%"/> </td>
                      <td className='rowCarrito'> {elem.Cantidad} </td>
                      <td className='rowCarrito'> {elem.Producto} </td>
                      <td className='rowCarrito'>$ {elem.Valor} </td>
                      <td className='rowCarritoBold'>$ {elem.Total} </td>
                  </tr>
              )
          })}
      </table>

      
      <div className='blockPagarCarrito'>
        <label  className='labelPagarCarrito'>Valor total a pagar = $ 370</label>
        <button  className="buttonFinalizar">Finalizar compra</button>
        <button  className="buttonCancelar">Cancelar</button>
      </div>
    </div>
  )
}

export default Carros

