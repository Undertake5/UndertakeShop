import React from 'react'
import "../styles/styleListProduct.css"



function ListarProductos () {  
  return (
    <div>
        <div className='areaCreacion'> <label> Nombre del producto</label> <input type="text"></input> </div>
        <div className='areaCreacion'> <label> Descripcion </label> <input type="text"></input> </div>
        <div className='areaCreacion'> <label> Precio</label> <input type="number"></input></div>
        
        <div className='botonCreacion'>
          <button> Guardar </button>
          <button> Eliminar </button>
        </div>
        
    </div>
   
  )
}


export default ListarProductos