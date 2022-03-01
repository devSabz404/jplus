import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from '../../components/Navbar';
import lightTheme from '../../styles/theme/lightTheme';
import { Grid } from '@mui/material';
import SideBar from '../../components/SideBar';
import Button from '@mui/material/Button';

import axios from 'axios';

import Layout from '../../components/Layout'


import Box from '@mui/material/Box';

import Input from '@mui/material/Input';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import jwtDecode from 'jwt-decode';
import { useFormik } from 'formik';


// const validate = values => {
//   const errors = {};
//   if (!values.address) {
//     errors.address = 'Required';
//   } 

//   if (!values.referall) {
//     errors.referall = 'Required';
//   } 
//   if (!values.idnumber) {
//     errors.idnumber = 'Required';
//   } 

//   if (!values.phone) {
//     errors.phone = 'Required';
//   } 
//   if (!values.Kra) {
//     errors.kra = 'Required';
//   }
//   if (!values.companyName) {
//     errors.companyName = 'Required';
//   } 
 



  

//   if (!values.Ira) {
//     errors.Ira = 'Required';
//   } else if (/[A-Z]{3}[/][0-9]{2}[/][0-9]{5}[/][0-9]{4}/.test(values.email)) {
//     errors.email = 'Invalid licesnse';
//   }

//   return errors;
// };







const useStyles = makeStyles((theme)=>({
right:{
[lightTheme.breakpoints.down('sm')]:{
    display:'none',
  }
  },

}));

export default function Continue({cookies}) {

  const formik = useFormik({
    initialValues: {
      companyName: '',
      address: '',
      phone: '',
      referall:'',
      Ira:'',
      Kra:'',
      idnumber:"",
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  
  const userData = jwtDecode(cookies.OursiteJWT)
  const id = userData.id
  const classes =useStyles()






  return(
    <>
    <Navbar/>
     
    
    <Grid container>

      <Grid item sm={2} xs={2}>
        <SideBar/>
      </Grid>
      <Grid item sm={7} xs={10}>

      <form onSubmit={formik.handleSubmit} style={{marginTop:50}}sx={{ display: 'flex', flexWrap: 'wrap'  }}>
          <h1>Continue Registration</h1>
      <div>
      
        <TextField
          label="Company name"
         
          sx={{ m: 1, width: '25ch' }}
          id="companyName"
          name="companyName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.companyName}
         
          
        />
          <TextField
          label="Phone number"
          
          sx={{ m: 1, width: '25ch' }}
          id="phone"
          name="phone"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.phone}
         
          
        />

        <TextField
          label="Referall number"
         
          sx={{ m: 1, width: '25ch' }}
          id="referall"
          name="referall"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.referall}
        
          
        />
        
        
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Physical address</InputLabel>
          <Input

            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
           
         
           
        
          
            label="Amount"
          />
        </FormControl>
      </div>
      <div>

      <TextField
          label="KRA Pin"
        
          sx={{ m: 1, width: '25ch' }}
          id="Kra"
          name="Kra"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Kra}
          
        />
          <TextField
          label="Identity number"
        
          sx={{ m: 1, width: '25ch' }}
          id="idnumber"
          name="idnumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.idnumber}
   
          
        />

        <TextField
          label="IRA license"
          
          sx={{ m: 1, width: '25ch' }}
          id="Ira"
          name="Ira"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Ira}
        
          
        />
        {formik.errors.Ira ? <div>{formik.errors.Ira}</div> : null}
        
       
  
      </div>
      <Button type='submit' variant="contained">Contained</Button>
      <form/>
     
    </form>
      
      </Grid>
      <Grid item sm={3}  className={classes.right}>
       
      </Grid>

    </Grid>

    </>
  )


}


export async function getServerSideProps(ctx){

  const {req,res} = ctx
  const {cookies} = req

    return { props: { cookies} }
}






