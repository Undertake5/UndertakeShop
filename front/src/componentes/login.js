import React, { Component } from "react";

class Login extends Component{
  render(){
    return(
      <div>
        <div class="bienvenida">
          <h2>Escoja su rol </h2>
        </div>
        <div class="roles">
              <div> 
                  <span>Administrador</span> 
                  <a href="Administrador"> Administrador</a>  
              </div>
              <div>                 
                  <span>cliente </span>           
                  <a href="Cliente" >Cliente</a>
              </div>
        </div>
      </div>
    )
  }
}

export default Login

