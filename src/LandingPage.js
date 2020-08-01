import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import React from "react";
import Main from "./Main/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DivulgationSite from "./Divulgation/DivulgationSite";
import PersonasSite from "./Personas/PersonasSite";
function LandingPage() {
  return (
    <Router>
      <ThemeProvider>
        <CSSReset />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/divulgation">
            <DivulgationSite />
          </Route>
          <Route exact path="/equipo">
            <PersonasSite />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default LandingPage;
