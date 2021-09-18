const express = require("express")
const router = express.Router() 
const vehicule = require("../../models/vehicule")


router.get("/",(req,res)=>{

    vehicule.find().then((result)=>{
        res.send(JSON.stringify(result))
        console.log(result)
    }).catch((err)=>{
        console.log(err)
    })
})
router.post("/",(req,res)=>{
    const newVehicule = new vehicule({
        marque:req.body.marque,
        matricule:req.body.matricule,
        visite_technique:req.body.visite_technique,
        visite_vignette:req.body.visite_vignette,
        visite_assurence:req.body.visite_assurence,
        visite_reparation:req.body.visite_reparation,
     
    })
    newVehicule.save().then((result) => {
        console.log(result)
        res.send(JSON.stringify(result))
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})



router.delete("/:id",(req,res)=>{
    const vehicule_id = req.params.id
   vehicule.findById(vehicule_id).then((VehiculeToDelete)=>{
        VehiculeToDelete.delete();
        res.json({message:'la Vehicule est supprimé !'})
    }).catch(err=>{
        console.log(err)
    })
  
})

router.put("/:id",(req,res)=>{
    
    vehicule.findByIdAndUpdate(req.params.id, {
        marque:req.body.marque,
        matricule:req.body.matricule,
        visite_technique:req.body.visite_technique,
        visite_vignette:req.body.visite_vignette,
        visite_assurence:req.body.visite_assurence,
        visite_reparation:req.body.visite_reparation,
    }).then((result)=>{
        res.send(JSON.stringify(result))
    }).catch((err)=>{
        console.log(err)
    })
})




module.exports = router