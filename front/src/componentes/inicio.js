import React, { useState } from "react";
import '../styles/styleInicio.css';
import Admin from "./administrador";

const Inicio = () => {

  let init = <div>
              <img className="imgInicio" src="./imagenes/undertake.png" ></img> 
              <div class="bienvenida">
                <h1>Bienvenido al mundo de las compras</h1><br></br><br></br>
              </div>
              <button onClick={vistaCliente} className="buttonInicio">Cliente</button>
              <button onClick={vistaAdmin} className="buttonInicio">Administrador</button>
            </div>

  let [estado, setEstado] = useState(init)

  function vistaCliente(){
    setEstado(estado="")
  }
  function vistaAdmin(){
    setEstado(estado=<Admin/>)
  }
  
  return(
    <div>
      {estado}
    </div>
  )
}

export default Inicio