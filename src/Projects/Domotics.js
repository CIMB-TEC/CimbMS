import React from 'react';
import Header from "../components/Header";
import ProjectInformation from "./components/ProjectInformation"
import Timeline from "./components/Timeline";
import Footer from "../components/Footer";

let es_strings = require("./strings/domo.html.json");
let en_strings = require("./strings/domo-eng.html.json");
let title = "Domótica Emocional"

let description = '<++>';

//SPACE FOR i18n here
let strings = es_strings;

let DomoticPage = () => {
    return (
        <>
            <Header/>
            <ProjectInformation
                project="Domotica"
                title="Domótica Emocional"
                description="El proyecto busca la fundamentación y desarrollo de un espacio habitable en donde se pueda modular el estado anímico del usuario a partir del control de las variables ambientales y de la inserción de estímulos preprogramados positivos."
            />
            <Timeline items={strings} title=" Línea del Tiempo"/>
            <Footer/>
        </>
    )
}


export default DomoticPage;
