
import CardGreen from "./components/CardGreen";
import CardOrange from "./components/CardOrange";
import CardPurple from "./components/CardPurple";
import Image from "./img/persona.jpg"
import styles from "./KarenStyles.module.scss"


import teamEng from "./teamEng.json"
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
                                    TitleBack="Intereses"
                                    TextOneBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                                    TextTwoBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                                    SubtitleBack="Redes"
                                    NameFront={director.name}
                                    SubtitleFront="JavaScript Wizard"
                                    TextFront="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                                    //Guardar todas las imagenes en la misma carpeta 
                                    //Solo agregar el nombre de la imagen (sin la ruta o el .jpg) en el json
                                    image={require(`./ProfileImg/${director.picture}.jpg`)}
                                    LinkedIn={director.linkedIn}

                                />
                            )
                        })
                    }



                </div>
                <div className={styles.DirectoresTwo}>
                    <CardOrange
                        TitleBack="Intereses"
                        TextOneBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        TextTwoBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        SubtitleBack="Redes"
                        NameFront="Karen Rocio Macias Avila"
                        SubtitleFront="JavaScript Wizard"
                        TextFront="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        Image={Image}
                    />
                </div>
            </div>
            <h1 className={styles.ColaboradoresH1}>Colaboradores</h1>
            <div className={styles.Colaboradores}>
                <div className={styles.ColaboradoresOne}>
                    <CardPurple
                        TitleBack="Intereses"
                        TextOneBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        TextTwoBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        SubtitleBack="Redes"
                        NameFront="Karen Rocio Macias Avila"
                        SubtitleFront="JavaScript Wizard"
                        TextFront="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        Image={Image}
                    />
                    <CardPurple
                        TitleBack="Intereses"
                        TextOneBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        TextTwoBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        SubtitleBack="Redes"
                        NameFront="Karen Rocio Macias Avila"
                        SubtitleFront="JavaScript Wizard"
                        TextFront="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        Image={Image}
                    />
                </div>
                <div className={styles.ColaboradoresTwo}>
                    <CardPurple
                        TitleBack="Intereses"
                        TextOneBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        TextTwoBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        SubtitleBack="Redes"
                        NameFront="Karen Rocio Macias Avila"
                        SubtitleFront="JavaScript Wizard"
                        TextFront="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        Image={Image}
                    />
                    <CardPurple
                        TitleBack="Intereses"
                        TextOneBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        TextTwoBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        SubtitleBack="Redes"
                        NameFront="Karen Rocio Macias Avila"
                        SubtitleFront="JavaScript Wizard"
                        TextFront="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                        Image={Image}
                    />
                </div>
            </div>
            <h1 className={styles.EncargadosH1}>Encargados de proyecto</h1>
            <div className={styles.EncargadosProyecto}>
                <div className={styles.EncargadosOne}>
                    <div className={styles.Encargados1}>
                        <CardGreen
                            TitleBack="Intereses"
                            TextOneBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            TextTwoBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            SubtitleBack="Redes"
                            NameFront="Karen Rocio Macias Avila"
                            SubtitleFront="JavaScript Wizard"
                            TextFront="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            Image={Image}
                        />
                        <CardGreen
                            TitleBack="Intereses"
                            TextOneBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            TextTwoBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            SubtitleBack="Redes"
                            NameFront="Karen Rocio Macias Avila"
                            SubtitleFront="JavaScript Wizard"
                            TextFront="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            Image={Image}
                        />
                    </div>
                    <div className={styles.Encargados2}>
                        <CardGreen
                            TitleBack="Intereses"
                            TextOneBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            TextTwoBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            SubtitleBack="Redes"
                            NameFront="Karen Rocio Macias Avila"
                            SubtitleFront="JavaScript Wizard"
                            TextFront="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            Image={Image}
                        />
                    </div>
                </div>
                <div className={styles.EncargadosTwo}>
                    <div className={styles.Encargados3}>
                        <CardGreen
                            TitleBack="Intereses"
                            TextOneBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            TextTwoBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            SubtitleBack="Redes"
                            NameFront="Karen Rocio Macias Avila"
                            SubtitleFront="JavaScript Wizard"
                            TextFront="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            Image={Image}
                        />
                        <CardGreen
                            TitleBack="Intereses"
                            TextOneBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            TextTwoBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            SubtitleBack="Redes"
                            NameFront="Karen Rocio Macias Avila"
                            SubtitleFront="JavaScript Wizard"
                            TextFront="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            Image={Image}
                        />
                    </div>
                    <div className={styles.Encargados4}>
                        <CardGreen
                            TitleBack="Intereses"
                            TextOneBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            TextTwoBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            SubtitleBack="Redes"
                            NameFront="Karen Rocio Macias Avila"
                            SubtitleFront="JavaScript Wizard"
                            TextFront="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            Image={Image}
                        />
                        <CardGreen
                            TitleBack="Intereses"
                            TextOneBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            TextTwoBack="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            SubtitleBack="Redes"
                            NameFront="Karen Rocio Macias Avila"
                            SubtitleFront="JavaScript Wizard"
                            TextFront="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id erat a magna lobortis dictum. Nunc est arcu, lacinia quis sapien placerat, laoreet tincidunt nulla."
                            Image={Image}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Karen;