import {ThemeProvider} from "@chakra-ui/core"
import React from 'react';
import Main from "./Main/Homepage";

function LandingPage() {
    return (
        <div>
            <ThemeProvider>
                <Main/>
            </ThemeProvider>
        </div>
    );

}


export default LandingPage;

