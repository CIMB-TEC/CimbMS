import React from 'react';
import styles from "../PaolaStyles.module.scss"
import Toggle from "../Toggle"
function Card(props) {
    return (
        <div className={styles.Card}>
            <img src={props.Img} />
            <div className={styles.Information}>
                <h1>{props.Title}</h1>
                <h3>{props.Author}</h3>
                <h4>2019</h4>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Integer sodales magna quis metus ultrices, et pretium elit molestie.</li>
                    <li>Aliquam gravida tristique sem.</li>
                </ul>
            </div>
            <Toggle link="https://ieeexplore.ieee.org/document/8743135" abs="Autonomous Driving is a topic each time more relevant due to the great role that autonomous and connected vehicles could take in the development of smart cities around the world. And, even when some prototypes are now capable of driving alone in some scenarios, it is true that a fully autonomous car does not exist yet. The present work pretends to give to the reader a general context about autonomous vehicles and a perspective of this technology and its evolution in a really difficult context such as the Mexican, which is comparable with others like the Latin American. They are also presented some of the most relevant tests and/or works made around this topic with a direct impact in Mexico." />
        </div>
    )

}

export default Card;

//Dr. Javier Izquierdo Reyes