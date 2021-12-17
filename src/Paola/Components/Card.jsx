import React from 'react'
import styles from "./CardStyles.module.scss"
import Buttons from "./Buttons.jsx"


function Card(props) {
    return (
        <div className={styles.Card}>
            <img src={props.Img} alt=""/>
            <div className={styles.Information}>
                <h1 className={styles.Subtitle}>{props.Title}</h1>
                <h2 className={styles.H2}>{props.Author}</h2>
                <h3 className={styles.H2}>{props.Year}</h3>

                <ul>
                    <li className={styles.Text}>{props.main1}</li>
                    <li className={styles.Text}>{props.main2}</li>
                    <li className={styles.Text}>{props.main3}</li>
                </ul>
            </div>

            <Buttons Link={props.Link} Abs={props.Abs} Read={props.Read}/>

        </div>
    )

}

export default Card;




