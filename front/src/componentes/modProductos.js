import React from 'react'
import datos from '../productos.json'
import '../styles/stylesModProductos.css'
import './ListProductos'




function ModProductos(){

  let visualizar=datos
  return(
    <div >
    <table className='tabla'>
       <div ></div>
       <tr >
         <div img src={datos.imagen}></div>
         <th className='producto'>imagen</th>
         <th className='producto'>Nombre</th>
         <th className='producto'>Descripcion</th>
         <th className='producto'>Unidades Disponibles</th>
         <th className='producto'>Valor</th>
       </tr>
       
          {visualizar.map( (elem, idx) => {
            return(
              <tr>
                  <td> {<img src={elem.Imagen} />} </td>
                  <td > {elem.imagen} </td>
                  <td > {elem.nombre} </td>
                  <td > {elem.descripcion} </td> 
                  <td > {elem.stock} </td>
                  <td >$ {elem.valor} </td>       
                

                 
              </tr>
            )
            
      })} 
      </table>    
             <button  className="buttonMod">Guardar</button>
              <button  className="buttonMod">Modificar</button>
     
    </div>

  )

}


export default ModProductos
