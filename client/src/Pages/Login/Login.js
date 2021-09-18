/*import React, {useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './Login.css'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import backgrd from './bck.jpg'
const USERS =[
  {
    username:"amin",
    password:"test",
    role:"admin"
  },
  {
    username:"ahmed",
    password:"test",
    role:"candidate"
  },
  {
    username:"abb",
    password:"test",
    role:"employer"
  }
 
]

const useStyles = makeStyles({
    root: {
      minWidth: 100,
      marginLeft:40 ,
      marginTop :10,
      marginBottom :10,
      marginRight:40 ,
      alignItems:'center'  
    },
   title: {
    fontSize: 14,
    marginLeft:95 ,
    marginTop :10,
  },  
  btn:{
    marginBottom :40,
    marginTop :10,
    marginLeft:90,
    marginRight:120,
    borderRadius:45
  } ,
  start: {
    minWidth: 100,
    marginLeft:820 ,
    marginTop :300,
    marginBottom :10,
    marginRight:50 ,
  },
  });

export default function Login( ) {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedinuser, setLoginState] = useState("")
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
 function validateForm(){
 setLoginState(USERS.find(el => el.username === username && el.password===password))
}; 
  return (
    <div   style={{
      backgroundImage: `url(${backgrd})`,
      height: 713,
     textAlign: "center"
    }}>
      <Button className={classes.start} variant="outlined" size="lagre" color="primary" onClick={handleClickOpen}>
       Getting Started
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.title} id="form-dialog-title">Sign In</DialogTitle>
        <DialogContent className={classes.root} >
            
        <TextField
          id="outlined-textarea"
          label="Username"
          placeholder="username"
          multiline
          variant="outlined"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        </DialogContent>
        <DialogContent className={classes.root} >
        
        <TextField
          id="outlined-textarea"
          label="Password"
          placeholder="password"
          multiline 
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        </DialogContent>
         <DialogActions>
          <Link to="/main">
            <Button className={classes.btn} onClick={handleClose,validateForm} variant="contained" color="primary" >
            Login
          </Button></Link>
          </DialogActions>
      </Dialog>
    </div>
  );
}*/
import React from "react";


import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import DashboardLogin from "./DashboardLogin";



const muiBaseTheme = createMuiTheme();


export default function Login() {
  return (
    
      <MuiThemeProvider
        theme={createMuiTheme({
          typography: {
            useNextVariants: true
          },
          overrides: DashboardLogin.getTheme(muiBaseTheme)
        })}
      >
        <DashboardLogin/>
      </MuiThemeProvider>
    
  );
}