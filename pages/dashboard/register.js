import {React,useState} from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from '../../components/Navbar';
import lightTheme from '../../styles/theme/lightTheme';
import { Grid } from '@mui/material';
import SideBar from '../../components/SideBar';
//import { useSession, signIn, signOut } from "next-auth/react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useSession } from 'next-auth/react';
import Router from "next/router";




const useStyles = makeStyles((theme)=>({
right:{
[lightTheme.breakpoints.down('sm')]:{
    display:'none',
  }
  },

  box:{
    paddingTop:lightTheme.spacing(10)},
   

}));

export default function App() {
    // {session.user.email}
  const { data: session } = useSession()
console.log(session)
const  email =session.user.email;

  const [firstnames,useFirstName] = useState();
  const [lastnames,useLastName] = useState();
  const [companyName,useCompanyName] = useState();
  const [physicaladdress,usePhysicalAddress] = useState();
  const[phonenumber,usePhoneNumber] = useState();
  const [krapin,useKraPin] = useState();
  const [idNumber,useIdNumber] = useState();
  const [iraLicense,useIraLicense] =useState();
  const [referall,useReferall] = useState();
  const [passwords,usePassword] = useState();
  const [passwordConfirm,useConfirm] =useState();
  
  const classes = useStyles();



  async function submitHandler(e) {
    
    e.preventDefault()
    try {
      const res = await fetch('/api/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        firstnames,lastnames,email,companyName,physicaladdress,phonenumber,krapin,idNumber,iraLicense,referall,passwords,passwordConfirm
        }),
      })
      //console.log(res.body)
    //   setSubmitting(false)
   
      const json = await res.json()
      if (!res.ok) throw Error(json.message)
      Router.push('/')
    } catch (e) {
      throw Error(e.message)
    }
  }

  
  return(
    <>
    <Navbar/>
    <Grid container>

      <Grid item sm={2} xs={2}>
        <SideBar/>
      </Grid>
      <Grid item sm={7} xs={10}>


        <Box className ={classes.box} style={{marginLeft:30}} component="form"  onSubmit={submitHandler}  noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(e)=>useFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={(e)=>useLastName(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                 
                  name="Company Name"
                  required
                  fullWidth
                  id="CompanyName"
                  label="Company Name"
                  autoFocus
                  onChange={(e)=>useCompanyName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="physicaladdress"
                  label="Physical Address"
                  name="address"
                  onChange={(e)=>usePhysicalAddress(e.target.value)}
                
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                
                  name="Phone-number"
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  autoFocus
                  onChange={(e)=>usePhoneNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="krapin"
                  label="KRA PIN"
                  name="kra"
                  onChange={(e)=>useKraPin(e.target.value)}
                 
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                 
                  name="id-number"
                  required
                  fullWidth
                  id="id-number"
                  label="Id Number"
                  autoFocus
                  onChange={(e)=>useIdNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="ira-licesnse"
                  label="IRA License"
                  name="ira-license"
                  onChange={(e)=>useIraLicense(e.target.value)}
                
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="code"
                  label="Referall Code"
                 
                  id="code"
                  onChange={(e)=>useReferall(e.target.value)}
               
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e)=>usePassword(e.target.value)}
                
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="passwordconf"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  onChange={(e)=>useConfirm(e.target.value)}
                
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            
          </Box>
       
      
      </Grid>
      <Grid item sm={3}  className={classes.right}>
       
      </Grid>

    </Grid>

    </>
  )
}
// return (
//   <>
//     Not signed in <br />
//     <button onClick={() => signIn()}>Sign in</button>
//   </>
// )





// export async function getStaticProps(context){

//     try {
//         const results = await excuteQuery({
//             query:"SELECT * from itbl_product"
            

//         });

//         let products = JSON.parse(JSON.stringify(results));
    
//         const vehicles = await excuteQuery({
//             query:"SELECT * FROM `itbl_coverage`"
//            });
       
//            let vclass = JSON.parse(JSON.stringify(vehicles));
    
         
      

//         return {props:{products,vclass}};

        
//     } catch (e) {

//         return console.log(e.message);
        
//     }
// }






















