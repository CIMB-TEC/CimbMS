import React from "react"
import styles from "./PaolaStyles.module.scss"

function Paola() {
    return(
        <main>
            <div className={styles.Container}>
                <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg"/>
                <div className={styles.Information}>
                    <h2>ADMAS</h2>
                    <h1>Perspective of Autonomous Driving in Mexico</h1>
                    <h3>Dr. Javier Izquierdo Reyes</h3>
                    <h4>2019</h4>
                    <p>Autonomous Driving is a topic each time more relevant due to the great role that autonomous and connected vehicles could take in the development of smart cities around the world. And, even when some prototypes are now capable of driving alone in some scenarios, it is true that a fully autonomous car does not exist yet. The present work pretends to give to the reader a general context about autonomous vehicles and a perspective of this technology and its evolution in a really difficult context such as the Mexican, which is comparable with others like the Latin American. They are also presented some of the most relevant tests and/or works made around this topic with a direct impact in Mexico.</p>
                    <a className={styles.Article} href="https://ieeexplore.ieee.org/document/8743135">Leer artículo</a>
                </div>
            </div>
            <div className={styles.Container}>
                <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg"/>
                <div className={styles.Information}>
                    <h2>ADMAS</h2>
                    <h1>Perspective of Autonomous Driving in Mexico</h1>
                    <h3>Dr. Javier Izquierdo Reyes</h3>
                    <h4>2019</h4>
                    <p>Autonomous Driving is a topic each time more relevant due to the great role that autonomous and connected vehicles could take in the development of smart cities around the world. And, even when some prototypes are now capable of driving alone in some scenarios, it is true that a fully autonomous car does not exist yet. The present work pretends to give to the reader a general context about autonomous vehicles and a perspective of this technology and its evolution in a really difficult context such as the Mexican, which is comparable with others like the Latin American. They are also presented some of the most relevant tests and/or works made around this topic with a direct impact in Mexico.</p>
                    <a className={styles.Article} href="https://ieeexplore.ieee.org/document/8743135">Leer artículo</a>
                </div>
            </div>
        </main>
    );
}

export default Paola;


