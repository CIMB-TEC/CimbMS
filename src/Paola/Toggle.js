import React from "react"
import {Collapse} from "@chakra-ui/core";
import styles from "./PaolaStyles.module.scss"

function Toggle(props){
    const [show, setShow] = React.useState(false);
    const handleToggle = () => setShow(!show);
    return (
        <div className={styles.Tog}>
            <div className={styles.Buttons}>
                <button onClick={handleToggle}>Abstract</button>
                <a className={styles.Article} target="_blank" href={props.link}>Leer artículo</a>
            </div>
            <div className={styles.Abstract}>
                <Collapse mt={4} isOpen={show}>
                    <p>{props.abs}</p>
                </Collapse>
            </div>
        </div>
    )
}

export default Toggle;