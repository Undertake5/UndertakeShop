import Mongoose from "mongoose";

Mongoose.connect('mongodb+srv://undertake:undertake@cluster0.nc9kyum.mongodb.net/db?retryWrites=true&w=majority')
.then(() => console.log("Conectado a Mongo DB"))
.catch(err => console.log(err))