import * as React from 'react';
import { makeStyles } from '@mui/styles';
import Navbar from '../../components/Navbar';
import lightTheme from '../../styles/theme/lightTheme';
import { Grid } from '@mui/material';
import SideBar from '../../components/SideBar';
import Feed from '../../components/Feed';





const useStyles = makeStyles((theme)=>({
right:{
[lightTheme.breakpoints.down('sm')]:{
    display:'none',
  }
  },

}));

export default function App() {
 
  
  const classes = useStyles();


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
