import {Text} from "@chakra-ui/core"
import React from 'react';
import SimpleGrid from "@chakra-ui/core/dist/SimpleGrid";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import NewsCard from "./MainComponents/Card";
import Footer from "../components/Footer";


function Main() {
    return (
        <div>
            <Navbar/>
            <Menu/>
            <SimpleGrid color="white" bg="grey" height="90vh">
                <h2>Acerca del CIMB</h2>
                <Text width="30%">
                    El Laboratorio de CIMB (Computing Intelligence, Mechatronics and Biodesign) es una iniciativa
                    generada por un grupo de profesores y alumnos del Tecnológico de Monterrey en Campus Ciudad de
                    México en el año 2009.
                </Text>
            </SimpleGrid>

            <SimpleGrid colums={2} spacing={2}>

                <NewsCard href="https://www.google.com" thumbnail="https://i.imgur.com/rLFk5nd.jpg"
                          title="Canberra is no more" date="July 20 2020"/>
                <NewsCard href="https://www.google.com" thumbnail="https://i.imgur.com/rLFk5nd.jpg"
                          title="Canberra is no more" date="July 20 2020"/>
                <NewsCard href="https://www.google.com" thumbnail="https://i.imgur.com/rLFk5nd.jpg"
                          title="Canberra is no more" date="July 20 2020"/>
                <NewsCard href="https://www.google.com" thumbnail="https://i.imgur.com/rLFk5nd.jpg"
                          title="Canberra is no more" date="July 20 2020"/>
            </SimpleGrid>
            <SimpleGrid color="white" bg="grey" height="90vh">
                <h2>Acerca del CIMB</h2>
                <Text width="30%">
                    El Laboratorio de CIMB (Computing Intelligence, Mechatronics and Biodesign) es una iniciativa
                    generada por un grupo de profesores y alumnos del Tecnológico de Monterrey en Campus Ciudad de
                    México en el año 2009.
                </Text>
            </SimpleGrid>
            <br/>
            <br/>
            <br/>
            <SimpleGrid bg="grey" height="90vh">
                <h2 color="white">Quienes Somos</h2>
                <Text color="white" width="30%">
                    Nuestro grupo busca generar proyectos para la mejora de la calidad de vida de la sociedad
                    mexicana y una mejora de la Experiencia del Usuario (UX) ante el uso de nuevas tecnologías. Él
                    laboratorio trabaja a través de la generación de proyectos de Posgrados y Pregrado sobre las
                    distintas líneas de investigación de enfoque.
                </Text>
            </SimpleGrid>
            {/*<BlogSlider />*/}
            <Footer/>
        </div>
    );

}


export default Main;

