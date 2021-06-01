import React from 'react'
import styles from "./CardStyles.module.scss"
import Buttons from "./Buttons.jsx"


function Card(props) {
    return (
        <div className={styles.Card}>
            <img src={props.Img} alt=""/>
            <div className={styles.Information}>
                <h1>{props.Title}</h1>
                <h3>{props.Author}</h3>

                <h4>{props.Year}</h4>


                <ul>
                    <li>{props.main1}</li>
                    <li>{props.main2}</li>
                    <li>{props.main3}</li>
                </ul>
            </div>

            <Buttons Link={props.Link} Abs={props.Abs} Read={props.Read}/>

        </div>
    )

}

export default Card;




