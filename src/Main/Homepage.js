import DivulgationSite from './Divulgation/DivulgationSite'
import Menu from "./components/Menu";
import {ThemeProvider, CSSReset, Text, ColorModeProvider, Flex} from "@chakra-ui/core"
import Footer from "./components/Footer";
import mono from "./theme";
import theme from "@chakra-ui/core/dist/theme"
import Navbar from "./components/Navbar";
import Skeleton from "./Main/MainSite";
import DrawerExample from "./components/Menu";
import React from 'react';
import DrawerExa from "./components/Menu";
import NewsCard from "./Main/MainComponents/Card";
import SimpleGrid from "@chakra-ui/core/dist/SimpleGrid";
import Grid from "@chakra-ui/core/dist/Grid";
import Box from "@chakra-ui/core/dist/Box";
import DivulgationCard from "./Divulgation/DivulgationSiteComponents/DivulgationCard";

function LandingPage() {
    return (
        <div>
            <ThemeProvider theme={mono}>
                <Navbar/>
                <DrawerExa/>
                
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
                <SimpleGrid columns={2} spacing={10}>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
                    <Box bg="tomato" height="80px"></Box>
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
            </ThemeProvider>
        </div>
    );

};


export default LandingPage;

