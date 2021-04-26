import React from "react";
import { Collapse } from "@chakra-ui/core";
import styles from "./ButtonsStyles.module.scss";

function Buttons(props) {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  return (
    <div className={styles.Tog}>
      <div className={styles.Buttons}>
        <button onClick={handleToggle}>Abstract</button>
        <a className={styles.Article} target="_blank" href={props.Link}>
          Leer artículo
        </a>
      </div>
      <div className={styles.Abstract}>
        <Collapse mt={4} isOpen={show}>
          <p>{props.Abs}</p>
        </Collapse>
      </div>
    </div>
  )
}

export default Buttons;
