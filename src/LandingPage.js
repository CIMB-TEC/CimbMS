import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import React from "react";
import Main from "./Main/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DivulgationSite from "./Divulgation/DivulgationSite";
import PersonasSite from "./Personas/PersonasSite";
import Projects from "./Projects/Projects";
import Karen from "./Karen/Karen.jsx";
import Paola from "./Paola/Paola.jsx";

import ADMAS from "./Projects/ADMAS";
import ExoDUX from "./Projects/ExoDUX";
import Domotics from "./Projects/Domotics";
import AcousticAg from "./Projects/AcousticAg";
import Platform from "./Projects/Platform";
import Einar from "./Einar/Einar.jsx";
import Jorge from "./Jorge/Jorge.jsx";
import Header from "./NewComponents/Header.jsx";
import ProjectCard from "./Paola/ProjectCard";
import Project from "./Karen/Project";

function LandingPage() {
  return (
    <Router>
      <ThemeProvider>
        <CSSReset />

        <Header />
        {/* <Route exact path="/">
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
          </Route> */}

        <Route exact path="/projectcard">
          <ProjectCard />
        </Route>

        <Route exact path="/project">
          <Project />
        </Route>

        <Route exact path="/">
          <Einar />
        </Route>

        <Route exact path="/karen">
          <Karen />
        </Route>

        <Route exact path="/paola">
          <Paola />
        </Route>

        <Route exact path="/jorge">
          <Jorge />
        </Route>
      </ThemeProvider>
    </Router>
  );
}

export default LandingPage;
