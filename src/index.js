import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from "./components/Drawer";
import { ThemeProvider, CSSReset } from "@chakra-ui/core"

ReactDOM.render(
    <ThemeProvider>
        <CSSReset />
        <Menu/>
    </ThemeProvider>,
  document.getElementById('root')
);

