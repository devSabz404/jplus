import Head from 'next/head';
import Navbar from './Navbar';
//import Product from './Sectionproduct';
import SideBar from './SideBar';


const Layout = (props) => (
  <div>
    <Head>
      <title>Dasboard</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
    </Head>
    <Navbar/>
    <SideBar/>
    
  
    
   
    {/* <div className="">

    <div className="container justify-content-center">
      {props.children}
    </div>


    </div> */}
    
  </div>
);

export default Layout;