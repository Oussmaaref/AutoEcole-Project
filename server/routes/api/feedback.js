const express = require("express")
const router = express.Router() 
const feedback = require("../../models/feedback")


router.get("/",(req,res)=>{

    feedback.find().then((result)=>{
        res.send(JSON.stringify(result))
        console.log(result)
    }).catch((err)=>{
        console.log(err)
    })
})
router.post("/",(req,res)=>{
    const newfeedback = new feedback({
        fullName:req.body.fullName,
        text:req.body.text,
        rate:req.body.rate
     
    })
    newfeedback.save().then((result) => {
        console.log(result)
        res.send(JSON.stringify(result))
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})








module.exports = router