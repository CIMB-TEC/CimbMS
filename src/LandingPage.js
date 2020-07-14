import React from 'react';
import DivulgationSite from './Divulgation/DivulgationSite'
import Menu from "./components/Drawer";

import { ThemeProvider, CSSReset } from "@chakra-ui/core"
function LandingPage() {


    return (
        <div>

            <ThemeProvider>
                <CSSReset />

                {/* <DivulgationSite /> */}
            </ThemeProvider>
        </div>
    );

};

export default LandingPage;

