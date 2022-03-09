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
import EditIcon from '@mui/icons-material/Edit';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router'


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
    bottom: 20,
    right: 20,
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
          const onClick = (e) => {
            e.stopPropagation(); // don't select this row after clicking
            
           
    
            return alert('delete');
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

    <div>
    <Link href="add-product">
      <Tooltip title="AddProduct">
      <Fab color="primary" className={classes.fab}>
        <IconButton>
          <AddCircleIcon />
          
        </IconButton>
     
      </Fab>
      </Tooltip>
    </Link>
      
    </div>

    </>
  )
}




  export async function getServerSideProps(ctx){

    const {req,res} = ctx
    const {cookies} = req
  
    const userData = jwtDecode(cookies.OursiteJWT)
    const id = userData.owner

  
  
   

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


