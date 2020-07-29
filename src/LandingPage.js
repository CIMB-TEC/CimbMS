import {ThemeProvider, CSSReset, Text, ColorModeProvider, Flex} from "@chakra-ui/core"
import React from 'react';
import BlogEntry from "./Blog/Entry";

function LandingPage() {
    return (
        <div>
            <ThemeProvider>
                <BlogEntry/>
            </ThemeProvider>
        </div>
    );

}


export default LandingPage;

