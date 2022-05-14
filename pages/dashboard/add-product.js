import  {React,useState} from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from '../../components/Navbar';
import lightTheme from '../../styles/theme/lightTheme';
import { Grid } from '@mui/material';
import SideBar from '../../components/SideBar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import excuteQuery from '../../lib/db';
import FormControl from '@mui/material/FormControl';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Modal from '@mui/material/Modal';
import * as cookie from 'cookie'
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useRouter } from 'next/router'
import jwtDecode from "jwt-decode";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const useStyles = makeStyles((theme)=>({
right:{
[lightTheme.breakpoints.down('sm')]:{
    display:'none',
  }
  },

  fom:{
      display:'flex',
      justifyContent:'space-between'
  },
  item: {
    paddingLeft: 3 * theme.spacing.unit,
},
group: {
    fontWeight: theme.typography.fontWeightBold,
    
},

}));

export default function App(props) {
  const router = useRouter()

  const [openq, setOpenq] = useState(false);

const handleClick = () => {
  setOpenq(true);
};

const handleCloset = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpenq(false);
};

const action = (
  <>
   
    <IconButton
      size="small"
      aria-label="close"
      color="warning"
      onClick={handleCloset}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </>
);


const [openqz, setOpenqz] = useState(false);

const handleClickz = () => {
  setOpenqz(true);
};

const handleClosetz = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpenqz(false);
};

const actionz = (
  <>
   
    <IconButton
      size="small"
      aria-label="close"
      color="success"
      onClick={handleClosetz}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </>
);
  



const classes = useStyles();
const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const motoveh = props.motovehicle.map((item)=>item);
const motocy = props.motocycle.map((item)=>item);
const mototri = props.tricycle.map((item)=>item);
const under = props.underwrit.map((item)=>item);
const cov = props.covera.map((item)=>item);
const exclusion = props.exclud.map((item)=>item)
//const bene = props.benefit.map((item)=>item)
//console.log(props.benefit)



const [product,setProduct] = useState('BimaPlus')

const [vehicleClass,setVehicleClass] = useState('')
const [underwriter,setUnderwriter] = useState('')
const [coverage,setCoverage] = useState('')

const [clauses,setClauses] = useState('')
const [waranty,setWaranty] = useState('')
const [benefits,setBenefits] = useState('')
const [excludedVehicles,setExcludedVehicles] = useState('')
const [maxTonnage,setMaxTonnage] = useState('')
const [minTonnage,setMinTonnage] = useState('')
const [weeklyRates,setWeeklyRates] = useState('')
const [monthlyRates,setMonthlyRates] = useState('')
const [fortniteRate,setFortnite] = useState('')
const [passengers,setPassengers] = useState('')
const [annualRates,setAnnualRates] = useState('')
const [maxAge,setMaxAge] = useState('')
const [minAge,setMinAge] = useState('')
const [maxInsured,setMaxInsured] = useState('')
const [minInsured,setMinInsured] = useState('')
const [minPremium,setMinPremium] = useState('')

const [showInput, setShowInput] = useState(false);
const[months2,setMonths2] = useState()



const owner = props.owner
console.log(owner)

