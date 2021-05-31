
import CardGreen from "./components/CardGreen";
import CardOrange from "./components/CardOrange";
import CardPurple from "./components/CardPurple";
//import Image from "./img/persona.jpg"
import styles from "./KarenStyles.module.scss"


import teamEng from "./teamEng.json"
import teamEsp from "./teamEsp.json"
import { LanguageContext } from "../LandingPage"
import React, { useContext } from "react"



function Karen() {

    const eng = useContext(LanguageContext)
    let team = eng ? teamEng : teamEsp;

    return (
        <div className={styles.Wrapper}>
            <h1 className={styles.DirectoresH1}>Directores</h1>
            <div className={styles.Directores}>
                <div className={styles.DirectoresOne}>

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
                <div className={styles.DirectoresTwo}>
                    {
                        team.directorsTeam2.map((director) => {
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
            </div>
            <h1 className={styles.ColaboradoresH1}>Colaboradores</h1>
            <div className={styles.Colaboradores}>
                <div className={styles.ColaboradoresOne}>
                {
                    team.collaboratorsTeam.map((collaborator) => {
                        return (
                            <CardPurple
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
                <div className={styles.ColaboradoresTwo}>
                {
                    team.collaboratorsTeam2.map((collaborator) => {
                        return (
                            <CardPurple
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
            </div>
            <h1 className={styles.EncargadosH1}>Encargados de proyecto</h1>
            <div className={styles.EncargadosProyecto}>
                <div className={styles.EncargadosOne}>
                    <div className={styles.Encargados1}>
                    {
                        team.ProjectManagersTeam.map((managers) => {
                        return (
                            <CardGreen
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
                    <div className={styles.Encargados2}>
                    {
                        team.ProjectManagersTeam2.map((managers) => {
                        return (
                            <CardGreen
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
                <div className={styles.EncargadosTwo}>
                    <div className={styles.Encargados3}>
                    {
                        team.ProjectManagersTeam3.map((managers) => {
                        return (
                            <CardGreen
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
                    <div className={styles.Encargados4}>
                    {
                        team.ProjectManagersTeam4.map((managers) => {
                        return (
                            <CardGreen
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
            </div>
        </div>
    );
}

export default Karen;