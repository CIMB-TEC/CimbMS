import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import React from "react";
import Main from "./Main/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DivulgationSite from "./Divulgation/DivulgationSite";
import PersonasSite from "./Personas/PersonasSite";
import Projects from "./Projects/Projects";
import Karen from "./Karen/Karen.jsx";


import ADMAS from "./Projects/ADMAS";
import ExoDUX from "./Projects/ExoDUX";
import Domotics from "./Projects/Domotics";
import AcousticAg from "./Projects/AcousticAg";
import Platform from "./Projects/Platform";
import Einar from "./Einar/Einar.jsx";


function LandingPage() {
  return (
    <Router>
      <ThemeProvider>
        <CSSReset />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/divulgacion">
            <DivulgationSite />
          </Route>

          <Route exact path="/proyectos">
            <Projects />
          </Route>

          <Route exact path="/equipo">
            <PersonasSite />
          </Route>

          <Route exact path="/admas">
            <ADMAS />
          </Route>

          <Route exact path="/domotica">
            <Domotics />
          </Route>

          <Route exact path="/exodux">
            <ExoDUX />
          </Route>

          <Route exact path="/agricultura">
            <AcousticAg />
          </Route>

          <Route exact path="/vehiculos">
            <Platform />
          </Route>

          <Route exact path="/einar">
            <Einar />
          </Route>


    <Route exact path="/karen">
            <Karen/>
          </Route>


        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default LandingPage;
