import React from "react"
import styles from "./KarenStyles.module.scss"

function Karen() {
    return(
        <div className={styles.Wrapper}>
            <div className={styles.InfoContainer}>
                <p>Karen</p>
                <p>Age: 19</p>
            </div>
        </div>
    );
}

export default Karen;