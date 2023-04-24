import express, { response } from 'express'
import Product from '../model/Product.js'

let router=express.Router()

//Create product
/*
URL   : http://127.23.23.43:8000/product/create
METHOD: POST
Required field: name
*/

router.post('create',async(request,response)=>{
   try{
    let newProduct={
        name:request.body.name
    }
    let product= await Product.findOne({name:newProduct.name})
    if(product){
        return response.status(300).json({
            msg:"Product already exist..."
        })
    }
    let createProduct= await Product(newProduct)
    let saveProduct=await createProduct.save()
    response.status(200).json({
        msg:"Product created successfully...",
        product:saveProduct
    })
   }
   catch(err){console.log(err);}
})



//Get all product
/*
URL   : http://127.23.23.43:8000/product/all
METHOD: GET
Required field: N/A
*/
router.get('/all',async(request,response)=>{
  try{
    let product=await Product.find()
    response.status(200).json(product)
  } 
  catch (error){console.log(error)}
})

//Get single product
/*
URL   : http://127.23.23.43:8000/product/:id
METHOD: GET
Required field: N/A
*/

router.get('/:id',async(request,response)=>{
    let product_ID=request.params.id
    try{
       let product=await Product.findById(product_ID)
    if(!product){
     return response.status(300).json({
        msg:'Product not available...'
     })
    }
    product=await Product.findById(product_ID)
    response.status(200).json({
        product:product,
    })
    }
    catch(error){console.log(error);}
})

//Update product
/*
URL   : http://127.23.23.43:8000/product/:id
METHOD: PUT
Required field: name
*/

router.put('/:id',async(request,response)=>{
    let product_ID=request.params.id
  try{
      let updateProduct={
        name:request.body.name
      }
      let product=await Product.findById(product_ID)
      if(!product){
        return response.status(404).json({
            msg:"Product not found..."
        })
      }
      product=await Product.findByIdAndUpdate(product_ID,{$set:updateProduct},{new:true})
      response.status(200).json({
        product:product
      })
  } 
  catch(error){console.log(error)}
})

//Delete product
/*
URL   : http://127.23.23.43:8000/product/:id
METHOD: DELETE
Required field: N/A
*/
router.delete('/:id',async(request,response)=>{
      let product_ID=request.params.id
      try{
        let product=await Product.findById(product_ID)
        if(!product){
            response.status(404).json({
                msg:'Product not found...'
            })
        }
        product=await Product.findByIdAndDelete(product_ID)
        response.status(200).json({
            msg:"Product deleted successfully..."
        })
      }
      catch(error){console.log(error);}
})

export default router