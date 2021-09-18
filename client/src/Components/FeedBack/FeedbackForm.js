import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button,TextField,Typography} from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import { useForm, Form } from '../Function/UseForm';
import axios from 'axios'
const initialFValues = {
    fullName:'',
    text:'',
    rate:5,
}

const useStyles = makeStyles(theme =>({
  form: {
      display:'flex',
      marginLeft:'50px',
      
    width:'90%',
    flexDirection: 'column',
    paddingTop:'50px'
  },
  textfield:{
      width:'120%',
      paddingBottom:'50px',
      marginLeft:'50px'
  },
  slider:{
      width:'40%',
      marginLeft:'70px',
      alignItems:'center',
      marginTop:'20px'
  },
  button: {
   marginLeft:'80px',
   width:150,
    marginTop:'60px'
  },
  typo:{
      alignItems:'center',
      textAlign:'center',
      marginTop:'30px',
      color:'#e91e63',
      fontSize:'25px',
      fontWeight:'bold',
      fontFamily:'Brush Script MT'
  },
  message:{
    alignItems:'center',
    textAlign:'center',
    marginTop:'30px',
    marginLeft:-60,
    color:'red',
    fontSize:'18px',
    
}
}));


export default function FeedbackForm() {
  const classes = useStyles();
  const[message,setMessage]=useState("")
  const[exist,setExist]=useState(false)
  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('text' in fieldValues)
        temp.text = fieldValues.text ? "" : "This field is required."
   
    setErrors({
        ...temp
    })

    if (fieldValues === values)
        return Object.values(temp).every(x => x === "")
}
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
} = useForm(initialFValues, true, validate);
useEffect(() => {
    let data=localStorage.getItem("userdata")
    let dataplz = JSON.parse(data)
    setValues({...values,fullName:dataplz.fullName})
    axios.get('http://localhost:5000/feedback')
        .then(data => {console.log(data.data)
            for(let i=0;i<data.data.length;i++){
                let element=data.data[i]
                console.log(element.fullName)
                console.log(dataplz.fullName)
                if(element.fullName===dataplz.fullName ){
                    setExist(true)
                    console.log(exist)
                    
                    
                }} 
                }      
        )
    
  }, []);
const handleSubmit = e => {
   
    if (validate()){
       
       if(exist===false){
            axios.post('http://localhost:5000/feedback',{
                'fullName':values.fullName,
                'text':values.text,
                'rate':values.rate
          }).then(response => {
            console.log("données enregistées dans la base de données ")
        }).catch(error => {
        
        console.log(error)
        })
           resetForm()
        }
        else{setMessage("You have already sent you feedback")
     setExist(false)}
       
    }}
  return (
      <div>
          <Typography className={classes.typo}> Send Us your FeedBack</Typography>
    <div className={classes.form}>
      <Form >
          <Typography className={classes.message}>{message}</Typography>
      <TextField className={classes.textfield} 
          value={values.text}
          name="text"
          id="outlined-full-width"
          label="Your feedback"
         
          placeholder="Placeholder"
          color="secondary"
          fullWidth
          onChange={handleInputChange}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <Typography style={{marginLeft:'120px',color:'#e91e63',fontSize:'16px',marginBottom:'10px'}} >
        Rate Us
      </Typography>
      <Slider
      className={classes.slider}
      
      onChange={(event,data)=>{
          setValues({ ...values,rate:data});
          handleInputChange()
      }}
        defaultValue={5}
        color="secondary"
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={0}
        max={5}
        valueLabelDisplay="auto"
      />
      <Button
      onClick={handleSubmit}
      disabled={exist===false && message!==""}
        variant="contained"
        color="secondary"
        className={classes.button}
        endIcon={<SendOutlinedIcon/>}
      >Send</Button>
      </Form>
    </div>
    </div>
  );
}