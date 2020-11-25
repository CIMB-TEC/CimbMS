import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectInformation from "./components/ProjectInformation";


let AcousticAg = () => {
    return (
        <>
            <Navbar/>
            <ProjectInformation
                project="Agricultura Acústica"
                title="Agricultura Acústica"
                description="Potenciar el desarrollo de plantas por medio de espacios controlados."
            />
            <Footer/>
        </>
    )
}

export default AcousticAg;
