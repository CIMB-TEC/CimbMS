import styles from "./HeaderStyles.module.scss"
import React, { useState } from 'react';
import Logo from "./Img/logo.png"
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"

function Header() {
    const [ham, setHam] = useState(false)

    const handelHam = () => {
        setHam(!ham)
    }
    return (
        <>
            <div className={styles.Wrapper}>
                <div className={styles.LogoContainer}>
                    <a>
                        <img className={styles.Logo} src={Logo} />
                    </a>
                </div>
                <div className={styles.NavsContainer}>
                    <Link to="/einar" className={styles.Nav}>Inicio</Link>
                    <Link to="/jorge" className={styles.Nav}>Proyectos</Link>
                    <Link to="/paola" className={styles.Nav}>Divulgación</Link>
                    <Link to="/karen" className={styles.Nav}>Equipo de investigación </Link>
                    <AiOutlineMenu className={styles.Ham} onClick={handelHam} />
                </div>
            </div>

            {ham ? <div className={styles.NavHamContainer}>
                <Link to="/einar" className={styles.NavHam} onClick={handelHam}>Inicio</Link>
                <Link to="/jorge" className={styles.NavHam} onClick={handelHam}>Proyectos</Link>
                <Link to="/paola" className={styles.NavHam} onClick={handelHam}>Divulgación</Link>
                <Link to="/karen" className={styles.NavHam} onClick={handelHam}>Equipo de investigación </Link>
            </div> : <div></div>}




        </>)
}

export default Header;