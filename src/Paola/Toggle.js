import React from "react"
import {Collapse} from "@chakra-ui/core";
import styles from "./PaolaStyles.module.scss"

function Toggle( ){
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);
    return(
        <div className={styles.Tog}>
            <div className={styles.Buttons}>
                <button onClick={handleToggle}>Abstarct</button>
                <a className={styles.Article} target="_blank" href="https://ieeexplore.ieee.org/document/8743135">Leer artículo</a>
            </div>
            <div className={styles.Abstract}>
                <Collapse mt={4} isOpen={show}>
                    <p>Autonomous Driving is a topic each time more relevant due to the great role that autonomous and connected vehicles could take in the development of smart cities around the world. And, even when some prototypes are now capable of driving alone in some scenarios, it is true that a fully autonomous car does not exist yet. The present work pretends to give to the reader a general context about autonomous vehicles and a perspective of this technology and its evolution in a really difficult context such as the Mexican, which is comparable with others like the Latin American. They are also presented some of the most relevant tests and/or works made around this topic with a direct impact in Mexico.</p>
                </Collapse>
            </div>
        </div>
    )
}

export default Toggle;