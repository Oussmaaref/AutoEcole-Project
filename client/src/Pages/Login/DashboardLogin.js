import React , {useState } from "react";
import Color from "color";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import back from './bck.jpg'
import Logo from './Logo.png'
import { makeStyles } from "@material-ui/core";
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    
    test:{
      border:1,
      borderRadius:25,
      "&:hover": {
        transform: "scale(1.05)"
      }     
    },
    
  }));
const DashboardLogin = () =>{ 
    const classes=useStyles();
    const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
 const [message,setMessage]=useState("")
let thehistory=useHistory()

  

const login = (e) => {

   
  axios({
    method: "POST",
    data: {
      fullName:fullName,
      password: password,
    },
    withCredentials: true,
    url: "http://localhost:5000/auth/admin/login",
  }).then((response) => {
    if (response.status===200) {
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("userdata",response.data.user)
      
    
    thehistory.push("/main/admin/Home")
      console.log(response)
     
     
    }
    else {
      console.log(response)
      
    }
  }).catch(()=>{setMessage("Please verify your password and username")
  console.log(message)
 } );
  axios({
    method: "POST",
    data: {
      fullName:fullName,
      password: password,
    },
    withCredentials: true,
    url: "http://localhost:5000/auth/candidate/login",
  }).then((response) => {
    if (response.status===200) {
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("userdata",response.data.user)
      
      
      
    thehistory.push("/main/candidate/Feedback")
      console.log(response)
      
     
    }
    else {
      console.log(response)
      

    }
  }).catch(()=>{setMessage("Please verify your password and username")
  console.log(message)
 } );
  axios({
    method: "POST",
    data: {
      fullName:fullName,
      password: password,
    },
    withCredentials: true,
    url: "http://localhost:5000/auth/employee/login",
  }).then((response) => {
    if (response.status===200) {
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("userdata",response.data.user)
      
      
      
    thehistory.push("/main/employee/Home")
      console.log(response)
     
     
    }
    else  {
      console.log(response)
      
    }
  }).catch(()=>{setMessage("Please verify your password and username")
  console.log(message)
 } );
}
  
        return(
  <Grid className={"DL01-root"} container>
    <Hidden smUp>
      <div className={"DL01-mobileCover"}>
        <div className={"DL01-cover"} />
      </div>
    </Hidden>
    <Hidden only={"xs"}>
      <Grid
        container
        alignItems={"center"}
        item
        sm={6}
        md={7}
        className={"DL01-GridItem -banner"}
      >
        <div className={"DL01-cover"} />
        <div className={"DL01-content"}>
          <Typography variant={"h3"} className={"DL01-brand"} gutterBottom>
            About Us
          </Typography>
          <Typography>Feel the power inside you.</Typography>
          <br />
          <Typography className={"DL01-description"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </div>
      </Grid>
    </Hidden>
    <Grid
      container
      justify={"center"}
      alignItems={"center"}
      direction={"column"}
      item
      xs={12}
      sm={6}
      md={5}
      className={"DL01-GridItem -form"}
    >
      <form className={"DL01-form"}>
        <img
          alt={"logo"}
          className={"DL01-logo"}
          src={
            Logo
          }
        />
        <Typography color={"textSecondary"}>
          We provide the best tool
        </Typography>
        <TextField
          fullWidth
          label={"Username"}
          margin={"normal"}
          variant="filled"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value)
            setMessage("");
          }}
        />
        <TextField
          fullWidth
          type="password"
          label={"Password"}
          margin={"normal"}
          variant="filled"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setMessage("")
          }}
        />
          <Typography style={{color:'red'}} >
          {message}
        </Typography>
        <FormControl margin={"normal"} fullWidth>
      
          <Button className={classes.test}fullWidth variant={"contained"}   onClick={login} color={"primary"}>
            Log in
          </Button>
        </FormControl>
    
      </form>
    </Grid>
  </Grid>
)};

DashboardLogin.getTheme = ({ palette, breakpoints }) => {
  const gradient = `linear-gradient(49deg, ${Color(palette.primary.main).darken(0.7).toString()} 0%,
  ${Color(palette.primary.main).rotate(30).lighten(0.5).saturate(0.7).toString()} 100%)`;
  const cover =back;
  return {
    MuiGrid: {
      container: {
        "&.DL01-root": {
          // when you use it, change to 100vh
          // "100vh" is not perfect for all screen ex. iPhone X

          // 2 solutions
          // https://github.com/ulrichformann/react-div-100vh
          // https://github.com/mvasin/react-div-100vh
          minHeight: 700, // todo change to "100vh" or use react-div-100vh
          [breakpoints.only("xs")]: {
            position: "relative",
            minHeight: 566
          },
          "& .DL01-mobileCover": {
            position: "absolute",
            zIndex: 0,
            height: 120,
            top: 0,
            width: "100%",
            background: `url(${cover})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          },
          "& .DL01-cover": {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: gradient,
            opacity: 0.7,
            
          }
        }
      },
      item: {
        "&.DL01-GridItem.-banner": {
          textAlign: "left",
          background: `url(${cover})`,
          backgroundSize: "cover",
          position: "relative",
          height: 713,
          "& *": {
            color: palette.common.white
          },
          "& .DL01-content": {
            position: "relative",
            zIndex: 1,
            paddingLeft: 40
          },
          "& .DL01-brand": {
            fontWeight: 900,
            letterSpacing: 1
          },
          "& .DL01-description": {
            color: "rgba(255, 255, 255, 0.45)",
            maxWidth: 240,
            fontWeight: 200
          }
        },
        "&.DL01-GridItem.-form": {
          textAlign: "center",
          [breakpoints.only("xs")]: {
            background: "#f5f5f5"
          },
          "& .DL01-form": {
            width: 343,
            [breakpoints.only("xs")]: {
              marginTop: 36,
              background: "#ffffff",
              padding: "20px 20px 32px",
              boxShadow: "0 2px 10px 0 rgba(0,0,0,0.12)",
              borderRadius: 4,
              zIndex: 1
            }
          },
          "& .DL01-logo": {
            width: 100,
            height: 100,
            objectFit: "cover",
            [breakpoints.only("xs")]: {
              width: 60,
              height: 60
            }
          },
          "& .DL01-signUp": {
            marginTop: 16
          }
        }
      }
    },
    MuiFilledInput: {
      root: {
        backgroundColor: "#f3f3f3",
        "&$focused": {
          backgroundColor: "#f0f0f0"
        }
      }
    },
    MuiButton: {
      root: {
        paddingLeft: 16,
        paddingRight: 16,
        background: gradient
      },
      label: {
        color: "#fff",
        textTransform: "none",
        fontSize: 15,
        fontWeight: 700
      },
      contained: {
        minHeight: 30,
        boxShadow: "none",
        "&$focusVisible": {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        "&$disabled": {
          boxShadow: "none"
        }
      }
    }
  };
};



export default DashboardLogin;
