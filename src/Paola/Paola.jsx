import React from "react"
import styles from "./PaolaStyles.module.scss"
import Toggle from "./Toggle"


function Paola() {
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);

    return(
        <div>
            <div className={styles.Container}>
                <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg"/>
                <div className={styles.Information}>
                    <h2>ADMAS</h2>
                    <h1>Perspective of Autonomous Driving in Mexico</h1>
                    <h3>Dr. Javier Izquierdo Reyes</h3>
                    <h4>2019</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                        <li>Aliquam gravida tristique sem.</li>
                    </ul>
                </div>
                <Toggle/>
            </div>
            <div className={styles.Container}>
                <img src="https://guiauniversitaria.mx/wp-content/uploads/2020/10/6-tipos-de-m%C3%A9todos-de-investigaci%C3%B3n.jpg"/>
                <div className={styles.Information}>
                    <h2>ADMAS</h2>
                    <h1>Perspective of Autonomous Driving in Mexico</h1>
                    <h3>Dr. Javier Izquierdo Reyes</h3>
                    <h4>2019</h4>
                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                        <li>Aliquam gravida tristique sem.</li>
                    </ul>
                </div>
                <Toggle/>
            </div>
        </div>
    );
}

export default Paola;


