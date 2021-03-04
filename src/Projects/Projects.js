import React from "react";
import ProjectCard from "./components/ProjectCard";
import Header from "../components/Header";
import classes from "./ProjectsStyles.module.scss";

function Projects() {
  return (
    <div>
      <Header />
      <div className={classes.Wrapper}>
        <h1 className={classes.CardsContainerTitle}>Posgrado</h1>
        <div className={classes.CardsContainer}>
          <div class="Card">
            <ProjectCard
              project="Admas"
              title="ADMAS"
              link="admas"
              description="El proyecto Advanced Driver Monitoring for Assistance System
          (ADMAS) consta en la creación de un nuevo sistema de asistencia al conductor
          que asista de forma eficiente a un conducto estado psico-fisiológico.
          Pretende aumentar la autonomía de un automóvil común a uno semi-autonomo."
            />
          </div>
          <div class="Card">
            <ProjectCard
              project="Domotica"
              title="Domótica Emocional"
              link="domotica"
              description="El proyecto busca la fundamentación y desarrollo de un espacio
          habitable en donde se pueda modular el estado anímico del usuario a partir
          del control de las variables ambientales y de la inserción de estímulos
          preprogramados positivos"
            />
          </div>
          <div class="Card">
            <ProjectCard
              project="Exodux"
              title="ExoDux"
              link="exodux"
              description="El proyecto busca ayudar a las personas cuyas funciones motrices
          se encuentren deterioradas, o bien, se les dificulte realizar tareas sencillas
          del dia a dia, como caminar. Esto en conjunto con el hecho de que la población
          de adultos mayores está en constante crecimiento, hace del tema de debilidad muscular una gran oportunidad para trabajar."
            />
          </div>
        </div>

        <h1 className={classes.CardsContainerTitle}>Pregrado</h1>
        <div className={classes.CardsContainer}>
          <div class="Card">
            <ProjectCard
              project="Agricultura"
              title="Agricultura Acústica"
              link="agricultura"
              description="El proyecto busca desarrollar un espacio completamente autónomo
          y aislado para el estudio del crecimiento vegetal, donde las condiciones del
          entorno puedan ser monitoreadas de manera constante, así como alteradas de ser
          necesario para el desarrollo de diferentes especímenes de plantas."
            />
          </div>
          <div class="Card">
            <ProjectCard
              project="Vehiculos"
              title="Vehículos Inteligentes"
              link="vehiculos"
              description="El proyecto busca desarrollar una plataforma para un vehículo
          todo terreno, completamente eléctrico e instrumentado. Buscando la aplicación
          de algoritmos inteligentes y fusión de sensores para el procesamiento y con ellos
          generar sistemas de seguridad para la asistencia a la conducción."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
