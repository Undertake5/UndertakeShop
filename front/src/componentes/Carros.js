import datos from '../VentaAdm.json'
import '../styles/styleCarrito.css'


<div class="Hola">
<img className="imgInicio" src="./imagenes/undertake.png" ></img> 

</div>

function Carros(){




  let visualizar = datos
  
  

  return(
    <div >
    <table >
        <tr>
          <th>Imagen</th>
          <th>Cantidad</th>
          <th>Producto</th>
          <th>Valor</th>
          <th>Total</th>
        </tr>
      
      {visualizar.map( (elem, idx) => {
          return(
              <tr>
                  <td> {elem.Imagen} </td>
                  <td> {elem.Cantidad} </td>
                  <td> {elem.Producto} </td>
                  <td>$ {elem.Valor} </td>
                  <td>$ {elem.Total} </td>
              </tr>
          )

      })}
      </table>
      
      <div class="pagar">
                <h3>Valor total a pagar</h3>
                
              </div>
      <br/>
      <button  className="buttonFinalizar">Finalizar compra</button>
      <button  className="buttonCancelar">Cancelar</button>
    </div>



  )


}



export default Carros

