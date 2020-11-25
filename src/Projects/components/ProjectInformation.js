import React from "react";
import classes from "./ProjectInformationStyles.module.css";
import PersonasCard from "../../Personas/PersonasCard";
import {Box} from "@chakra-ui/core";

function ProjectInformation(props) {
    return (
        <div className={classes.Wrapper}>
            <Box className={`${classes.container1}`}>
                <h1 className={`${classes.Title} ${classes[props.project]}`}>{props.title}</h1>
                <p className={`${classes.description}`}>
                    {props.description}
                </p>
            </Box>
            <Box className={`${classes.container2}`}>
                <h3 className={`${classes.ResearchTitle} ${classes[props.project]}`}>Research areas</h3>
                <div className={classes.AreaWrapper}>
                    <div className={classes.Area}>
                        <h4 className={classes.AreaTitle}>Energía</h4>
                        <p className={classes.AreaInfo}>
                            Mejora energética de los vehículos inteligentes por
                            medio del análisis de combustión, uso de energías renovables, vehículos eléctricos y
                            dinámica
                            del
                            vehículo.

                        </p>
                    </div>
                    <div className={classes.Area}>
                        <h4 className={classes.AreaTitle}>AI</h4>
                        <p className={classes.AreaInfo}>
                            Se desarrollan proyectos para la creación de algoritmos de inteligencia artificial,
                            simuladores, sistemas de visión, procesamiento de imágenes.
                        </p>
                    </div>
                    <div className={classes.Area}>
                        <h4 className={classes.AreaTitle}> Mecatrónica </h4>
                        <p className={classes.AreaInfo}>
                            Se desarrollan proyectos de instrumentación para los vehículos a través de sistemas
                            mecatrónicos
                            y de control. Se desea la instrumentación no intrusiva de los vehículos, con la
                            universalidad
                            del sistema en mente.
                        </p>
                    </div>
                    <div className={classes.Area}>
                        <h4 className={classes.AreaTitle}>Energía</h4>
                        <p className={classes.AreaInfo}>
                            Mejora energética de los vehículos inteligentes por
                            medio del análisis de combustión, uso de energías renovables, vehículos eléctricos y
                            dinámica
                            del
                            vehículo.

                        </p>
                    </div>
                    <div className={classes.Area}>
                        <h4 className={classes.AreaTitle}>AI</h4>
                        <p className={classes.AreaInfo}>
                            Se desarrollan proyectos para la creación de algoritmos de inteligencia artificial,
                            simuladores, sistemas de visión, procesamiento de imágenes.
                        </p>
                    </div>
                    <div className={classes.Area}>
                        <h4 className={classes.AreaTitle}> Mecatrónica </h4>
                        <p className={classes.AreaInfo}>
                            Se desarrollan proyectos de instrumentación para los vehículos a través de sistemas
                            mecatrónicos
                            y de control. Se desea la instrumentación no intrusiva de los vehículos, con la
                            universalidad
                            del sistema en mente.
                        </p>
                    </div>
                </div>
            </Box>
            <Box className={`${classes.container3}`}>
                <h3 className={`${classes.ColabTitle} ${classes[props.project]}`}>Collaborators</h3>
                <div className={classes.CollaboratorsWrapper}>
                    <PersonasCard/>
                    <PersonasCard/>
                    <PersonasCard/>
                </div>
            </Box>
        </div>
    );
}

export default ProjectInformation;
