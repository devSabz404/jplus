import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from '../../components/Navbar';
import lightTheme from '../../styles/theme/lightTheme';
import { Grid } from '@mui/material';
import SideBar from '../../components/SideBar';
import Feed from '../../components/Feed';
import axios from 'axios';
import * as cookie from 'cookie'
import Layout from '../../components/Layout'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';

import Cloud from '@mui/icons-material/Cloud';
import WorkIcon from '@mui/icons-material/Work';
import DraftsIcon from '@mui/icons-material/Drafts';





const useStyles = makeStyles((theme)=>({
right:{
[lightTheme.breakpoints.down('sm')]:{
    display:'none',
  }
  },

}));

export default function App({newcookie}) {
  const classes =useStyles()
  const [data, setData] = useState()
  

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios('../api/auth/userObject')
      // ...
      setData(response.data)
    }
    fetchData();
    
  },[] ); // Or [] if effect sn't need props or state



 const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};
const tkn =parseJwt(newcookie[0])


  return(
    <>
    <Navbar/>
     
    
    <Grid container>

      <Grid item sm={2} xs={2}>
        <SideBar/>
      </Grid>
      <Grid item sm={7} xs={10}>
    <div style={{marginTop:100,marginLeft:350}}>
      <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
          <WorkIcon />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
          
        </MenuItem>
       
        <MenuItem>
          <ListItemIcon>
          <DraftsIcon />
          </ListItemIcon>
          <Link href={'./change-email'}><ListItemText>Edit Underwriters</ListItemText></Link>
        
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
    </div>
     
      </Grid>
      <Grid item sm={3}  className={classes.right}>
       
      </Grid>

    </Grid>

    </>
  )


}

function parseCookies(req){
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}

export async function getServerSideProps({ req} ) {
  const cookies = parseCookies(req);
   const newcookie = Object.values(cookies)
  
  
  return { props:{newcookie}
}
}















