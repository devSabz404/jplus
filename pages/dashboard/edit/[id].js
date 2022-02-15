import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from '../../components/Navbar';
import lightTheme from '../../styles/theme/lightTheme';
import { Grid } from '@mui/material';
import SideBar from '../../components/SideBar';
import Feed from '../../components/Feed';
import axios from 'axios';
import * as cookie from 'cookie'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';





const useStyles = makeStyles((theme)=>({
right:{
[lightTheme.breakpoints.down('sm')]:{
    display:'none',
  }
  },

}));

export default function App({product}) {
  
  const classes =useStyles()


  return(
    <>
    <Navbar/>
    <Grid container>

      <Grid item sm={2} xs={2}>
        <SideBar/>
      </Grid>
      <Grid item sm={7} xs={10}>

      <Box
      style={{marginTop:100, marginLeft:100}}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      
      <div>
       
        <TextField
          label="Product Description"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
        <TextField
          label="Clauses"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
        <TextField
          label="Conditions and Warranties"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
       
      </div>

       
      <div>
      <TextField
          label="policy limits and benefits"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
       
        <TextField
          label="Maximum Tonnage"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
        <TextField
          label="Minimum Tonnage"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
       
      </div>

       
      <div>
      <TextField
          label="Number of passengers"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
        <TextField
          label="Optional Benefits"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
       
        <TextField
          label="Duration rates"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
      </div>

      <div>
        <TextField
          label="Excluded vehicles"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
        <TextField
          label="Minimum Premium"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
        <TextField
          label="Maximum Age"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
      </div>

      <div> 
        <TextField
          label="Minimum Age"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
         <TextField
          label="Maximum Insured"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
        <TextField
          label="Minimum Insured"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
        />
      </div>
    </Box>

      </Grid>
      <Grid item sm={3}  className={classes.right}>
       
      </Grid>

    </Grid>

    </>
  )


}


export async function getStaticProps(context) {

    const id = context.params.id;

    
    let products = await excuteQuery({
        query:"SELECT * FROM itbl_product WHERE product_id = ?",
        values:[id]
    })

    const product = JSON.stringify(products)

    return { props: { product }}
}

export async function getStaticPaths() {
    let products = await excuteQuery({
        query:"SELECT * FROM itbl_product",
       
    })

    const paths = products.map((product) => ({
        params: { id: product.product_id.toString() },
      }))
      return { paths, fallback: false }

    
   }












































