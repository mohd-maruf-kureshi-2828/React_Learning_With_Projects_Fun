import React from "react";
import Hearder from './components/Hearder'
import Footer from './components/Footer'
import { Outlet } from "react-router-dom";


function Layout(){
    return(
        <>
        <Hearder />
        <Outlet />
        <Footer />
        </>
    )
}
export default Layout