import React from "react"
import styles from "./KarenStyles.module.scss"
import gracias from "./img/Gracias.jpg"

function Karen() {
    return (
        <div className={styles.Wrapper}>
            <div className={styles.MenuContainer}>
                <input className={styles.Menu} type="button" onclick="" value="Equipo de investigación"></input>
                <input className={styles.Menu} type="button" onclick="" value="Agradecimientos"></input>
                <input className={styles.Menu} type="button" onclick="" value="Estudiantes"></input>
            </div>
            <div className={styles.ThankTitle}>
                <p className={styles.Title}>Agradecimientos</p>
            </div>
            <div class={styles.ThankInfoContainer}>
                <div class={styles.ThankImage}>
                    <img className={styles.Image} src={gracias} alt="Thankful message" />
                </div>
                <div class={styles.ThankInfo}>
                    <p className={styles.Info}>Queremos agradecer a <b>todas las personas que han trabajado dentro del Centro de Investigación en Microsistemas y Biodiseño.</b> Sin su participación nada de esto podria ser posible.</p>
                </div>
            </div>
            <div className={styles.PeopleContainer}>
                <div className={styles.People}>
                    <div className={styles.Telecomunicaciones}>
                        <p className={styles.Subtitle}>Telecomunicaciones</p>
                        <p><b className={styles.bold}>Dr.</b> Rodrigo Flores Castillo</p>
                        <li>Ing. José Luis Galíndez Vences</li>
                        <li>Ing. Artemio Ortega García</li>
                    </div>
                    <div className={styles.Microsistemas}>
                        <p className={styles.Subtitle}>Microsistemas</p>
                        <ul>
                            <li>Dr. Luis Yepez</li>
                            <li>Ing. Jesús Javier Hernández Vidal</li>
                            <li>Ing Arnoldo Tena Morante</li>
                            <li>Ing. Emmanuel Nieto Casarrubias</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.People}>
                    <div className={styles.Telecomunicaciones}>
                        <p className={styles.Subtitle}>Biodiseño</p>
                        <ul>
                            <li>Ing. Daniela Cruz Vargas</li>
                            <li>Mtra. Gabriela Jiménez Moyao</li>
                            <li>Lic. Renée Labardini Ramírez</li>
                            <li>Ing. Adriana Hernández Correa</li>
                            <li>Lic. Victoria Brunhuber Estrada</li>
                            <li>Ing. Jorge André Hernández González</li>
                            <li>Ing. Cintya González</li>
                            <li>Ing. Leopoldo Cendejas</li>
                            <li>Ing. Orlando García Villalba</li>
                            <li>Ing. Diego Garibay Pulido</li>
                            <li>Ing. Leslie Orozco</li>
                        </ul>
                    </div>
                    <div className={styles.Microsistemas}>
                        <p className={styles.Subtitle}>Profesores</p>
                        <ul>
                            <li>Mtro. José Luis Pablos Hach</li>
                            <li>Dr. Rafael Ferrer Flores</li>
                            <li>Dr. Jorge Eduardo Brieva Rico</li>
                            <li>Dr. Raúl Crespo Saucedo</li>
                            <li>Mtra. Silvia Covarrubias</li>
                            <li>Dr. Edgar Omar López Caudana</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Karen;