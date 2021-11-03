import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Karen from "./Karen/Karen.jsx";
import Paola from "./Paola/Paola.jsx";

import Einar from "./Einar/Einar.jsx";
import Jorge from "./Jorge/Jorge.jsx";
import Header from "./NewComponents/Header.jsx";
import ProjectCard from "./Paola/ProjectCard";
import SE from "./Karen/SE";
import UCTD from "./Karen/UCTD";
import HOBS from "./Karen/HOBS";
import LP from "./Karen/LP";
import ReadMore from "./Karen/ReadMore";
import CreateBlog from "./Firebase/CreateBlog.jsx";
import BlogPost from "./Firebase/BlogPost.jsx";
import Blog from "./Firebase/Blog.jsx"
import CreateArticle from "./Firebase/CreateArticle.jsx";
import CreateProject  from "./Firebase/CreateProject.jsx";
import CreateReadMoreProject  from "./Firebase/CreateReadMoreProject";
import researchEng from "./Einar/researchEng.json";
import researchEsp from "./Einar/researchEsp.json";

export const LanguageContext = React.createContext();

function App() {
  const [eng, setEng] = useState(true);

  const changeLanguage = () => {
    setEng(!eng);
  };

  // let home = eng ? homeEng : homeEsp;
  // let research = eng ? researchEng : researchEsp;
  return (
    <LanguageContext.Provider value={eng}>
      <Router>
        <ThemeProvider>
          <CSSReset />

          <Header changeLanguage={() => changeLanguage()} />
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

          <Route exact path="/se">
            <SE />
          </Route>

          <Route exact path="/uctd">
            <UCTD />
          </Route>

          <Route exact path="/hobs">
            <HOBS />
          </Route>

          <Route exact path="/lp">
            <LP />
          </Route>

          <Route exact path="/projects/:id">
            <ReadMore />
          </Route>

          <Route exact path="/">
            <Einar />
          </Route>

          <Route exact path="/team">
            <Karen />
          </Route>

          <Route exact path="/articles">
            <Paola />
          </Route>

          <Route exact path="/projects">
            <Jorge />
          </Route>

          <Route exact path="/firebase">
            <CreateBlog />
          </Route>

          <Route exact path="/firebase/article">
            <CreateArticle />
          </Route>

          <Route exact path="/firebase/project">
            <CreateProject />
          </Route>

          <Route exact path="/firebase/read_more_project">
            <CreateReadMoreProject />
          </Route>

          <Route exact path="/firebase/:id" component={BlogPost} />
					
					<Route exact path="/blog" component={Blog} />

        </ThemeProvider>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
