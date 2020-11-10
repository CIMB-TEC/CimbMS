import React from "react";
import ProjectCard from "./components/ProjectCard";
import ProjectInformation from "./components/ProjectInformation";
import classes from "./ProjectsStyles.module.scss";
function Projects() {
  return (
    <div className={classes.Wrapper}>
      <header className={classes.Header}>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Proyectos</li>
            <li>Divulgación</li>
            <li>Equipo</li>
          </ul>
        </nav>
      </header>
      <h1 className={classes.CardsContainerTitle}>Posgrado</h1>
      <div className={classes.CardsContainer}>
        <div class="Card">
          <ProjectCard color="TitleRed" />
        </div>
        <div class="Card">
          <ProjectCard />
        </div>
        <div class="Card">
          <ProjectCard />
        </div>
      </div>

      <h1 className={classes.CardsContainerTitle}>Pregrado</h1>
      <div className={classes.CardsContainer}>
        <div class="Card">
          <ProjectCard />
        </div>
        <div class="Card">
          <ProjectCard />
        </div>
        <div class="Card">
          <ProjectCard />
        </div>
      </div>
      <div class="informationWrapper">
        <ProjectInformation />
      </div>
    </div>
  );
}

export default Projects;
