import React from 'react';
import Timeline from './components/Timeline';
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectInformation from "./components/ProjectInformation"

let es_strings = require("./strings/icarus.html.json");
let en_strings = require("./strings/icarus-eng.html.json");

let title = "ExoDUX"
let description = 'Advanced Driver Monitoring for Assistance System (ADMAS) es un sistema de asistencia al conductor que lo ayude basándose en su estado psico-fisiológico.';

//SPACE FOR i18n here
let strings = es_strings;

let EXODUXPage = () => {
    return (
        <>
            <Header/>
            <ProjectInformation
                project="Exodux"
                title="ExoDux"
                description=" Potenciar el movimiento residual en los músculos inferiores por medio de un exoesqueleto, aumentando la estabilidad y agilidad en adultos mayores, al realizar actividades básicas como levantarse de una silla y sentarse."
            />
            <Timeline items={strings} title="Línea del Tiempo"/>
            <Footer/>
        </>
    )
}

export default EXODUXPage;
