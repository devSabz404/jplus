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
import { useRouter } from 'next/router';






const useStyles = makeStyles((theme)=>({
right:{
[lightTheme.breakpoints.down('sm')]:{
    display:'none',
  }
  },

}));

export default function Continue({cookies}) {
  const Router = useRouter()

 
      const [companyName,setComp  ] =useState()
      const [address,setAdd ] =useState()
      const [phone,setphone  ] =useState()
      const [referall,setRef ] =useState()
      const [Ira,setIra ] =useState()
      const [Kra,setKra  ] =useState()
      const [idnumber,setId ] =useState()
    
   
  

  
  const userData = jwtDecode(cookies.OursiteJWT)
  const identity = userData.id
 
  const classes =useStyles()

const withHyph = referall+'-'+idnumber
const submitHandler = async (e) => {
  e.preventDefault();

  const credentials = {companyName,address,phone,Ira,Kra,idnumber,identity}
  const credentials0 = {companyName,address,phone,withHyph,Ira,Kra,idnumber,referall,identity}
  if(!referall){
    const res = await axios.post("/api/auth/continue", credentials);
    if (res.status == 200){
      handleLogOut()
    
    
    }
  
  }else{
    const res = await axios.post("/api/auth/continue0", credentials0);
    if (res.status == 200){
      handleLogOut()
    
    }
  
  }}
  
 
  
  const handleLogOut = async () => {
    
    const user = await axios.get("/api/auth/logout");

    if(user.status===200) Router.push('/login')

 
  };





  return(
    <>
    <Navbar />
     
    
    <Grid container >

      <Grid item sm={2} xs={2}>
       
      </Grid>
      <Grid item sm={7} xs={10}>

      <form onSubmit={submitHandler} style={{marginTop:100}}sx={{ display: 'flex', flexWrap: 'wrap'  }}>
          <h1>Complete Registration</h1>
      <div>
      
        <TextField
          label="Company name"
         
          sx={{ m: 1, width: '25ch' }}
          id="companyName"
          name="companyName"
          type="text"
          onChange={(e)=>setComp(e.target.value)}
          value={companyName}
         
          
        />
          <TextField
          label="Phone number"
          
          sx={{ m: 1, width: '25ch' }}
          id="phone"
          name="phone"
          type="number"
          onChange={(e)=>setphone(e.target.value)}
          value={phone}
          
         
          
        />

        <TextField
          label="Referall number"
         
          sx={{ m: 1, width: '25ch' }}
          id="referall"
          name="referall"
          type="text"
          onChange={(e)=>setRef(e.target.value)}
          value={referall}
        
          
        />
        
        
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Physical address</InputLabel>
          <Input

            id="address"
            name="address"
            type="text"
            onChange={(e)=>setAdd(e.target.value)}
            value={address}
           
         
           
        
          
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
          onChange={(e)=>setKra(e.target.value)}
          value={Kra}
          pattern="[a-z]{0,9}"
          title="Password should be digits (0 to 9) or alphabets (a to z)."
          
        />
          <TextField
          label="Identity number"
        
          sx={{ m: 1, width: '25ch' }}
          id="idnumber"
          name="idnumber"
          type="text"
          onChange={(e)=>setId(e.target.value)}
          value={idnumber}
   
          
        />
        {referall?null:
        <TextField
          label="IRA license"
          
          sx={{ m: 1, width: '25ch' }}
          id="Ira"
          name="Ira"
          type="text"
          onChange={(e)=>setIra(e.target.value)}
         
          pattern="[A-Z]{3}[/][0-9]{2}[/][0-9]{5}[/][0-9]{4}$"
          title='Invlid License'
        
          
        />}
       
        
       
  
      </div>
      <Button type='submit' variant="contained">Submit</Button>
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






