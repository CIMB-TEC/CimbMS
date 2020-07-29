import {ThemeProvider, CSSReset, Text, ColorModeProvider, Flex} from "@chakra-ui/core"
import React from 'react';
import BlogEntry from "./Blog/Entry";
import Persona from "./components/Persona";
import PersonasSite from "./Personas/PersonasSite";

function LandingPage() {
    return (
        <div>
            <ThemeProvider>
                <PersonasSite/>

            </ThemeProvider>
        </div>
    );

}


export default LandingPage;

