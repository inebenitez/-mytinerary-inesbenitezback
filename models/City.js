import { model,Schema,Types } from "mongoose";

let collection = "cities"
let schema = new Schema({
    country: { type:String,required:true },
    fundation: { type:Date,required:true },
    population: { type:Number },
    photo: { type:String,required:true },
    city: { type:String,required:true },
    description: { type:String,default:"edit later" },
    smalldescription: { type:String,default:"edit later" },
    featuredLocation: { type:String,default:"edit later" },
    admin_id: { type:Types.ObjectId,required:true,ref:'users' }
})
//para relacionar esto en mongo se referencia el dato hacia la coleccion que necesito relacionarme
//estando en city de la coleccion cities, para relacionar la propiedad admin_id con la coleccion users referencio la propiedad ref:'aca va la coleccion'
let City = model( collection,schema )
export default City