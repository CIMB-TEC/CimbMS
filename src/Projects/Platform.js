import React from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectInformation from "./components/ProjectInformation"


let title = "Plataforma para Vehículo Inteligente";
let description = 'El proyecto busca desarrollar una plataforma para un vehículo todo terreno, completamente eléctrico e instrumentado.';

let PlatformPage = () => {
    return (
        <>
            <Header/>
            <ProjectInformation
                project={title}
                title={title}
                description={description}
            />
            <Footer/>
        </>
    )
}

export default PlatformPage;
