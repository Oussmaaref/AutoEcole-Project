import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import EmployeeRouter from './EmployeeRouter';
import Logo from '../Login/Logo.png'
import { useHistory } from 'react-router-dom';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
const drawerWidth = 240;
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: '#a1bbff'
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
    
  },
    LoginButton: {
    marginLeft:' auto',
  },
  
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
      
    }),
    background: "#05092e"
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    background: "#05092e"
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
  },
  textColor:{
    color:'white',
  },
  img:{
    width:50,
  marginRight:10,  },
}));

export default function TemplateEmployer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  
  let thehistory=useHistory()
  const logout =() =>{
  
    localStorage.removeItem("userdata");
    localStorage.removeItem("token")
    localStorage.removeItem("feedback");
    thehistory.push("/")
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <img className={classes.img}src={Logo} />
          <Typography variant="h6" noWrap>
            Auto Ecole
          </Typography>
          
             
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon style={{ color: 'white' }} />}
          </IconButton>
        </div>
        <Divider />
        <List>
          
             <ListItemLink  href="/main/employee/Home">
                <ListItemIcon><HomeOutlinedIcon style={{ color: 'white' }} /></ListItemIcon>
                <ListItemText className={classes.textColor} primary={"Home"} />
                </ListItemLink>
              
              <ListItemLink href="/main/employee/Calendar">
                <ListItemIcon><EventNoteRoundedIcon style={{ color: 'white' }} /></ListItemIcon>
                <ListItemText className={classes.textColor} primary={"Calendar"} />
                </ListItemLink>
              <ListItemLink  href="/main/employee/Candidats" >
                <ListItemIcon><PermIdentityIcon style={{ color: 'white' }} /></ListItemIcon>
                <ListItemText className={classes.textColor} primary={"Candidates"} />
              </ListItemLink> 
              <ListItemLink href="/main/employee/Vehicules"  >
                <ListItemIcon><DriveEtaOutlinedIcon style={{ color: 'white' }} /></ListItemIcon>
                <ListItemText className={classes.textColor} primary={"Vehicles"} />
              </ListItemLink>
              <ListItemLink  onClick={logout} >
                <ListItemIcon><ExitToAppOutlinedIcon style={{ color: 'white' }} /></ListItemIcon>
                <ListItemText className={classes.textColor} primary={"Log Out"} />
              </ListItemLink>
          </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        <EmployeeRouter/>
        
      </main>
    </div>
  );
}