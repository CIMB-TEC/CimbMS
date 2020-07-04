import React from 'react';
import DivulgationSite from './Divulgation/DivulgationSite'
import Menu from "./components/Drawer";
import { ThemeProvider, CSSReset } from "@chakra-ui/core"
function LandingPage() {


    return (
        <div>
            <DivulgationSite />
            <ThemeProvider>
                <CSSReset />
                <Menu />
            </ThemeProvider>
        </div>
    );

};

export default LandingPage;

