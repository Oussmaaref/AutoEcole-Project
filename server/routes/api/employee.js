const express = require("express")
const router = express.Router() 
const employee = require("../../models/user/employee")


router.get("/",(req,res)=>{

    employee.find().then((result)=>{
        res.send(JSON.stringify(result))
        console.log(result)
    }).catch((err)=>{
        console.log(err)
    })
})
router.post("/",(req,res)=>{
    
    
    const newEmployee = new employee({
      fullName : req.body.fullName,
      email:req.body.email,
      password:req.body.password,
      role: req.body.role,
      mobile : req.body.mobile,
      salaire:req.body.salaire,
      city:req.body.city,
     
    })
    newEmployee.save().then((result) => {
        console.log(result)
        res.send(JSON.stringify(result))
    }).catch(err => {
        console.log(err)
        res.send(err)
    })
})



router.delete("/:id",(req,res)=>{
    const employee_id = req.params.id
    employee.findById(employee_id).then((EmployeeToDelete)=>{
        EmployeeToDelete.delete();
        res.json({message:'le employee est supprimé !'})
    }).catch(err=>{
        console.log(err)
    })
  
})

router.put("/:id",(req,res)=>{
    
    employee.findByIdAndUpdate(req.params.id, {
        fullName : req.body.fullName,
        email:req.body.email,
        password:req.body.password,
        role: req.body.role,
        mobile : req.body.mobile,
        salaire:req.body.salaire,
        city:req.body.city,
    }).then((result)=>{
        res.send(JSON.stringify(result))
    }).catch((err)=>{
        console.log(err)
    })
})




module.exports = router