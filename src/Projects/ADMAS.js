import React from 'react';
import Timeline from './components/Timeline';
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectInformation from "./components/ProjectInformation"

let es_strings = require("./strings/admas.html.json");
let en_strings = require("./strings/admas-eng.html.json");

let description = 'Advanced Driver Monitoring for Assistance System (ADMAS) es un sistema de asistencia al conductor que lo ayude basándose en su estado psico-fisiológico.';

//SPACE FOR i18n here
let strings = es_strings;

let ADMASpage = () => {
    return (
        <>

            <Header/>
            <ProjectInformation
                project="Admas"
                title="ADMAS"
                description={description}
            />
            <Timeline items={strings} title="Línea del Tiempo" />
            <Footer/>
        </>
    )
}


export default ADMASpage;
