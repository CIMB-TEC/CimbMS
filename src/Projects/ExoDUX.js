import React from 'react';
import Timeline from './components/Timeline';
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectInformation from "./components/ProjectInformation"
let es_strings = require("./strings/admas.html.json");
let en_strings = require("./strings/admas-eng.html.json");

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
            description="En México el crecimiento de la población de adultos mayores se ve más crítica con los años, ya que se espera que para el 2050
             esta población sea del 55% de la población total, por lo que tendremos 1.22 adultos mayores por cada joven. Además, sabemos que la segunda causa de muertes accidentales en el mundo son las caídas, y sabemos que la primera causa de caídas en adultos mayores es la debilidad muscular. Esto en conjunto con el hecho de que la población de adultos mayores está en constante crecimiento, hace del tema de debilidad muscular una gran oportunidad para trabajar."
            />
            <Timeline items={strings} />
            <Footer/>
        </>
    )
}

export default EXODUXPage;
