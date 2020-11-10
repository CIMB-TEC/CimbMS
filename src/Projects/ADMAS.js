import React from 'react';
import Timeline from './components/Timeline';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {ThemeProvider} from "@chakra-ui/core";

let es_strings = require("./strings/admas.html.json");
let en_strings = require("./strings/admas-eng.html.json");

let description = 'Advanced Driver Monitoring for Assistance System (ADMAS) es un sistema de asistencia al conductor que lo ayude basándose en su estado psico-fisiológico.';

//SPACE FOR i18n here
let strings = es_strings;

let ADMASpage = () => {
    return (
        // TODO REMOVE THEME PROV
        <>
            <ThemeProvider>
                <Navbar/>
                <Timeline items={strings} title="ADMAS" description={description}/>
                <Footer/>
            </ThemeProvider>
        </>
    )
}


export default ADMASpage;
