
import CardGreen from "./components/CardGreen";
import CardOrange from "./components/CardOrange";
import CardPurple from "./components/CardPurple";
//import Image from "./img/persona.jpg"
import styles from "./KarenStyles.module.scss"

import teamEng from "./teamEng.json"
import teamEsp from "./teamEsp.json"

import React, { useContext } from "react"
import { LanguageContext } from "../App"


function Karen() {

    const eng = useContext(LanguageContext)
    let team = eng ? teamEng : teamEsp;

    return (
        <div className={styles.Wrapper}>{}
            <h1 className={styles.Title}>{team.team}</h1>
            <h1 className={styles.DirectoresH1}>{team.directors}</h1>
            <div className={styles.Directores}>
                {
                    team.directorsTeam.map((director) => {
                        return (
                            <CardOrange
                                TitleBack={director.titleBack}
                                TextOneBack={director.text1Back}
                                TextTwoBack={director.text2Back}
                                SubtitleBack={director.subtitleBack}
                                NameFront={director.name}
                                SubtitleFront={director.position}
                                TextFront={director.textFront}
                                //Guardar todas las imagenes en la misma carpeta 
                                //Solo agregar el nombre de la imagen (sin la ruta o el .jpg) en el json
                                image={require(`./ProfileImg/${director.pictureName}.${director.fileType}`)}
                                ResearchGateLink={director.researchGateLink}
                                MailLink={director.mailLink}
                                LinkedInLink={director.linkedInLink}

                            />
                        )
                    })
                }
            </div>
            <h1 className={styles.ColaboradoresH1}>{team.collaborators}</h1>
            <div className={styles.Colaboradores}>
                {
                    team.collaboratorsTeam.map((collaborator) => {
                        return (
                            <CardOrange
                                TitleBack={collaborator.titleBack}
                                TextOneBack={collaborator.text1Back}
                                TextTwoBack={collaborator.text2Back}
                                SubtitleBack={collaborator.subtitleBack}
                                NameFront={collaborator.name}
                                SubtitleFront={collaborator.position}
                                TextFront={collaborator.textFront}
                                //Guardar todas las imagenes en la misma carpeta 
                                //Solo agregar el nombre de la imagen (sin la ruta o el .jpg) en el json
                                image={require(`./ProfileImg/${collaborator.pictureName}.${collaborator.fileType}`)}
                                ResearchGateLink={collaborator.researchGateLink}
                                MailLink={collaborator.mailLink}
                                LinkedInLink={collaborator.linkedInLink}
                            />
                        )
                    })
                }
            </div>
            <h1 className={styles.EncargadosH1}>{team.projectManagers}</h1>
            <div className={styles.EncargadosProyecto}>
                {
                    team.ProjectManagersTeam.map((managers) => {
                        return (
                            <CardOrange
                                TitleBack={managers.titleBack}
                                TextOneBack={managers.text1Back}
                                TextTwoBack={managers.text2Back}
                                SubtitleBack={managers.subtitleBack}
                                NameFront={managers.name}
                                SubtitleFront={managers.position}
                                TextFront={managers.textFront}
                                //Guardar todas las imagenes en la misma carpeta 
                                //Solo agregar el nombre de la imagen (sin la ruta o el .jpg) en el json
                                image={require(`./ProfileImg/${managers.pictureName}.${managers.fileType}`)}
                                ResearchGateLink={managers.researchGateLink}
                                MailLink={managers.mailLink}
                                LinkedInLink={managers.linkedInLink}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Karen;
