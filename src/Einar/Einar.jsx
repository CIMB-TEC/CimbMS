import React from "react"
import styles from "./EinarStyles.module.scss"


function Einar() {
    return (

        <div className={styles.Wrapper}>

            <p className={styles.Name}> Einar</p>
            <p className={styles.Description}> I am a studen at ITESM</p>
            <p className={styles.Age}>Age: 21</p>
        </div>

    );
}

export default Einar;    