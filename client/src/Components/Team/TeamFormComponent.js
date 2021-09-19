import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../Controls/Controls";
import { useForm, Form } from '../Function/UseForm';

import generator from "generate-password";
import axios from 'axios'



const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    isPermanent: false,
    password:"",
    role:'employee',
    salaire:''
}

export default function TeamForm( props ) {
    
    const { addOrEdit, recordForEdit,add,edit } = props
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = (!isNaN(Number(fieldValues.mobile)) && fieldValues.mobile.length === 8 )? "" : " Mobile number is not valid."
        if ('salaire' in fieldValues)
           temp.salaire = !isNaN(Number(fieldValues.salaire))  ? "" : "  is not valid."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
    useEffect(() => {
        if (recordForEdit !== null)
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
            if (add && !edit)
           
               axios.post('http://localhost:5000/employee',{
        'fullName':values.fullName,
        'password':values.password,
        'role':values.role,
        'email':values.email,
        'salaire':values.salaire,
        'city':values.city,
        'mobile':values.mobile
  }).then(response => {
    console.log("données enregistées dans la base de données ")
}).catch(error => {

console.log(error)
}
    
)
  
            if (edit && !add) 
                  { 
                      axios.put(`http://localhost:5000/employee/${values._id}`,{
                        'fullName':values.fullName,
                       'password':values.password,
                       'role':values.role,
                       'email':values.email,
                       'salaire':values.salaire,
                        'city':values.city,
                        'mobile':values.mobile
                      }).then(response => {
                        console.log("element modifier et  enregistées dans la base de données ")
                    }).catch(error => {
                    
                    console.log(error)
                  })}
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
        if( values.id == 0)
          {values.password=pwd;}
    } 

    return (
        <Form onSubmit={handleSubmit  }>
            <Grid container>
                
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="Salaire"
                        name="salaire"
                        value={values.salaire}
                        onChange={handleInputChange}
                        error={errors.salaire}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                    <div  className="controls"> 
                      
                  
                        <Controls.Button
                            type="submit"
                            text="Submit" 
                            onClick={generatePassword}/>
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
               
                
            </Grid>
        </Form>
    )
}