const submitHandler = async (e) => {
  e.preventDefault();

  const credentials = {
    vehicleClass,underwriter,coverage,
    clauses,waranty,
    excludedVehicles,maxTonnage,
    minTonnage,weeklyRates,monthlyRates,
    fortniteRate,passengers,annualRates,
    maxAge,minAge,maxInsured,
    minInsured,minPremium,owner,months2,}

  const res = await axios.post("/api/product/createproduct", credentials);
  if (res.status === 200 && res.data.message==='Alright'){
   
    handleClickz()
    setTimeout(()=>{
      router.push('/dashboard/products')
    },1000)
  }else{
    alert('Duplicate product')
    router.push('/dashboard/products')
  }
  

  
};


 








  return(
    <>
    <Navbar/>
    <Grid container>

      <Grid item sm={2} xs={2}>
        <SideBar/>
      </Grid>
      <Grid item sm={10} xs={10}>
    <form onSubmit={submitHandler}>
    <Box
        style={{marginTop:100}}
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
          
    
        <TextField id="outlined-basic" label="Product" value={product} onChange={(e) => setProduct(e.target.value)} variant="outlined" />
        <FormControl>
        <InputLabel id="demo-simple-select-helper-label">Vehicle class</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
         
          label="Vehicle class"
          value={vehicleClass} 

          onChange={(e)=> setVehicleClass(e.target.value)}
            
         
         
        >
          
          
        <MenuItem disabled className={classes.group}>1.Motorvehicle</MenuItem>
        {motoveh.map((item)=><MenuItem key={item.ID} value={item.ID}>{item.class}</MenuItem>)}

        <MenuItem disabled className={classes.group}>2.Motorcycle</MenuItem>
        {motocy.map((item)=><MenuItem key={item.ID} value={item.ID}>{item.class}</MenuItem>)}
        
        <MenuItem disabled className={classes.group}>3.Tricycle</MenuItem>
        {mototri.map((item)=><MenuItem key={item.ID} value={item.ID}>{item.class}</MenuItem>)}
        
          
         
        </Select>
        </FormControl>

        <FormControl>
        <InputLabel id="demo-simple-select-helper-label">Underwriter</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
        
          label="Vehicle class"
          value={underwriter} onChange={(e) => setUnderwriter(e.target.value)}
          
         
        >
         
         {
        under.map((item)=><MenuItem key={item.ID} value={item.Name}>{item.Name}</MenuItem>)
        }
    
        </Select>
        </FormControl>

        <FormControl >
        <InputLabel id="demo-simple-select-helper-label">Coverage</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
        
          label="Vehicle class"
          onChange={(e)=>{const covar = e.target.value;
            setCoverage(covar);
            covar==='Comprehensive'?setShowInput(true):setShowInput(false)
            //covar==='Comprehensive'?setShowInput(true):setShowInput(false);
            //covar==='Third Party And Theft'?setShowInput(true):setShowInput(false);
        }}
          
         
        >
         
         {cov.map((item)=><MenuItem key={item.ID} value={item.cover} >{item.cover}</MenuItem>)
         }
                        
    
        </Select>
        </FormControl>
       


       
    
    

     
    </Box>

    <Box
        style={{marginTop:100}}
        component="form"
        sx={{
            '& > :not(style)': { m: 0.6, width: '50ch' },
        }}
        noValidate
        autoComplete="off"
        >
      
      <TextField id="outlined-basic" label="Policy limits & Benefits"  value={benefits} onChange={(e) => setBenefits(e.target.value)} variant="outlined" />

        <TextField id="outlined-basic" label="Clauses"  value={clauses} onChange={(e) => setClauses(e.target.value)} variant="outlined" />
        <TextField id="outlined-basic" label="Conditions and Warranties" value={waranty} onChange={(e) => setWaranty(e.target.value)}  variant="outlined" />
       

     
    </Box>

    <Box
        style={{marginTop:100}}
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '20ch' },
        }}
        noValidate
        autoComplete="off"
        >
        {vehicleClass===8 || vehicleClass===7?
        <TextField id="outlined-basic" label="Maximum tonnage"  value={maxTonnage} onChange={(e) => setMaxTonnage(e.target.value)} disabled={showInput} variant="outlined" />
        :null}
         {vehicleClass===8||vehicleClass===7?
        <TextField id="outlined-basic" label="Minimum Tonnage " value={minTonnage} onChange={(e) => setMinTonnage(e.target.value)} disabled={showInput}  variant="outlined" />
        :null}
       
        {vehicleClass===17||vehicleClass===15?
        <TextField id="outlined-basic" label="Number of Passengers" value={passengers} onChange={(e) => setPassengers(e.target.value)} variant="outlined"   />
        :null}
       
  



      {coverage==='Third Party Only' && vehicleClass===6 || vehicleClass===4 ||vehicleClass===7||vehicleClass===3||vehicleClass===9 ||
       vehicleClass===16 || vehicleClass===18 || vehicleClass===20 || vehicleClass===2 || vehicleClass===1 || vehicleClass===5 || vehicleClass===3 ||vehicleClass===21?
      <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Duration Rates
          </Button>
          <Menu {...bindMenu(popupState)}>
            <TextField id="outlined-basic" label="Annual Rates"   value={annualRates} onChange={(e) => setAnnualRates(e.target.value)} variant="outlined" />
           
            <TextField id="outlined-basic" label="Monthly Rates"  value={monthlyRates} onChange={(e) => setMonthlyRates(e.target.value)}disabled={showInput}  variant="outlined" />
           
          
          </Menu>
        </>
      )}
    </PopupState>
  :
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Duration Rates
          </Button>
          <Menu {...bindMenu(popupState)}>
            <TextField id="outlined-basic" label="Annual Rates"   value={annualRates} onChange={(e) => setAnnualRates(e.target.value)} variant="outlined" />
            <TextField id="outlined-basic" label="Weekly Rates" value={weeklyRates} onChange={(e) => setWeeklyRates(e.target.value)} disabled={showInput} variant="outlined" />
            <TextField id="outlined-basic" label="Fortnite Rates"  value={fortniteRate} onChange={(e) => setFortnite(e.target.value)} disabled={showInput} variant="outlined" /><br/>
            <TextField id="outlined-basic" label="Monthly Rates"  value={monthlyRates} onChange={(e) => setMonthlyRates(e.target.value)}disabled={showInput}  variant="outlined" /><br/>
            < Button variant="contained"  color="success" style={{marginTop:40}}>Save</Button>

          
          </Menu>
        </>
      )}
    </PopupState>}
    
    

     
    </Box>

    <Box
        style={{marginTop:100}}
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '20ch' },
        }}
        noValidate
        autoComplete="off"
        >
        {coverage==='Third Party Only' && vehicleClass ===6 || vehicleClass===9? null:
        <FormControl >
        <InputLabel id="demo-simple-select-helper-label">Excluded Vehicles</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
         
          label="Excluded Vehicles"
           onChange={(e) => setExcludedVehicles(e.target.value)}
           disabled={!showInput} 
         
        >
          
          
        <MenuItem disabled className={classes.group}>Vehicles</MenuItem>
        {exclusion.map((item)=><MenuItem key={item.vehicle_id} value={item.class}>{item.vehicle_model}</MenuItem>)}
       </Select>
       </FormControl>}
       {coverage==='Third Party Only' && vehicleClass ===6 ||coverage==='Third Party Only' && vehicleClass ===7
       ||coverage==='Third Party Only' && vehicleClass ===4 ||coverage==='Third Party Only' && vehicleClass ===3 || vehicleClass===9|| vehicleClass===15
       || vehicleClass===16 || vehicleClass===17 || vehicleClass===18 || vehicleClass===20 || vehicleClass===2 || vehicleClass===1 || vehicleClass===5 ||vehicleClass===21?  null:

        <TextField id="outlined-basic" label="Minimum Premium" value={minPremium} onChange={(e) => setMinPremium(e.target.value)} variant="outlined" />}
        {coverage==='Third Party Only' && vehicleClass ===6 || vehicleClass===9 || vehicleClass===15 || vehicleClass===16 || vehicleClass===17 || vehicleClass===18
        || vehicleClass===20 || vehicleClass===2 || vehicleClass===1 || vehicleClass===5 || vehicleClass===4 ||vehicleClass===3 ||vehicleClass===21 ? null:
        <TextField id="outlined-basic" label="Maximum Age"  value={maxAge} onChange={(e) => setMaxAge(e.target.value)}  variant="outlined" />}
        {coverage==='Third Party Only' && vehicleClass ===6 || vehicleClass===9 || vehicleClass===15 || vehicleClass===16 || vehicleClass===17 
        || vehicleClass===18 || vehicleClass===20 || vehicleClass===2  || vehicleClass===1 || vehicleClass===5 || vehicleClass===4 ||vehicleClass===3 ||vehicleClass===21 ? null:
        <TextField id="outlined-basic" label="Minimum Age" value={minAge} onChange={(e) => setMinAge(e.target.value)} variant="outlined" />}
        <TextField id="outlined-basic" label="Maximum insured" value={maxInsured} onChange={(e) => setMaxInsured(e.target.value)}
         disabled={ coverage==='Third Party Only' && vehicleClass !='Commercial Own Goods' && vehicleClass !='General Cartage Lorries,Trucks and Tankers' ?true:false } 
         variant="outlined" />
        <TextField id="outlined-basic" label="Minimum Insured"  value={minInsured} onChange={(e) => setMinInsured(e.target.value)}
         disabled={ coverage==='Third Party Only' && vehicleClass !='Commercial Own Goods' && vehicleClass !='General Cartage Lorries,Trucks and Tankers' ?true:false } 
         variant="outlined" />
    
    

     
    </Box>
    <Stack spacing={2} direction="row">
    <br/>
      < Button variant="contained" type="submit" color="success" style={{marginTop:40}}>Submit</Button>
  <Link href="/products"><Button variant="outlined" color ="secondary" style={{marginTop:40}}  passHref>Back</Button></Link>
    </Stack>
      </form>
      </Grid>
      <Snackbar
        open={openq}
        autoHideDuration={6000}
        onClose={handleCloset}
        message="Duplicate Product"
        action={action}
     
      />
        <Snackbar
        open={openqz}
        autoHideDuration={6000}
        onClose={handleClosetz}
        message="Product created successfully"
        action={actionz}
        
      />
     
    </Grid>

    </>
  )
}


