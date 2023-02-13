import mongoose from "mongoose";

let schema=mongoose.Schema

let productSchema=new schema({
    name:{
        type:String,
        required:true
    },
})
let Product=mongoose.model('product',productSchema)
export default Product