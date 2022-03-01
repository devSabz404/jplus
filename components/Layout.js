import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from './Navbar';
import lightTheme from '../styles/theme/lightTheme';
import { Grid } from '@mui/material';
import SideBar from './SideBar';







const useStyles = makeStyles((theme)=>({
right:{
[lightTheme.breakpoints.down('sm')]:{
    display:'none',
  }
  },

}));

export default function Layout(props) {
  const classes =useStyles()
  
  



  return(
    <>
    <Navbar/>
     
    
    <Grid container>

      <Grid item sm={2} xs={2}>
        <SideBar/>
      </Grid>
      <Grid item sm={7} xs={10}>
      
      {props.children}
      </Grid>
      <Grid item sm={3}  className={classes.right}>
       
      </Grid>

    </Grid>

    </>
  )


}