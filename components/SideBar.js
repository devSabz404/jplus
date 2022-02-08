import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import HomeIcon from '@mui/icons-material/Home';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import lightTheme from "../styles/theme/lightTheme";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import Link from 'next/link';



const useStyles = makeStyles((theme)=>({

  container:{
    backgroundColor: "#012f62",
    height:'100vh',
    position:'sticky',
    top:0,
    paddingTop:lightTheme.spacing(10),
   
    color:'white'

  },
  item:{
    display:'flex',
    alignItems:'center',
    marginBottom:lightTheme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },

  },

  text:{
    fontWeight:'500',
    [theme.breakpoints.down("sm")]: {
      marginBottom: lightTheme.spacing(3),
      display:'none',
    },
  }
  ,
  icon:{
    marginRight:lightTheme.spacing(1)
  }
  
}));

export default function leftbar() {
  const classes = useStyles()
  return (
    <>

    <Container  className={classes.container}>
        <div className={classes.item}>
         
          <HomeIcon className={classes.icon}/>
          <Link href="/dashboard">
          <Typography className={classes.text}>Home</Typography>
          </Link>

        </div>

        <div className={classes.item}>
          <QueueMusicIcon className={classes.icon}/>
          <Link href="/dashboard/products">
          <Typography className={classes.text}>Products</Typography>
          </Link>

        </div>

        <div className={classes.item}>
          <BookmarksIcon className={classes.icon}/>
          <Typography className={classes.text}>Policies</Typography>

        </div>

        <div className={classes.item}>
          <WhatshotIcon className={classes.icon}/>
          <Typography className={classes.text}>Claims</Typography>

        </div>

        <div className={classes.item}>
          <NewspaperIcon className={classes.icon}/>
          <Typography className={classes.text}>Quotes</Typography>

        </div>

        <div className={classes.item}>
          <PowerSettingsNewIcon className={classes.icon}/>
          <Typography className={classes.text}>Clients</Typography>

        </div>
    </Container>
   
     
     
    </>
   
  )
}
