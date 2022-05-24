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
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';





const useStyles = makeStyles((theme)=>({
right:{
[lightTheme.breakpoints.down('sm')]:{
    display:'none',
  }
  },

}));

export default function App({product,optionalB}) {
  const id = product[0].product_id

 
  
  const classes =useStyles()
  const [vclass,setVclass]=useState(product[0].vehicleclass);
  const [prodID,setID]=useState(product[0].product_id);
  const [underwriter,setUnderwriter]=useState(product[0].underwriter);
  const [coverage,setCoverage]=useState(product[0].coverage);
  const [comprate,setComprate]=useState(product[0].compr_rate);
  const [benefitName,setBenefitName] = useState(product[0].optionalname);
  const [optprem,setOptionalPremium] =useState();
  const [optionalrate,setOptionalRate] =useState();
  const [freelimit,setFreelimit] = useState();
  const [maxtonn,setMaxTon] = useState(product[0].maxtonnage);
  const [mintonn,setMinTon] = useState(product[0].mintonnage);
  const [weeklyrates,setWRates] = useState(product[0].weeklyrates);
  const [fortrates,setFRates] = useState(product[0].fortnightrates);
  const [monthlyrates,setMRates] = useState(product[0].monthlyrates);
  const [annualrates,setARates] = useState(product[0].annualrates);
  const [excluded,setExcluded] = useState(product[0].excludedvehicles)
  const [minPremium,setMinPremium] = useState(product[0].minimumpremium)
  const [pass,setPass] = useState(product[0].passengers);
  const [maxage,setMaxAge]=useState(product[0].maxage);
  const [minage,setMinAge]=useState(product[0].minage);
  const [minInsured,setMinInsured] = useState(product[0].minsum)
  const [maxInsured,setMaxInsured] = useState(product[0].maxsum)
  const [clauses,setClauses] = useState()
  const [conditions,setConditions] = useState()
  const [benefits,setBenefits] = useState()
  



 
 


  const handleSubmit =async (e) =>{
    
const update = {prodID,vclass,underwriter,coverage,comprate,benefitName,optprem,optionalrate,freelimit,maxtonn,
  mintonn,weeklyrates,fortrates,monthlyrates,annualrates,excluded,minPremium,pass,maxage,minage,
  minInsured,maxInsured,clauses,conditions,benefits}
    e.preventDefault()

    
    // for(let i=0;i<update.length;i++){
    //   console.log(update[i])
    // }
    
    const res = await axios.post("/api/product/updateproduct", update);
    if(res.status===200) alert('Done')
  
  
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
     
          
          variant="standard"
          onChange={(e)=>setClauses(e.target.value)}
        />
        <TextField
          label="Conditions and Warranties"
          id="standard-size-normal"
      
          
          variant="standard"
          onChange={(e)=>setConditions(e.target.value)}
        />
       
      </div>

       
      <div>
     
       
        <TextField
          label="Maximum Tonnage"
          id="standard-size-normal"
        
          
          variant="standard"
          onChange={(e)=>setMaxTon(e.target.value)}
        />
        <TextField
          label="Minimum Tonnage"
          id="standard-size-normal"
        
          
          variant="standard"
          onChange={(e)=>setMinTon(e.target.value)}
        />
       
      </div>


      <div>
      <TextField
          label="Number of passengers"
          id="standard-size-normal"
        
         
          variant="standard"
          onChange={(e)=>setPass(e.target.value)}
        />
      
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Optional Benefits"
         
          onChange={(e)=>setBenefitName(e.target.value)}
        
          variant="standard"
        >
          {optionalB.map((option) => (
            <MenuItem key={option.benefit_id} value={option.benefit_id}>
              {option.benefit_name}
            </MenuItem>
          ))}
        </TextField>

         <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Duration Rates
          </Button>
          <Menu {...bindMenu(popupState)}>
            <TextField id="outlined-basic" label="Annual Rates"   onChange={(e) => setARates(e.target.value)} variant="outlined" />
            <TextField id="outlined-basic" label="Weekly Rates" onChange={(e) => setWRates(e.target.value)}  variant="outlined" />
            <TextField id="outlined-basic" label="Fortnite Rates"   onChange={(e) => setFRates(e.target.value)}  variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Monthly Rates"   onChange={(e) => setMRates(e.target.value)}  variant="outlined" /><br/>
            < Button variant="contained"  color="success" style={{marginTop:40}}>Save</Button>

          
          </Menu>
        </>
      )}
    </PopupState>

  

      
       
    
        
       </div>
         
      {
      benefitName===56|| benefitName===60|| benefitName===62|| benefitName===64|| benefitName===63|| benefitName===61?
        <TextField
          label="Optional Premium"
          id="standard-size-normal"
         
          
          variant="standard"
          onChange={(e)=>setOptionalPremium(e.target.value)}
        />:null}
        {
         benefitName===57|| benefitName===58|| benefitName===59|| benefitName===66?
  
          <TextField
          label="Optional Rates"
          id="standard-size-normal"
       
          
          variant="standard"
          onChange = {e=>setOptionalRate(e.target.value)}
          
          
          
        />:null}
        
      
       
       
      </div>
      {benefitName===58|| benefitName===66?
      <div>
        <TextField
          label="Freelimit"
          id="standard-size-normal"
         
         
          variant="standard"
         
          onChange = {e=>setFreelimit(e.target.value)}
        />
      
      </div>
      :null
      }

      <div>
        <TextField
          label="Excluded vehicles"
          id="standard-size-normal"
       
         
          variant="standard"
          onChange={(e)=>setExcluded(e.target.value)}
        />
        <TextField
          label="Minimum Premium"
          id="standard-size-normal"
   

          
          variant="standard"
          onChange={(e)=>setMinPremium(e.target.value)}
        />
        <TextField
          label="Maximum Age"
          id="standard-size-normal"
         
          
          variant="standard"
          onChange={(e)=>setMaxAge(e.target.value)}
        />
      </div>

      

      <div> 
        <TextField
          label="Minimum Age"
          id="standard-size-normal"
        
          
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
    });

     const product = JSON.parse(JSON.stringify(products));

     let benefits = await excuteQuery({
      query:"SELECT * FROM `itbl_benefits`",
     
  })
  const optionalB = JSON.parse(JSON.stringify(benefits))

    return { props: { product,optionalB }}
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












































