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


export default function App({products}) {
    console.log("hey.....",products)



    const columns = [
        { field: 'id', headerName: '#', width: 70 },
        { field: 'underwriter', headerName: 'underwriter', width: 230 },
        { field: 'coverage', headerName: 'Coverage', width: 130 },
        {
          field: 'riskcovered',
          headerName: 'Risk Covered',
          type: 'number',
          width: 90,
        },
        {
          field: 'productname',
          headerName: 'Product Name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          
        },
        { field: 'owner', headerName: 'Owned By', width: 130 },
        { field: 'date', headerName: 'Date modified', width: 130 },
        { field: 'action', headerName: 'Action', width: 130 },
      ];
      
     
      const rows = products.map((item)=>(
          
        { id: item.product_id, underwriter: item.underwriter, coverage: item.coverage, riskcoverd:'Full', productname:item.category,owner:item.owner,date:item.time,action:'delete' }))
   


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



export async function getStaticProps(context){

    try {
        const results = await excuteQuery({
            query:"SELECT * from itbl_product"
            

        });

        let products = JSON.parse(JSON.stringify(results));
    
        const vehicles = await excuteQuery({
            query:"SELECT * FROM `itbl_coverage`"
           });
       
           let vclass = JSON.parse(JSON.stringify(vehicles));
    
         
      

        return {props:{products,vclass}};

        
    } catch (e) {

        return console.log(e.message);
        
    }
}


