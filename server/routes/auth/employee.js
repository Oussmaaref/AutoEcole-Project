const express = require('express')
const router = express.Router()
const requireLoginAdmin= require("../../middleware/requireLoginAdmin")
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../keys')
const employee = require("../../models/user/employee")
const bcrypt = require('bcrypt')


router.post('/login', (req, res) => {
    const { fullName, password } = req.body
    if (!fullName || !password) {
       return res.status(422).send({ error: "Veuillez remplir tout les champs" })
    }
    employee.findOne({ fullName: fullName }).then(savedUser => {
        if (!savedUser) {
           return  res.status(422).send({ error: "invalid username" })
        }
        
            if (savedUser.password===password) {
                
                //res.status(200).json({message:"successfully logged in"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                const user = JSON.stringify(savedUser)

                res.json({token , user})
            }
            else {

                return res.status(422).send({ error: "invalid password" })


            }
      

    }).catch(erreur => {
        res.status(400).json({ erreur: erreur })
    })


})
module.exports=router

