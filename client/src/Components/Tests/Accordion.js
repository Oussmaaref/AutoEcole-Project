import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '183%',
      marginBottom:20,
      
    },
    rounded:{
      border:1,
      borderRadius:theme.shape.borderRadius= 15,     
      background:"#a1bbff"

    },
    heading: {
      fontSize: theme.typography.pxToRem(30),
      fontWeight: theme.typography.fontWeightRegular,
      color:"#05092e",
      
    },
  }));
 
 
   

export default function AccordionEx({text,correctanswer}) {
    
    const classes = useStyles();
    return (
        <div className={classes.root}>
             <Accordion className={classes.rounded} style={{ boxShadow: "0 8px 16px 0 #7a7a7a" ,}}>
        <AccordionSummary
          expandIcon={<DoubleArrowRoundedIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"

        >
          <Typography className={classes.heading}>{correctanswer}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           {text}
          </Typography>
        </AccordionDetails>
      </Accordion>
        </div>
    )
}