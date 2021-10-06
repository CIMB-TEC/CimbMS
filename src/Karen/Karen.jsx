
import CardGreen from "./components/CardGreen";
import styles from "./KarenStyles.module.scss"

import teamEng from "./teamEng.json"
import teamEsp from "./teamEsp.json"


import React, { useContext } from "react";
import { LanguageContext } from "../App";

function Karen() {

    const eng = useContext(LanguageContext)
    let team = eng ? teamEng : teamEsp;

    return (
        <div className={styles.Wrapper}>{}
            <h1 className={styles.Subtitle}>{team.team}</h1>
            <h1 className={styles.H1}>{team.directors}</h1>
            <div className={styles.Directores}>
                {
                    team.directorsTeam.map((director) => {
                        return (
                            <CardGreen card={director}/>
                        )
                    })
                }
            </div>
            <h1 className={styles.H1}>{team.collaborators}</h1>
            <div className={styles.Colaboradores}>
                {
                    team.collaboratorsTeam.map((collaborator) => {
                        return (
                            <CardGreen card={collaborator}/>
                        )
                    })
                }
            </div>
            <h1 className={styles.H1}>{team.projectManagers}</h1>
            <div className={styles.EncargadosProyecto}>
                {
                    team.ProjectManagersTeam.map((managers) => {
                        return (
                            <CardGreen card={managers}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Karen;
