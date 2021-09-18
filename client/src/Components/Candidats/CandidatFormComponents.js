import React, { useState, useEffect } from 'react'
import { Grid,Switch } from '@material-ui/core';
import Controls from "../../Controls/Controls";
import { useForm, Form } from '../Function/UseForm';
import generator from "generate-password";
import axios from 'axios'




const categories= [
    { id: 'A1', title: ' A1' },
    { id: 'A', title: ' A' },
    { id: 'B', title: ' B' },
    { id: 'B+E', title: ' B+E ' },
    { id: 'C', title: ' C ' },
    { id: 'C+E', title: 'C+E ' },
    { id: 'D', title: ' D ' },
    { id: 'D+E', title: ' D+E ' },
    { id: 'D1', title: ' D1 ' },
    { id: 'H', title: ' H ' }
]
const typeItems = [
    { id: 'code', title: 'Code' },
    { id: 'Conduite', title: 'Conduite' },
   
]

const initialFValues = {
    id: 0,
    fullName: '',
    age: '' ,
    mobile: '',
    city: '',
    type:'',
    categorie:"",
    dateexamen: new Date(),
    payee:"",
    apayee:"",
    password:'',
    role:'candidate',
    startDate: new Date(),
    endDate :new Date()
}

export default function CandidatForm( props ) {
    
    const { addOrEdit, recordForEdit ,add, edit} = props
    const [open,setOpen]=useState(false)

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length === 8 ? "" : " Mobile number is not valid."
        if ('categorieId' in fieldValues)
            temp.categorieId = fieldValues.categorieId.length !== 0 ? "" : "This field is required." 
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }
    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            console.log(add)
           console.log(edit)
           if (add && !edit)
           
               axios.post('http://localhost:5000/candidate',{
        'fullName':values.fullName,
        'password':values.password,
        'age':values.age,
        'role':values.role,
        'payee':values.payee,
        'apayee':values.apayee,
        'dateexamen':values.dateexamen,
        'type':values.type,
        'categorie':values.categorie,
        'city':values.city,
        'mobile':values.mobile
  }).then(response => {
    console.log("données enregistées dans la base de données ")
}).catch(error => {

console.log(error)
}
    
)  
axios.post('http://localhost:5000/event',{
        'text':'séance de '+values.type+' de '+ values.fullName,
        'startDate':values.startDate,
        'endDate':values.endDate
  }).then(response => {
    console.log("event added")
}).catch(error => {

console.log(error)
}
    
)  
  
            if (edit && !add) 
                  { 
                      axios.put(`http://localhost:5000/candidate/${values._id}`,{
                        'fullName': values.fullName,
                        'password':values.password,
                        'age':values.age,
                        'role':values.role,
                        'payee':values.payee,
                        'apayee':values.apayee,
                        'dateexamen':values.dateexamen,
                        'type':values.type,
                        'categorie':values.categorie,
                        'city':values.city,
                        'mobile':values.mobile
                      }).then(response => {
                        console.log("element modifier et  enregistées dans la base de données ")
                    }).catch(error => {
                    
                    console.log(error)
                  })
                  axios.put(`http://localhost:5000/event/${values._id}`,{
        'text':'séance de '+values.type+' de '+ values.fullName,
        'startDate':values.startDate,
        'endDate':values.endDate
  }).then(response => {
    console.log("event updated")
}).catch(error => {

console.log(error)
}
    
)  
                }


            addOrEdit( resetForm);
            
       
        }
    }
    const generatePassword = () => {
        const pwd = generator.generate({
          length: 10,
          lowercase: true,
          uppercase:true,
          numbers:true,
          symbols: false
        });
        if( values._id === 0)
          {values.password=pwd;}
    } 

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}  >
                    <Controls.RadioGroup
                        name="type"
                        label="Type"
                        value={values.type}
                        onChange={handleInputChange}
                        items={typeItems}
                    />
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Age"
                        name="age"
                        value={values.age}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                     
                </Grid>
                <Grid item xs={6} style={{display:'flex',flexDirection:'column'}}>
                   
                   
                     <Controls.Select
                        name="categorie"
                        label="Catégorie Permis"
                        value={values.categorie}
                        onChange={handleInputChange}
                         options={categories}
                        error={errors.categorie}
                    />
                    <Controls.DatePicker
                        name="dateexamen"
                        label="Date Examen  "
                        value={values.dateexamen}
                        onChange={handleInputChange}
                    />
                    
                    <Controls.Input
                        label="Payee"
                        name="payee"
                        value={values.payee}
                        onChange={handleInputChange}
                    />
                    <Controls.Input
                        label="A payer"
                        name="apayee"
                        value={values.apayee}
                        onChange={handleInputChange}
                    />
                    <div style={{display:'flex',flexDirection:'row'}}>
                    <Switch label="Add Session" style={{color:'grey'}} onChange={ (e)=> setOpen(e.target.checked)}><h6>text</h6></Switch>
                    <h4 style={{color:'grey',marginTop:'10px',marginLeft:'30px'}}>Add Session</h4>
                    </div>
                    {open ? <div> <Controls.DatePicker
                        name="startDate"
                        label="Start Date"
                        value={values.startDate}
                        onChange={handleInputChange}
                    />
                    <Controls.DatePicker
                        name="endDate"
                        label="End Date"
                        value={values.endDate}
                        onChange={handleInputChange}
                    />
                     </div>: ''}
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit"
                            color="secondary"
                            onClick={generatePassword}/>
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
