const {string } = require("joi")
const mongoose = require("mongoose")
const express = require ("express")
const Joi = require ("joi")
const { url} = require("inspector")
const admin =require("./routes/auth/admin")

const app = express()


const cors=require('cors')
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
  uri= "mongodb+srv://ashdb:1234@cluster0.xydrk.mongodb.net/auto_ecole?retryWrites=true&w=majority"
const port = 5000 || process.env.PORT

mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("connected")
   
    }).catch((err)=>{
    console.log((err),"error while connecting to db..")
  })
mongoose.connection.on("connected",()=>
console.log("we're connected")) 

mongoose.connection.on("error",(e)=>
console.log(e))

app.use(express.json())
app.use("/event",require("./routes/api/event"))
app.use("/feedback",require("./routes/api/feedback"))
app.use("/auth/employee",require("./routes/auth/employee"))
app.use("/auth/candidate",require("./routes/auth/candidate"))
app.use("/auth/admin",require("./routes/auth/admin"))
app.use("/admin",require("./routes/api/admin"))
app.use("/vehicule",require("./routes/api/vehicule"))
app.use("/candidate",require("./routes/api/candidate"))
app.use("/employee",require("./routes/api/employee"))


/*const names = [
    {id:1,name:"Ash"}
    
]
app.get('/',(req,res)=>{
    const r = {"name":"Ash"}
    res.send(JSON.stringify(r));
})*/

/*app.get("/test/:id",(req,res)=>{
    const id = req.params.id

})*/

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})