function parseCookies(req){
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}


export async function getServerSideProps(ctx) {
  
  const { req, res } = ctx;
  const { cookies } = req;
  const userData = jwtDecode(cookies.OursiteJWT);
  let owner = userData.owner;
  
  
    try {
      const motoresults = await excuteQuery({
       query:"SELECT * FROM `itbl_vehicleclass` where type = 'MOTORCYCLE'"
      });
  
      let motocycle = JSON.parse(JSON.stringify(motoresults));

      const triresults = await excuteQuery({
        query:"SELECT * FROM `itbl_vehicleclass` where type = 'TRICYCLE'"
       });
   
       let tricycle = JSON.parse(JSON.stringify(triresults));

       const vehicleresults = await excuteQuery({
        query:"SELECT * FROM `itbl_vehicleclass` where type = 'MOTORVEHICLE'"
       });
   
       let motovehicle = JSON.parse(JSON.stringify(vehicleresults));

       const underwriters = await excuteQuery({
        query:"SELECT * FROM `itbl_underwriters`"
       });
   
       let underwrit = JSON.parse(JSON.stringify(underwriters));

       const cover = await excuteQuery({
        query:"SELECT * FROM `itbl_coverage`"
       });
   
       let covera = JSON.parse(JSON.stringify(cover));

       
       const excl = await excuteQuery({
         query:"SELECT * FROM `tbl_excluded_vehicles`"
       });
       let exclud = JSON.parse(JSON.stringify(excl))

       const benefits = await excuteQuery({
        query:"SELECT * FROM `itbl_benefits`"
      });
      let benefit = JSON.parse(JSON.stringify(benefits))

     
      return {
        props: {motovehicle,motocycle,tricycle,underwrit,covera,exclud,benefit,cookies,owner}, // will be passed to our  page component as props
      };
    } catch (e) {
      
      
      return console.log(e.message);
    }
  }
  

