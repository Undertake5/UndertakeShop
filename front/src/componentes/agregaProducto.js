import React, { useState } from "react";
import ListProductos from "./ListProductos";
import '../styles/styleAgregarProducto.css'

let url = "http://localhost:5000"

function AgregarProducto() {

  let init = <div className="container-agregar-producto">
                <div className="container-agregar-producto-general">
                  <form >
                      <div className="container-label-agregar-producto">
                          <label>Nombre &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                      </div>
                      <div className="container-input-agregar-producto">
                          <input id="name"  type="text" placeholder="Ingrese el nombre" required />
                      </div>
                      <div className="container-label-agregar-producto">
                          <label>Descripcion &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                      </div>
                      <div className="container-input-agregar-producto">
                          <input id ="description" type="text" placeholder="Ingrese la descripcion" required/>
                      </div>
                      <div className="container-label-agregar-producto">
                          <label>Unidades Disponibles &nbsp;</label>
                      </div>
                      <div className="container-input-agregar-producto">
                          <input id="stock" type="number" placeholder="Ingrese las Unds disponibles" />
                      </div>
                      <div className="container-label-agregar-producto">
                          <label>Valor &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</label>
                      </div>
                      <div className="container-input-agregar-producto">
                          <input id="price" type="number" placeholder="ingrese el precio" />
                      </div>
                      <div className="container-button-agregar-producto">
                      <button  className="button-agregar-producto-guardar" type="button" onClick={registrarDatos}> Guardar </button>
                      <button  className="button-agregar-producto-cancelar" type="button" onClick={cancelar}> Cancelar </button>
                      </div>
                  </form>
                </div>
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