import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from '../../components/Navbar';
import lightTheme from '../../styles/theme/lightTheme';
import { Grid } from '@mui/material';
import SideBar from '../../components/SideBar';
import Feed from '../../components/Feed';
import axios from 'axios';





const useStyles = makeStyles((theme)=>({
right:{
[lightTheme.breakpoints.down('sm')]:{
    display:'none',
  }
  },

}));

export default function App() {
  const classes =useStyles()
  const [data, setData] = useState()
  

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios('../api/auth/userObject')
      // ...
      setData(response.data)
    }
    fetchData();
    
  },[] ); // Or [] if effect doesn't need props or state

  console.log(data.tkn.username)

  return(
    <>
    <Navbar/>
    <Grid container>

      <Grid item sm={2} xs={2}>
        <SideBar/>
      </Grid>
      <Grid item sm={7} xs={10}>
      <Feed/>
      </Grid>
      <Grid item sm={3}  className={classes.right}>
       
      </Grid>

    </Grid>

    </>
  )


}

























// import { Button } from "@mui/material";
// import { makeStyles} from "@mui/styles";
// import Navbar from "../components/Navbar";
// import theme from "../components/theme"
// import { ThemeProvider } from '@mui/material/styles';


// const useStyles = makeStyles((theme)=>({
//   button:{
//   backgroundColor:theme.Mybutton,
//   }
  
// }));

// export default function Home() {
//   const classes = useStyles()
//   return (
//     <>
//     <ThemeProvider theme={theme}>

  

//     <Button className={classes.button}>Delete</Button>

//     </ThemeProvider>
    
//    </>
   
//   )
// }
