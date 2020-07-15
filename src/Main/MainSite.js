import React from "react";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

let Skeleton = (content) =>{
    return(
        <div>
            <Navbar />
            <Menu />
            <Footer/>
        </div>
        )
}

export default Skeleton;
