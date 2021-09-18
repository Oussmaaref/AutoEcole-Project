import React,{useState,useEffect} from 'react'
import {Paper,makeStyles, Typography, Card, Avatar} from "@material-ui/core"
import axios from 'axios'

const useStyles = makeStyles(theme => ({
   root:{
       display:'flex'
   },
    paper:{
       width:150,
       height:'150px',
       marginLeft:'160px',
       marginTop:'70px',
       boxShadow: '0 8px 16px 0 #7a7a7a',
       borderRadius:10,   },
   papercontent: {
       marginTop:'10px',
       textAlign:'center',
       fontSize:'35px',
       alignItems:'center',
       
   },
   headercontent: {
    marginTop:'25px',
    textAlign:'center',
    fontSize:'25px',
    alignItems:'center',
    fontWeight:'bold',
    fontFamily:'Brush Script MT'
    
},
headercontent1: {
    marginTop:'25px',
    textAlign:'center',
    fontSize:'20px',
    alignItems:'center',
    fontWeight:'bold',
    fontFamily:'Brush Script MT'
    
},
   feedbackpaper:{
       marginTop:80,
       marginLeft:'450px',
       marginRight:'450px',
       marginBottom:'30px',
       boxShadow: '0 8px 16px 0 #7a7a7a',
       borderRadius:10,
      
      paddingTop:'20px',
      paddingBottom:'20px',
       paddingLeft:'130px'

   },
   feedbackcontent:{
    color:'#e91e63',
      fontSize:'30px',
      fontWeight:'bold',
      fontFamily:'Brush Script MT'
   },
   card:{
    
        display: 'flex',
        padding: theme.spacing(2),
        width:"35%",
        background:'#e6e6e6',
        borderRadius: 12,
        boxShadow: '0 2px 4px 0 rgba(138, 148, 159, 0.2)',
        marginBottom:'10px',
        marginLeft:'455px'
   }

}))
function HomeComponent() {

    const [countcand,setCountcand]=useState(0)
    const [payedcand,setPayedcand]=useState(0)
    const [countempl,setCountempl]=useState(0)
    const [countcars,setCountcars]=useState(0)
    const classes=useStyles()
    useEffect(() => {
        axios.get('http://localhost:5000/candidate')
            .then(data => {console.log(data.data)
                setCountcand(data.data.length)
            for(let i=0;i<data.data.length;i++){
                var element=data.data[i]
                   if(element.payee===element.apayee){
                       setPayedcand(oldpayedcand => (oldpayedcand+1))
                   }
            }
            })
            axios.get('http://localhost:5000/employee')
            .then(data => {console.log(data.data)
               setCountempl(data.data.length)})

         axios.get('http://localhost:5000/vehicule')
               .then(data => {console.log(data.data)
                   setCountcars(data.data.length)})
       axios.get('http://localhost:5000/feedback')
               .then(data => {console.log(data.data)
                   let d=JSON.stringify(data.data)
                   localStorage.setItem("feedback",d)
                })
    }, []);
    
    let data =localStorage.getItem("feedback")
    let feedbackdata=JSON.parse(data)
    console.log(feedbackdata,'i am feedback')
    return (
        <div>
        <div className={classes.root}>
            <Paper style={{backgroundColor:'#d2fc03',color:'white'}} className={classes.paper}>
            <h2 className={classes.headercontent}>Candidates</h2>
                <h3 className={classes.papercontent}>+{countcand}</h3>
                </Paper>
            <Paper style={{backgroundColor:'#03fc9d',color:'white'}} className={classes.paper}>
            <h2 className={classes.headercontent1}>Payed Candidates</h2>
                <h3 className={classes.papercontent} >{payedcand}</h3>
                </Paper>
            <Paper style={{backgroundColor:'#039dfc',color:'white'}} className={classes.paper}>
                <h2 className={classes.headercontent}>Employees</h2>
                <h3 className={classes.papercontent} >+{countempl}</h3>
                </Paper>
            <Paper style={{backgroundColor:'#fc03a9',color:'white'}} className={classes.paper}>
                <h2 className={classes.headercontent}>Vehicules</h2>
                <h3 className={classes.papercontent} > +{countcars}</h3>
                </Paper>
        </div>
        <Paper className={classes.feedbackpaper}><Typography className={classes.feedbackcontent}>Candidates' Feedback</Typography></Paper>
          
          {feedbackdata.map(e=>(<Card className={classes.card} >
              <div style={{marginRight:'20px'}} >
              <Avatar/>
          
          </div>
          
             <div style={{marginTop:-15}}>
             <h2>{e.fullName}</h2>
            <Typography>{e.text}</Typography>
            <Typography> Rating {e.rate} Stars</Typography>
            </div>
            </Card>) )}
             
         
            
        </div>
    )
}

export default HomeComponent
