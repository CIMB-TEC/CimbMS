import React from 'react';
import styles from "./cardTabStyles.module.scss"
import {GiClick} from "react-icons/gi"

function cardTab(props) {
    return(
        <div className={styles.conttabs}>
            <input className={styles.input0} type="radio" id="tab0" name="areas" ></input>
                <label className={styles.label0} for="tab0">{props.LabelT0}
                    <div className={styles.manita}>
                                <GiClick alt=""/>
                    </div>
                </label>
                <div className={styles.tabs}>
                    <h2 className={styles.tabsh2}>{props.TituloT0}</h2>
                    <p className={styles.parrafoT0}>{props.TextoT0}</p>
                </div>
            <input className={styles.input0} type="radio" id="tab1" name="areas"></input>
                <label className={styles.label0} for="tab1">{props.LabelT1}
                    <div className={styles.manita}>
                                <GiClick alt=""/>
                    </div>
                </label>
                <div className={styles.tabs}>
                    <h2 className={styles.tabsh2}>{props.TituloT1}</h2>
                    <p className={styles.parrafoT0}>{props.TextoT1}</p>
                </div>
            <input className={styles.input0} type="radio" id="tab2" name="areas"></input>
                <label className={styles.label0} for="tab2">{props.LabelT2}
                    <div className={styles.manita}>
                                <GiClick alt=""/>
                    </div>
                </label>
                <div className={styles.tabs}>
                    <h2 className={styles.tabsh2}>{props.TituloT2}</h2>
                    <p className={styles.parrafoT0}>{props.TextoT2}</p>
                </div>
            <input className={styles.input0} type="radio" id="tab3" name="areas"></input>
                <label className={styles.label0} for="tab3">{props.LabelT3}
                    <div className={styles.manita}>
                                <GiClick alt=""/>
                    </div>
                </label>
                <div className={styles.tabs}>
                    <h2 className={styles.tabsh2}>{props.TituloT3}</h2>
                    <p className={styles.parrafoT0}>{props.TextoT3}</p>
                </div>
            <input className={styles.input0} type="radio" id="tab4" name="areas"></input>
                <label className={styles.label0} for="tab4">{props.LabelT4}
                    <div className={styles.manita}>
                                <GiClick alt=""/>
                    </div>
                </label>
                <div className={styles.tabs}>
                    <h2 className={styles.tabsh2}>{props.TituloT4}</h2>
                    <p className={styles.parrafoT0}>{props.TextoT4}</p>
                </div>
        </div>
    )
}

export default cardTab;