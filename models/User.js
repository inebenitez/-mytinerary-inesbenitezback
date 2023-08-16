import { model,Schema } from 'mongoose';

//espacio virtual de coleccion

let collection ='users'

//definir schema de datos del modelo
//el MOLDE/FORMA
let schema = new Schema({
    name: { type:String,required:true },
    lastName: { type:String },                      // es opcional
    mail: {type:String,required:true,unique:true }, // no duplica mail
    photo: { type:String,default:"https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg"},
    password: { type:String,required:true },
    country: { type:String,required:true },
})

// crea modelo de datos con el metodo model
// parametro es DONDE se crea el documento y con que FORMA
let User = model(collection,schema)
export default User