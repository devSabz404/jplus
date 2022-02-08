import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import lightTheme from "../styles/theme/lightTheme";
import  DashCard  from "./DashCard";

const useStyles = makeStyles((theme)=>({

  container:{
    paddingTop:lightTheme.spacing(10)

  }
  
}));

export default function Feed() {
  const classes = useStyles()
  return (
    <>
   <Container className={classes.container}>
    <DashCard/>
   
   </Container>
     
     
    </>
   
  )
}
