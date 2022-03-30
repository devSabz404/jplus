import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from '../../components/Navbar';
import lightTheme from '../../styles/theme/lightTheme';
import { Grid } from '@mui/material';
import SideBar from '../../components/SideBar';
import { DataGrid, GridExpandMoreIcon } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Fab } from '@mui/material';
import excuteQuery from '../../lib/db';
import Link from 'next/link'

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router'
import axios from 'axios';
import Stack from '@mui/material/Stack';



 function CircularIndeterminate() {
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}


const useStyles = makeStyles((theme)=>({
right:{
[lightTheme.breakpoints.down('sm')]:{
    display:'none',
  }
  },
  fab: {
    position: "fixed",
    bottom: 50,
    right: 50,
  },

}));


export default function App({products,cookies}) {
  const router = useRouter()
  const userData = jwtDecode(cookies.OursiteJWT)
  const id = userData.owner
  console.log(id)


    const columns = [
        { field: 'id', headerName: '#', width: 70 },
        { field: 'underwriter', headerName: 'underwriter', width: 230 },
        { field: 'coverage', headerName: 'Coverage', width: 130 },
      
       
        { field: 'owner', headerName: 'Owned By', width: 130 },
        { field: 'date', headerName: 'Date modified', width: 130 },
        { field: 'edit', headerName: 'Edit', width: 70,
        
        renderCell: (params) => {
          
          
          return <Button > <Link href={{pathname:'edit/[id]',query:{id:params.row.id}}}>edit</Link> </Button>
          },
       }, 

        { field: 'delete', headerName: 'Delete', width: 70,

        renderCell: (params) => {
          const onClick = async (e) =>  {
            e.stopPropagation(); // don't select this row after clicking
            const info = params.row.id;
            const data = {info}
            

            const res = await axios.post("/api/product/delete", data);
            if (res.status == 200){
              router.push('/dashboard/products')
                }else{
                  alert(Alleady)

                }

 
           
    
         
           
          };
    
          return <Button onClick={onClick}><DeleteIcon/></Button>;
        },
        
      
      },
        
      ];
      
     
      const rows = products.map((item)=>(
          
        { id: item.product_id, underwriter: item.underwriter, coverage: item.coverage,owner:item.owner,date:item.time, }))
   


  const classes = useStyles();
  return(
    <>
    <Navbar/>
    <Grid container>
      

      <Grid item sm={2} xs={2}>
        <SideBar/>
      </Grid>
      <Grid item sm={9} xs={10}>
      
      <div style={{ height: 700, width: '100%', marginTop:80,}}>
      <Stack spacing={2} direction="row" style={{padding:5}} >
      <Link href="add-product"><Button variant="contained">Add product</Button></Link>

   
   </Stack>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
      </Grid>
      <Grid item sm={1}  className={classes.right}>
       
      </Grid>
    

    </Grid>

  

    </>
  )
}




  export async function getServerSideProps(ctx){

    const {req,res} = ctx
    const {cookies} = req
  
    const userData = jwtDecode(cookies.OursiteJWT)
    const id = userData.owner
    const contact =userData.contactPerson

  
  
   

    try {
        const results = await excuteQuery({
            query:"SELECT * from itbl_product WHERE owner =? ",
            values:[id]
            
            

        });

        let products = JSON.parse(JSON.stringify(results));
    
        const vehicles = await excuteQuery({
            query:"SELECT * FROM `itbl_coverage`"
           });
       
           let vclass = JSON.parse(JSON.stringify(vehicles));
    
         
      

        return {props:{products,vclass,cookies}};

        
    } catch (e) {

        return console.log(e.message);
        
    }
}


