import React from 'react';
import Timeline from './components/Timeline';
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProjectInformation from "./components/ProjectInformation"

let es_strings = require("./strings/domo.html.json");
let en_strings = require("./strings/domo-eng.html.json");
let title = "Domótica Emocional"

let description = '<++>';

//SPACE FOR i18n here
let strings = es_strings;

let DomoticPage= () => {
    return (
        <>
                <Header/>
                <ProjectInformation
                    project="Domotica"
                 title="Domótica Emocional"
                 description="El proyecto busca la fundamentación y desarrollo de un espacio habitable en donde se pueda modular el estado anímico del usuario a partir del control de las variables ambientales y de la inserción de estímulos preprogramados positivos.
El sistema emplea un sistema de detección de expresiones faciales, un equipo de electroencefalografía (detección de señales eléctricas del cerebro) y un equipo de respuesta galvánica de la piel (resistividad eléctrica de la piel en las manos) para poder establecer el estado fisiológico y emocional (anímico) del sujeto.
A partir del estado del sujeto, se establecen las variaciones en el ambiente (temperatura, humedad, intensidad luminosa y tonalidad de la luz) pertinentes para llevar al sujeto a un estado deseado.
Un ejemplo de esto sería la búsqueda de la transición de un estado de enojo o tristeza a un estado neutral o idealmente de alegría. Entre las potenciales implementaciones del sistema, se encuentra la implementación en oficinas, donde el sistema al mejorar el estado anímico del sujeto impacta directamente sobre su calidad de vida y por ende en su salud. Al mejorar ambos factores se puede en consecuencia mejorar la productividad de los usuarios.
Entre las áreas que se han integrado para el desarrollo del proyecto se encuentran el de la escuela de ingeniería lo que es mecatrónica, telecomunicaciones y sistemas electrónicos, tecnologías computacionales, ingeniería industrial, biotecnología, entre otras. De la escuela de diseño, arquitectura y arte digital han participado diseño industrial y arquitectura. Para el desarrollo y fundamentación se ha acudido a las áreas de psicología, mercadotecnia y estadística.
"
                 />
                <Timeline items={strings}  />
                <Footer/>
        </>
    )
}


export default DomoticPage;
