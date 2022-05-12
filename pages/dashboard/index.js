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
      <Feed/>
     
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















