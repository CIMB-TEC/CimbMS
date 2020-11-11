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
                description="El proyecto Advanced Driver Monitoring for Assistance System (ADMAS) consta en la creación de un nuevo sistema de asistencia al conductor que asista de forma eficiente a un conducto estado psico-fisiológico.
                El sistema pretende convertir un coche con nivel de autonomía 2, a un nivel 3 o 4, es decir convertir un automóvil común, en uno semi-autónomo. La semi-autonomía se logrará mediante sensores y algoritmos de inteligencia artificial que permitan tomar el control del vehículo cuando el conductor no se encuentre en condiciones de conducción segura.
                Para determinar el estado psico-fisiológico, el vehículo tendrá instalados sensores biométricos que permitirán medir variables fisiológicas para detectar y determinar el estado de salud, y las emociones presentadas por el conductor durante la tarea.
                La fusión de sensores, permitirá determinar si el vehículo deberá inhibir las acciones del conductor en caso que éstas no sean adecuadas para un manejo seguro, o cuando existan estados alterados mentales o de salud."
                 />
                <Timeline items={strings} title="ADMAS" description={description}/>
                <Footer/>
        </>
    )
}


export default ADMASpage;
