import Mongoose from "mongoose";

Mongoose.connect('mongodb+srv://undertake:undertake@cluster0.nc9kyum.mongodb.net/db?retryWrites=true&w=majority')
.then(() => console.log("Conectado a Mongo DB"))
.catch(err => console.log(err))

let esquema = Mongoose.Schema({
  name:String,
  description:String,
  stock:Number,
  price:Number,
  image:String
}, {versionKey:false})

let modelo = Mongoose.model('products', esquema)

export let insert = async (datos) => {
  let document = new modelo({
      name:datos.name,
      description:datos.description,
      stock:datos.stock,
      price:datos.price,
      image:""
  })
  await document.save() 
}

export let consultar = async ()=> {
  return await modelo.find()
}
