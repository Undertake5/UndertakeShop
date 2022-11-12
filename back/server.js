import Express from "express";
import {insert, consultar,eliminar} from './db.js'
import cors from 'cors'
import { consultarVentas } from "./dbVentas.js";

const app = Express()
app.use(cors())
app.use(Express.json())

app.listen('5000', function(){
    console.log("Servidor iniciado")
})

app.post('/consultarProductos', (pet, res)=> {
  console.log("Conectado al server de node js")
   let documento = consultar()
  .then(datos => res.send(datos))
  .catch(err => res.send({error:"Problemas consultado los productos"}))
})

app.post('/registrarProducto', function(req, resp) {

    insert(req.body)
    .then(()=> resp.send("Producto guardado exitosamente"))
    .catch(err => resp.send("No se pudo registrar el producto"))
})
app.delete('/eliminarProducto', function(req, resp) {
  eliminar(req.body.id)
  
  .then(()=> resp.send("Producto guardado exitosamente"))
  .catch(err => resp.send("No se pudo registrar el producto"))
})


app.post('/consultarVentas', (pet, res)=> {
  console.log("Conectado al server de node js")
   let documento = consultarVentas()
  .then(datos => res.send(datos))
  .catch(err => res.send({error:"Problemas consultado las ventas"}))
})