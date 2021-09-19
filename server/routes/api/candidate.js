const express = require("express")
const router = express.Router() 
const candidat = require("../../models/user/candidate")


router.get("/",(req,res)=>{

    candidat.find().then((result)=>{
        res.send(JSON.stringify(result))
        console.log(result)
    }).catch((err)=>{
        console.log(err)
    })
})
router.post("/",(req,res)=>{
    
    const newCandidat = new candidat({
      fullName : req.body.fullName,
      password:req.body.password,
      email:req.body.email,
      role: req.body.role,
      age:req.body.age,
      type:req.body.type,
      categorie : req.body.categorie,
      mobile : req.body.mobile,
      city:req.body.city,
      payee:req.body.payee,
      apayee:req.body.apayee,
      dateexamen:req.body.dateexamen
    })
    newCandidat.save().then((result) => {
        console.log(result)
        res.send(JSON.stringify(result))
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})



router.delete("/:id",(req,res)=>{
    const candidat_id = req.params.id
    candidat.findById(candidat_id).then((candidatToDelete)=>{
        candidatToDelete.delete();
        res.json({message:'le candidat est supprimé !'})
    }).catch(err=>{
        console.log(err)
    })
  
})

router.put("/:id",(req,res)=>{
    
    candidat.findByIdAndUpdate(req.params.id, {
        fullName : req.body.fullName,
        password:req.body.password,
        email:req.body.email,
        role: req.body.role,
        age:req.body.age,
        type:req.body.type,
        categorie : req.body.categorie,
        mobile : req.body.mobile,
        city:req.body.city,
        payee:req.body.payee,
        apayee:req.body.apayee,
        dateexamen:req.body.dateexamen
    }).then((result)=>{
        res.send(JSON.stringify(result))
    }).catch((err)=>{
        console.log(err)
    })
})




module.exports = router