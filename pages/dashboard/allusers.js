import  {React, useState} from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../components/Title'
import Layout from '../../components/Layout';
import { makeStyles } from '@mui/styles';
import excuteQuery from '../../lib/db';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from 'axios';




const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 60%)',
      marginTop:100,
      marginLeft:150,

     
    },
  });


export default function ActivateUsers({userInfo}) {
 const pple = userInfo;
 
  
  const [peopleInfo, setPeopleInfo] = useState([]);


 async function  handleSubmit(e){
   e.preventDefault()
  
   const peopl = {...peopleInfo}

   const res = await axios.post('../api/user/activate',peopl)
   if(res.status===200) alert('Data in ')
   alert('Fail')
  
 }
  
    const classes = useStyles();
  return (
    <>
        <Layout>
    <div className={classes.root}>
      <Title>Recent Users</Title>
      <form onSubmit={handleSubmit}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>IRA License</TableCell>
            <TableCell>Role</TableCell>
            <TableCell align="right">Activate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pple.map(({firstname,lastname,iralicense,role,user_id}) => (
            <TableRow key={user_id}>
              <TableCell>{firstname}</TableCell>
              <TableCell>{lastname}</TableCell>
              <TableCell>{iralicense}</TableCell>
              <TableCell>{role}</TableCell>
              <TableCell value={user_id} align="right">
                <Checkbox value={peopleInfo}

onChange={(e) => {
  // add to list
  if (e.target.checked) {
    setPeopleInfo([
      ...peopleInfo,
      {
        id: user_id,
        active:1
      },
    ]);
  } else {
   setPeopleInfo([...peopleInfo,
        {
          active:0
        }
      ])
}
}}
/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <br/>
      <Grid container columns={{ xs: 4, md: 6 }}>
      <Grid item xs={2} >
     
      <Button type ='submit' color="primary" variant="contained">Activate</Button>
     
      </Grid>
      <Grid item xs={2} >
      <Link color="primary" href="#"  sx={{ mt: 3 }}>
      <Button variant="contained">All users</Button>
      </Link>
      </Grid>
      </Grid>
      </form>
      
      
      </div>
      </Layout>
    </>
  );
}

export async function getServerSideProps(){

  let userData = await excuteQuery({
    query:'SELECT * FROM `tbl_user` WHERE `is_active` IS NULL',
   
 
    
  })

  const userInfo = JSON.parse(JSON.stringify(userData))

  return {props:{userInfo}}


}