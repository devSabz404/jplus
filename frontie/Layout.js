import React, { Children, lazy } from "react";
import Footer from "./Footer";
import Nav from "./Navbar";
const Layout = ({children}) =>{

    return(
        <>
        <Nav/>
        {children}
        <Footer/>

        </>
    )
}

export default Layout