import './App.css';
import React from 'react';


function App() {
  return (
    <div className="App">
        <img src="./imagenes/undertake.png" alt="logo" width="300" ></img>

      <div class="bienvenida">
        <h1>Bienvenido a la app de UNDERTAKE</h1>
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
  );
}

export default App;
