import styles from "./HeaderStyles.module.scss"
import React, { useState } from 'react';
import Logo from "./Img/logo.png"
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"
import headersEng from "./Header_Eng.json"
import headersEsp from "./Header_Esp.json"
import { useContext } from "react";
import { LanguageContext } from "../App"

function Header(props) {
    const [ham, setHam] = useState(false)

    const handelHam = () => {
        setHam(!ham)
    }

    const eng = useContext(LanguageContext)
    let headers = eng ? headersEng : headersEsp;

    return (
        <>
            <div className={styles.Wrapper}>
                <div className={styles.LogoContainer}>
                    <a>
                        <img className={styles.Logo} src="https://firebasestorage.googleapis.com/v0/b/cimb-59410.appspot.com/o/page%2Fcimb-negro.png?alt=media&token=dc4e2395-e360-4ce6-a943-cf5b8ce3a3dc" />
                    </a>
                </div>
                <div className={styles.NavsContainer}>
                    <Link to="/" className={styles.Nav}>{headers.home}</Link>
                    <Link to="/projects" className={styles.Nav}>{headers.projects}</Link>
                    <Link to="/articles" className={styles.Nav}>{headers.disclosure}</Link>
                    <Link to="/team" className={styles.Nav}>{headers.team}</Link>
                    <Link to="/blog" className={styles.Nav}>{headers.blog}</Link>

                    <a onClick={props.changeLanguage} className={styles.Nav}> ENG/ESP</a>
                    <AiOutlineMenu className={styles.Ham} onClick={handelHam} />
                </div>
            </div>

            {ham ? <div className={styles.NavHamContainer}>
                <Link to="/" className={styles.NavHam} onClick={handelHam}>{headers.home}</Link>
                <Link to="/projects" className={styles.NavHam} onClick={handelHam}>{headers.projects}</Link>
                <Link to="/articles" className={styles.NavHam} onClick={handelHam}>{headers.disclosure}</Link>
                <Link to="/team" className={styles.NavHam} onClick={handelHam}>{headers.team}</Link>
                <Link to="/blog" className={styles.NavHam} onClick={handelHam}>{headers.blog}</Link>
                <a onClick={props.changeLanguage} className={styles.NavHam}> ENG/ESP</a>

            </div> : <div></div>}




        </>)
}

export default Header;