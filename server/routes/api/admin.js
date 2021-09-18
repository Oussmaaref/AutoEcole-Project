const express = require("express")
const router = express.Router() 
const admin = require("../../models/user/admins")
const bcrypt= require('bcrypt')


router.get("/",(req,res)=>{
    admin.find().then((result)=>{
        
        res.send(JSON.stringify(result))
        console.log(result)
    }).catch((err)=>{
        console.log(err)
    })
})
router.post('/',(req,res)=>{
    const {fullName,password,role} = req.body 
    if(!fullName || !password){
       return res.status(422).json({error:"please add all the fields"})
    }
    admin.findOne({fullName:fullName})
    .then((savedUser)=>{
        if(savedUser){
          return res.status(422).json({error:"user already exists with that email"})
        }
        
              const newadmin = new admin({
                  fullName,
                  password,
                  role
                  
              })
      
              newadmin.save()
              .then(user=>{
                  // transporter.sendMail({
                  //     to:user.email,
                  //     from:"no-reply@insta.com",
                  //     subject:"signup success",
                  //     html:"<h1>welcome to instagram</h1>"
                  // })
                  res.json({message:"saved successfully"})
              })
              .catch(err=>{
                  console.log(err)
              })
        
       
    })
    .catch(err=>{
      console.log(err)
    })
  })








module.exports = router