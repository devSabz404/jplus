import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from '../../../components/Navbar';
import lightTheme from '../../../styles/theme/lightTheme';
import { Grid } from '@mui/material';
import SideBar from '../../../components/SideBar';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import excuteQuery from '../../../lib/db';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';





const useStyles = makeStyles((theme)=>({
right:{
[lightTheme.breakpoints.down('sm')]:{
    display:'none',
  }
  },

}));

export default function App({product}) {
  const id = product[0].product_id
  
  const classes =useStyles()
 
  const [clauses,setClauses] = useState()
  const [conditions,setConditions] = useState()
  const [benefits,setBenefits] = useState()
  const [maxtonn,setMaxTon] = useState()
  const [mintonn,setMinTon] = useState()
  const [pass,setPass] = useState()
  const [rates,setRates] = useState()
  const [excluded,setExcluded] = useState()
  const [minPremium,setMinPremium] = useState()
  const [maxage,setMaxAge] = useState()
  const [minage,setMinAge] = useState()
  const [maxinsured,setMaxInsured] = useState()
  const [minInsured,setMinInsured] = useState()

  const handleSubmit =async (e) =>{
    e.preventDefault()

    const credentials = {id,clauses,conditions,benefits,maxtonn,mintonn,pass,rates,excluded,minPremium,maxage,minage,maxinsured,minInsured}
    const res = await axios.post("/api/product/updateproduct", credentials);
    if(res.status===200) alert('Done')
    alert('Failed')
  }



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
      onSubmit={handleSubmit}
    >
     
      
      <div>
       
       
        <TextField
          label="Clauses"
          id="standard-size-normal"
          defaultValue={product[0].clauses}
          
          variant="standard"
          onChange={(e)=>setClauses(e.target.value)}
        />
        <TextField
          label="Conditions and Warranties"
          id="standard-size-normal"
          defaultValue={product[0].conditionsandwaranties}
          
          variant="standard"
          onChange={(e)=>setConditions(e.target.value)}
        />
       
      </div>

       
      <div>
     
       
        <TextField
          label="Maximum Tonnage"
          id="standard-size-normal"
          defaultValue={product[0].maxtonnage}
          
          variant="standard"
          onChange={(e)=>setMaxTon(e.target.value)}
        />
        <TextField
          label="Minimum Tonnage"
          id="standard-size-normal"
          defaultValue={product[0].mintonnage}
          
          variant="standard"
          onChange={(e)=>setMinTon(e.target.value)}
        />
       
      </div>


      <div>
      <TextField
          label="Number of passengers"
          id="standard-size-normal"
          defaultValue={product[0].passengers}
         
          variant="standard"
          onChange={(e)=>setPass(e.target.value)}
        />
        <TextField
          label="Optional Benefits"
          id="standard-size-normal"
          defaultValue={product[0].optionalname}
          
          variant="standard"
          setBenefits
        />
       
        <TextField
          label="Duration rates"
          id="standard-size-normal"
          defaultValue={product[0].optionalrate}
          
          variant="standard"
          onChange={(e)=>setRates(e.target.value)}
        />
      </div>

      <div>
        <TextField
          label="Excluded vehicles"
          id="standard-size-normal"
          defaultValue={product[0].excludedvehicles}
         
          variant="standard"
          onChange={(e)=>setExcluded(e.target.value)}
        />
        <TextField
          label="Minimum Premium"
          id="standard-size-normal"
          defaultValue={product[0].minimumpremium}
          
          variant="standard"
          onChange={(e)=>setMinPremium(e.target.value)}
        />
        <TextField
          label="Maximum Age"
          id="standard-size-normal"
          defaultValue={product[0].maxage}
          
          variant="standard"
          onChange={(e)=>setMaxAge(e.target.value)}
        />
      </div>

      <div> 
        <TextField
          label="Minimum Age"
          id="standard-size-normal"
          defaultValue={product[0].minage}
          
          variant="standard"
          onChange={(e)=>setMinAge(e.target.value)}
        />
         <TextField
          label="Maximum Insured"
          id="standard-size-normal"
          defaultValue={product[0].maxsum}
                    variant="standard"
          onChange={(e)=>setMaxInsured(e.target.value)}
        />
        <TextField
          label="Minimum Insured"
          id="standard-size-normal"
          defaultValue={product[0].minisum}
          
          variant="standard"
          onChange={(e)=>setMinInsured(e.target.value)}
        />
      </div>
      <Stack direction="row" spacing={2}>
      <Button type='submit' variant="contained">Save</Button>
    
    </Stack>
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

     const product = JSON.parse(JSON.stringify(products))

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












































