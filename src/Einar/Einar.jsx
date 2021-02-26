import React from "react"
import styles from "./EinarStyles.module.scss"
import { AiOutlineFileSearch } from 'react-icons/ai';

function Einar() {
    return (

        <div className={styles.Wrapper}>
            <div className={styles.TitDesContainer}>
                <p className={styles.Title}> CIMB</p>
                <p className={styles.Definition}> Computing Intelligence, Mechatronics and Biodesign Laboratory</p>
                <p className={styles.Description}> Nuestro grupo busca generar proyectos para la mejora de la calidad de vida de la sociedad mexicana y una mejora de la Experiencia del Usuario (UX) ante el uso de nuevas tecnologías. Él laboratorio trabaja a través de la generación de proyectos de Posgrados y Pregrado sobre las distintas líneas de investigación de enfoque.</p>
            </div>
            <div className={styles.AreaTitleContainer}>Actualmente desarrollamos los siguientes proyectos</div>
            <div className={styles.AreaOneContainer}>
                <AiOutlineFileSearch className={styles.Icon} />
                <p className={styles.AreaTitle}> Domótica Emocional </p>
                <a className={styles.AreaLink}> Más información</a>

            </div>
            <div className={styles.AreaTwoContainer}>

                <AiOutlineFileSearch className={styles.Icon} />
                <p className={styles.AreaTitle}> Domótica Emocional
 </p>
                <a className={styles.AreaLink}> Más información</a>
            </div>
            <div className={styles.AreaThreeContainer}>
                <AiOutlineFileSearch className={styles.Icon} />
                <p className={styles.AreaTitle}> Domótica Emocional </p>
                <a className={styles.AreaLink}> Más información</a>
            </div>
            <div className={styles.AreaFourContainer}>
                <AiOutlineFileSearch className={styles.Icon} />
                <p className={styles.AreaTitle}> Domótica Emocional </p>
                <a className={styles.AreaLink}> Más información</a>
            </div>
        </div>

    );
}

export default Einar;    