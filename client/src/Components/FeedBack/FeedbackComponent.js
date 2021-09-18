import React from 'react'
import { Paper,makeStyles } from '@material-ui/core'
import FeedbackForm from './FeedbackForm'
const useStyles=makeStyles( theme =>({
    root:{
        display:'flex'
    },

paper:{
    height:'500px',
    width:'30%',
    marginLeft:'170px',
    marginTop:'50px',
    boxShadow: '0 8px 16px 0 #7a7a7a',
       borderRadius:10,
}
}))
export default function FeedbackComponent() {
    const classes=useStyles()
    return (
        <div className={classes.root}>
        <Paper className={classes.paper}>
           <FeedbackForm/>
        </Paper>
        <Paper className={classes.paper}>
          contact us
        </Paper>
        </div>
    )
}
