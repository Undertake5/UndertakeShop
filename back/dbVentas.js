import Mongoose from "mongoose";

Mongoose.connect('mongodb+srv://anguille:901210@misiontic.putp984.mongodb.net/dbMisionTic?retryWrites=true&w=majority')
.then(() => console.log("Conectado a Mongo DB ventas"))
.catch(err => console.log(err))

let esquemaVentas = Mongoose.Schema({
  _id: Number,
  fecha:String,
  valor:Number,
}, {versionKey:false})

let modeloVentas = Mongoose.model('sales', esquemaVentas)

export let consultarVentas = async ()=> {
  return await modeloVentas.find()
}
