import React from 'react'
import styles from "./CardStyles.module.scss"
import Buttons from "./Buttons.jsx"


function Card(props) {
    return (
        <div className={styles.Card}>
            <img src={props.Img} />
            <div className={styles.Information}>
                <h1>{props.Title}</h1>
                <h3>{props.Author}</h3>

                <h4>{props.Year}</h4>


                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                    <li>Aliquam gravida tristique sem.</li>
                </ul>
            </div>

            <Buttons Link={props.Link} Abs={props.Abs}/>

        </div>
    )

}

export default Card;




