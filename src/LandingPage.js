import React from 'react';
import DrawerExa from "./components/Menu";
import DivulgationSite from './Divulgation/DivulgationSite'
import Menu from "./components/Menu";




import { ThemeProvider, CSSReset, Text } from "@chakra-ui/core"
import Footer from "./components/Footer";
//import mono from "./theme";
import Navbar from "./components/Navbar";
import Skeleton from "./Main/MainSite";
import DrawerExample from "./components/Menu";

import PersonasSite from './Personas/PersonasSite'

function LandingPage() {
    return (
        <div>

            <ThemeProvider >
                <CSSReset />
                <PersonasSite />
                {/*<DrawerExa/>*/}

                {/*<BlogSlider />*/}
                {/*<Footer/>*/}
            </ThemeProvider>
        </div>
    );

};


export default LandingPage;

