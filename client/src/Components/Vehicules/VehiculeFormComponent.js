import React, { useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../Controls/Controls";
import { useForm, Form } from '../Function/UseForm';

import axios from 'axios'




const initialFValues = {
    id: 0,
    marque: '',
    matricule: '' ,
    visite_technique:new Date(),
    visite_vignette:new Date(),
    visite_assurence:new Date(),
    visite_reparation:new Date(),
  
    payee:'',
    apayer:''
}

export default function VehiculeForm( props ) {
    
    const { addOrEdit, recordForEdit,add,edit } = props
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('matricule' in fieldValues)
            temp.matricule = fieldValues.matricule ? "" : "This field is required."
        if ('marque' in fieldValues)
            temp.marque= fieldValues.marque ? "" : "This field is required."
        /*if ('matricule' in fieldValues)
            temp.mobile = fieldValues.matricule.length == 8 ? "" : " matricule is not valid."*/
        /*if ('marqueId' in fieldValues)
            temp.marqueId = fieldValues.marqueId.length != 0 ? "" : "This field is required." */
        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
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
           
            axios.post('http://localhost:5000/vehicule',{
                'marque':values.marque,
                'matricule':values.matricule,
                'visite_technique':values.visite_technique,
                'visite_vignette':values.visite_vignette,
                'visite_assurence':values.visite_assurence,
                'visite_reparation':values.visite_reparation,
}).then(response => {
 console.log("données enregistées dans la base de données ")
}).catch(error => {

console.log(error)
}
 
)

         if (edit && !add) 
               { 
                   axios.put(`http://localhost:5000/vehicule/${values._id}`,{
                     'marque':values.marque,
                    'matricule':values.matricule,
                    'visite_technique':values.visite_technique,
                    'visite_vignette':values.visite_vignette,
                    'visite_assurence':values.visite_assurence,
                    'visite_reparation':values.visite_reparation,
                    
                   }).then(response => {
                     console.log("element modifier et  enregistées dans la base de données ")
                 }).catch(error => {
                 
                 console.log(error)
               })}
         addOrEdit( resetForm);
       
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    
                    
                    <Controls.Input
                        name="marque"
                        label="Marque"
                        value={values.marque}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Matricule"
                        name="matricule"
                        value={values.matricule}
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
                        name="apayer"
                        value={values.apayer}
                        onChange={handleInputChange}
                    />
                   

                </Grid>
                <Grid item xs={6}>
                     
                    <Controls.DatePicker
                        name="visite_technique"
                        label="Date de Visite Technique "
                        value={values.visite_technique}
                        onChange={handleInputChange}
                    />
                    
                    <Controls.DatePicker
                        name="visite_vignette"
                        label="Date de Visite Vignette  "
                        value={values.visite_vignette}
                        onChange={handleInputChange}
                    />
                    <Controls.DatePicker
                        name="visite_assurence"
                        label="Date de Visite Assurence"
                        value={values.visite_assurence}
                        onChange={handleInputChange}
                    />
                    <Controls.DatePicker
                        name="visite_reparation"
                        label="Date de Visite Reparation"
                        value={values.visite_reparation}
                        onChange={handleInputChange}
                    />
                    
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
};
