import React, { useState } from "react";
import ListProductos from "./ListProductos";

let url = "http://localhost:5000"

function AgregarProducto() {

  let init = <div>
              <form >
                  <div>
                      <label>Nombre</label>
                      <input id="name"  type="text" placeholder="Ingrese el nombre" required />
                  </div>
                  <div>
                      <label>Descripcion</label>
                      <input id ="description" type="text" placeholder="Ingrese la descripcion" required/>
                  </div>
                  <div >
                      <label>Unidades Disponibles</label>
                      <input id="stock" type="number" placeholder="Ingrese las Unds disponibles" />
                  </div>
                  <div>
                      <label>Valor</label>
                      <input id="price" type="number" placeholder="ingrese el precio" />
                  </div>
                  <button type="button" onClick={registrarDatos}> Guardar </button>
                  <button type="button" onClick={cancelar}> Cancelar </button>
              </form>
            </div>

  let [estado, setEstado] = useState(init)

  function cancelar(){
    setEstado(estado=<ListProductos/>)
  }

  function registrarDatos(){
    let datos = {
        description: document.getElementById('description').value,
        name: document.getElementById('name').value,
        stock: document.getElementById('stock').value,
        price: document.getElementById('price').value
    }
    fetch(url+'/registrarProducto', {
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(datos)
    })
    .then(res => res.text())
    .then(data => {
      cancelar()
    })
  }

  return(
    <div >
      {estado}
    </div>
  )  
}



export default AgregarProducto