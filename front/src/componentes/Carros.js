import datos from '../VentaAdm.json'
import '../styles/styleCarrito.css'



function Carros(){




  let visualizar = datos
  
  

  return(
    <div >
    <table  className='tabla'>
        <tr>
          <th className='imagCarrito'><img src={datos.Imagen} align="left" /></th>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Valor</th>
          <th>Total</th>
        </tr>
      
      {visualizar.map( (elem, idx) => {
          return(
              <tr>
                  <td> {<img className='imagCarrito' src={elem.Imagen} align="left"/>} </td>
                  <td> {elem.Cantidad} </td>
                  <td> {elem.Producto} </td>
                  <td>$ {elem.Valor} </td>
                  <td>$ {elem.Total} </td>
              </tr>
          )

      })}
      </table>
      
      <div class="pagar">
                <h3>Valor total a pagar = $ 370</h3>
                
              </div>
      <br/>
      <button  className="buttonFinalizar">Finalizar compra</button>
      <button  className="buttonCancelar">Cancelar</button>
    </div>



  )


}



export default Carros

