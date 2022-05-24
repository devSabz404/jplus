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
import { useRouter } from 'next/router';






const useStyles = makeStyles((theme)=>({
right:{
[lightTheme.breakpoints.down('sm')]:{
    display:'none',
  }
  },

}));

export default function App({product}) {
  const router = useRouter()
    console.log(product)

    const [email,setEmail] = useState();
    const [ID,setID] = useState(product[0].ID);
    const [name,setName] = useState(product[0].Name);
    const [desc,setDesc] = useState(product[0].description);
    const [memberid,setid] = useState(product[0].imember_id);
    const [path,setPath] = useState(product[0].path);
    const [paybill,setPay] = useState(product[0].paybill);
    const [paymode,setMode] = useState(product[0].paymode);

    const info = {ID,email,name,desc,memberid,path,paybill,paymode}

    async function handleSubmit(e){
      e.preventDefault();
      //console.log(info)
      const res = await axios.post('../../api/product/updateunderwriter',info);
      if(res.status===200){

        //router.push('/')
        console.log('its okay')

      }

    }

 
  
  const classes =useStyles()
 
  



  return(
    <>
    <Navbar/>
    <Grid container>

      <Grid item sm={2} xs={2}>
        <SideBar/>
      </Grid>
      <Grid item sm={7} xs={10}>
    <div style={{marginTop:100,marginLeft:200}}>
       
      <Box 
      sx={{
        p:3,
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField 
  
      id="fullWidth" 
      value={product[0].Name}
      placeholder={product[0].Name}
      disabled={true}
      />
     
    </Box>
   
  
 
   
   
    <Box component="form" onSubmit={handleSubmit}
      sx={{
        p:3,
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField 
      fullWidth 
       id="fullWidth"
     
       placeholder={product[0].EMAIL_ADDRESS}
       onChange={(e)=>setEmail(e.target.value)}
     
        />
         <Button type="submit">Submit</Button>
    </Box>

           
    
           
    </div>
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
        query:"SELECT * FROM itbl_underwriters WHERE ID = ?",
        values:[id]
    });

     const product = JSON.parse(JSON.stringify(products));

   
    return { props: { product}}
}

export async function getStaticPaths() {
    let underwriters = await excuteQuery({
        query:"SELECT * FROM `itbl_underwriters`",
       
    })

    const paths = underwriters.map((item) => ({
        params: { id: item.ID.toString() },
      }))
      return { paths, fallback: false }

    

    
   }












































