import express from "express";
import User from "../model/User.js";
let router = express.Router();

//get all users
/*
URL            : http://127.23.23.43:8000/user/all
method         : GET
required field : N/A
*/

router.get("/all", async(request, response) => {
   let users=await User.find()
   response.status(200).json(users)
});



//Register users
/*
URL            : http://127.23.23.43:8000/user/register
method         : POST
required field : name,email,password
*/

router.post("/register", async (request, response) => {
  try {
    let newUser = {
      fname: request.body.fname,
      lname: request.body.lname,
      mobile: request.body.mobile,
      email: request.body.email,
      password: request.body.password
    }
    let user=await User.findOne({name:newUser.fname})
        if(user){
           return response.status(404).json({
                msg:"Product already exist...!"
            })
        }
    let createuser =await User(newUser);
    let saveUser =await createuser.save();
    response.status(200).json({
      msg: "user successfully created...",
      user: saveUser
    });
  } catch (err) {
   console.log(err);
  }
});

//get single users
/*
URL            : http://127.23.23.43:8000/user/:id
method         : GET
required field : N/A
*/

router.get("/:id", async(request, response) => {
  let user_ID=request.params.id
  try{
      let user=await User.findById(user_ID)
      if(!user){
        return response.status(300).json({
          msg:"user doesn't exist..."
        })
      }
      response.status(200).json(user)
  }
  catch(err){
console.log(err);
  }
});

//Update user / edit user
/*
URL            : http://127.23.23.43:8000/user/:id
method         : PUT
required field : name,email,password
*/

router.put("/:id",async(request,response)=>{
  let user_ID=request.params.id
     try{
       const updatedUser={
        fname: request.body.fname,
        lname: request.body.lname,
        mobile: request.body.mobile,
        email: request.body.email,
        password: request.body.password
       }
       let existingUser=await User.findById(user_ID)
       if(!existingUser){
        return response.status(300).json({
          msg:"user doesn't exist"
        })
      }
      let newUser=await User.findByIdAndUpdate(user_ID,{$set:updatedUser},{new:updatedUser})
      response.status(200).json({
        msg:'user updated successfully...',
        updatedUser:updatedUser
      })
     }
     catch(error){
      console.log(error);
     }
})

// Delete user
/*
URL            : http://127.23.23.43:8000/user/:id
method         : DELETE
required field : name,email,password
*/

router.delete('/:id',async(request,response)=>{
   let user_ID=request.params.id
   try{
      let user=await User.findById(user_ID)
      if(!user){
       return response.status(300).json({
          msg:"user doesn't exist..."
        })
      }
    user=await User.findByIdAndDelete(user_ID)
    response.status(200).json({
      msg:'user deleted successfully...'
    })
   }
   catch(err){
    console.log(err)
   }
})



export default router;
