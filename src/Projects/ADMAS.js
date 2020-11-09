import React from 'react';
import Timeline from './components/Timeline';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {ThemeProvider} from "@chakra-ui/core";

let strings = {
    title: "ADMAS",
    description: 'Advanced Driver Monitoring for Assistance System (ADMAS) es un sistema de asistencia al conductor que lo ayude basándose en su estado psico-fisiológico.',
    milestones: [
        {
            date: 'Enero 2016',
            images: [
                "/img/proyectos/ADMAS/ene16/ADAS-slider-1.jpg",
                "../img/proyectos/ADMAS/ene16/ADAS-slider-2.jpg",
                "../img/proyectos/ADMAS/ene16/ADAS-slider-3.jpg",
                "../img/proyectos/ADMAS/ene16/ADAS-slider-4.jpg"
            ],
            title: 'Proyecto ADAS',
            poster: "img/proyectos/ADMAS/ene16/ADAS-poster.jpg",
            desc1: "Obtener datos dinámicos de un vehiculo y variables fisiológicas de conductores jóvenes para analizar sus reacciones ante la aplicación de estímulos producios por ADAS pasivo que permita conocer las reacciones ante tales advertencias.",
            desc2: " Instalar dispositivos para la adquisición de los datos del automóvil para su futuro análisis, asi como para el para el monitoreo del entorno con el fin de realizar pruebas preliminares."
        },
        {
            date: 'Agosto 2016',
            title: "Tren Motriz",
            images: [
                "img/proyectos/ADMAS/ago16/tren-slider-1.jpg",
                "img/proyectos/ADMAS/ago16/tren-slider-2.jpg"
            ],
            poster: "img/proyectos/ADMAS/ago16/tren-poster.jpg",
            desc1: "Obtener los distintos modos de manejo del vehículo mediante la reconfiguración de los vlaores de la computadora (ECU) del vehículo."

        }
        , {
            date: "Agosto 2016",
            title: "Analisis CAN",
            images: [
                "img/proyectos/ADMAS/ago16/can-slider-1.jpg",
                "img/proyectos/ADMAS/ago16/can-slider-2.jpg",
                "img/proyectos/ADMAS/ago16/can-slider-3.jpg"
            ],
            poster: "../img/proyectos/ADMAS/ago16/can-poster.jpg",
            desc1: "Obtener datos de la computadora central del vehículo para analizarlos más tarde. Posteriormente enviar de regreso la información y controlar ciertas funciones",
            desc2: " <ul> <li>Instalar el software requerido para la recopilación de datos correcta</li> <li>Adquerir los IDs para el bus CAN usando Mobileye</li> <li>Analizar los datos obtenidos</li> <li>Control de la computadora central del Ford Focus 2013</li> </ul> ",
        },
        {
            date: "Agosto 2016",
            images: [
                "img/proyectos/ADMAS/ago16/algoritmo-slider-1.jpg",
                "img/proyectos/ADMAS/ago16/algoritmo-slider-3.jpg",
                "img/proyectos/ADMAS/ago16/algoritmo-slider-4.jpg"
            ],
            title: 'Algoritmo Simulador',
            poster: "../img/proyectos/ADMAS/ago16/algoritmo-poster.jpg",
            desc1: "Desarrollar un simulador de manejo con el fin de adquirir datos del tipo de conducción para un análisis por medio de algoritmo de aprendizaje con el fin de imitar el manejo del conductor.  ",
            desc2: "<p>Instrumentar un vehículo controlado por RF para realizar un simulador de manejo hibrido y poder adquirir los datos de conducción por análisis.</p><p>Desarollar un algoritmo de parendizaje con ayuda de redes neuronales que nos permita analizar los datos adquirirdos del entorno y del conductor al momento de manejar, con la finalidad de identificar las características del conductor</p>",
        },
        {
            date: "Enero 2019",
            images: [
                "img/proyectos/ADMAS/ene19/cam-slider-1.png",
                "img/proyectos/ADMAS / ene19 / cam - slider - 2.png",
            ],
            title: "Simulador 3.0",
            poster: "img/proyectos/ADMAS/ene19/cam-poster.pdf",
            desc1: "Se avanzo en el desarrollo de un simulador de manejo, migrando de la plataforma Unity hacia Unreal Engine, con la finalidad de utilizar herramientas para vehiculos autonomos open source como las que presenta el proyecto CARLA. Dicho trabajo se realizo con apoyo de alumnos de LAD e ITC durante su estancia de investigacion como parte de su Servicio Social.",
        },

        {
            date: "Enero 2019",
            images: ["img/proyectos/ADMAS/ene19/c2c-slider-1.png"],
            title: "Simulacion C2X",
            desc1: "Implementar un entorno de simulación de comunicación V2V aplicado a un escenario real en la Ciudad de México, integrando herramientas de software de comunicación inalámbrica a través de dos tecnologías diferentes, para poder obtener la",
            poster: "img/proyectos/ADMAS/ene19/c2c-poster.pdf",
            desc2: '<ul><li>Modelación en SUMO y simulación en 3D en “Webots”de una ruta vehicular desde campus CCM a campus CSF</li><li>Tener un software capaz de simular comunicaciones vehiculares tanto con el protocolo 802.11p como con tecnología celular sobre vehículos en SUMO y Omnet++ y contar con una versión exportable de los simuladores de tráfico y red en una máquina virtual.</li><li>Generar comparativas entre protocolos con respecto a capa 1 y 2 del modelo de OSI sobre el escenario planteado.</li></ul>',
            extra: '[" < iframe src = "https://www.youtube.com/embed/3J5w7qXFCf4" allow = "autoplay; encrypted-media" allowfullscreen = "" frameborder = "0" > < /iframe>", "<iframe src=" https://www.youtube.com/embed/eKGfnuoXSJs" allow="autoplay; encrypted-media" allowfullscreen="" frameborder="0"></iframe>", "<iframe src=" https://www.youtube.com/embed/qUlvr9aazQU" allow=" encrypted-media" allowfullscreen="" frameborder="0"></iframe>"]',
        }

    ],

}

let ADMASpage = () => {
    return (
        // TODO REMOVE THEME PROV
        <>
            <ThemeProvider>
                <Navbar/>

                <Timeline items={strings.milestones} title={strings.title} description={strings.description}/>
                <Footer/>
            </ThemeProvider>
        </>
    )
}


export default ADMASpage;
