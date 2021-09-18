const express = require("express")
const router = express.Router() 
const event = require("../../models/events")


router.get("/",(req,res)=>{

    event.find().then((result)=>{
        res.send(JSON.stringify(result))
        console.log(result)
    }).catch((err)=>{
        console.log(err)
    })
})
router.post("/",(req,res)=>{
    
    const newEvent = new event({
     text:req.body.text,
     startDate:req.body.startDate,
     endDate:req.body.endDate
    })
    newEvent.save().then((result) => {
        console.log(result)
        res.send(JSON.stringify(result))
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})



router.delete("/:id",(req,res)=>{
    const event_id = req.params.id
    event.findById(event_id).then((eventToDelete)=>{
        eventToDelete.delete();
        res.json({message:'event est supprimé !'})
    }).catch(err=>{
        console.log(err)
    })
  
})

router.put("/:id",(req,res)=>{
    
    event.findByIdAndUpdate(req.params.id, {
      text:req.body.text,
      startDate:req.body.startDate,
      endDate:req.body.endDate
    }).then((result)=>{
        res.send(JSON.stringify(result))
    }).catch((err)=>{
        console.log(err)
    })
})




module.exports = router