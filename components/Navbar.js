import { makeStyles} from "@mui/styles";
import {AppBar,Toolbar,Typography,alpha, Button} from "@mui/material";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Link from 'next/link';
import lightTheme from "../styles/theme/lightTheme";
import { useState } from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Router from "next/router";

import axios from 'axios';



const useStyles = makeStyles((props)=>({
  toolbar:{
    backgroundColor: "#012f62",
    display:"flex",
    justifyContent:"space-between"
  },
  search:{
    display:"flex",
    alignItems:"center",
    backgroundColor: alpha(lightTheme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(lightTheme.palette.common.white, 0.25),},
    borderRadius:lightTheme.shape.borderRadius,
    width:"50%",
    [lightTheme.breakpoints.down('sm')]:{
      display:(props)=>(props.open ? "flex":"none"),
      width: "70%"
    }

  },
  logoLg:{
    display:"none",
    [lightTheme.breakpoints.up('sm')]:{
      display:"block",
    }
  },
  logoSm:{
    display:"block",
    [lightTheme.breakpoints.up('sm')]:{
      display:"none",
    }
  },

  input:{
    color:"white",
    marginLeft:lightTheme.spacing(2),
    
  },
  icons:{
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex"),
  },
  badge:{
    marginRight:lightTheme.spacing(2)
  },
  
  searchButton: {
    marginRight: lightTheme.spacing(2),
    [lightTheme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  cancel:{
    [lightTheme.breakpoints.up('sm')]:{
      display:"none",
  },
    [lightTheme.breakpoints.down('sm')]:{
      display:(props)=>(props.open ? "flex":"none"),
  }
}
  
}));

export default function Navbar() {

  const handleLogOut = async () => {
    
    const user = await axios.get("/api/auth/logout");

    if(user.status===200) Router.push('/login')

 
  };

  const [open,setOpen]=useState(false)
  const classes = useStyles({open})
  return (
    <>
   <div>
 
       <AppBar position="fixed">
           <Toolbar className={classes.toolbar}>
             <Typography className={classes.logoLg} variant="h6">Bima Plus</Typography>
             <Typography className={classes.logoSm} variant="h6">Bima</Typography>

             

           

             <div className={classes.icons}>
              <Badge badgeContent={4} color="secondary" className={classes.badge} >
              <MailIcon color="action" />
              </Badge>
              <Badge badgeContent={2} color="secondary"  className={classes.badge}>
                <NotificationsIcon color="action" />
              </Badge>
              <Button  onClick={() => handleLogOut()}>
              Logout
              </Button>
             

            </div>
            
           </Toolbar>
       </AppBar>
  

   </div>
     
     
    </>
   
  )
}
