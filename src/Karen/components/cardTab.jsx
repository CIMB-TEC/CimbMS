import React from 'react';
import styles from "./cardTabStyles.module.scss"
import {GiClick} from "react-icons/gi"

function cardTab(props) {

    let card = ""

    for (let i = 0; i < props.areas.length; i++){
        card += `<input class=${styles.input0} type="radio" id="${props.areas[i].label}" name="areas" ></input> <label class=${styles.label0} for="${props.areas[i].label}">${props.areas[i].label}<div class=${styles.manita}> <GiClick alt=""/> </div> </label> <div class=${styles.tabs}> <h2 class=${styles.tabsh2}>${props.areas[i].a}</h2> <p class=${styles.parrafoT0}>${props.areas[i].desc}</p> </div>`
    }

    return(
        <div className={styles.conttabs} dangerouslySetInnerHTML={{__html: card}}>
        </div>
    )
}

export default cardTab;