import React from "react"
import styles from "./KarenStyles.module.scss"
import gracias from "./img/Gracias.jpg"
import person from "./img/karen1.png"
import { FaResearchgate } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { ImLinkedin } from "react-icons/im"
import { GiClick } from "react-icons/gi"
import { GiDna2 } from "react-icons/gi"
import { BsGearFill } from "react-icons/bs"

function Karen() {
    return (
        <div className={styles.Wrapper}>
            <p className={styles.Nav}>Space for the navbar</p>
            <p className={styles.HeadingOne}>Directores</p>


            <div className={`${styles.Card}  `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <figure className={styles.ImageContainer}>
                            <img src={person} alt="Karen" />
                        </figure>

                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                    </div>
                </div>
            </div>


            {/* 
            <div className={`${styles.Card} ${styles.Middle2} `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <img src={person} alt="Karen" />
                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} ${styles.Middle} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.Card} ${styles.Middle3} `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <img src={person} alt="Karen" />
                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} ${styles.Middle} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                    </div>
                </div>
            </div>



            <p className={styles.HeadingOne1}>Colaboradores</p>
            <div className={`${styles.Card} ${styles.Middle4} `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <img src={person} alt="Karen" />
                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} ${styles.Middle} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.Card} ${styles.Middle5} `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <img src={person} alt="Karen" />
                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} ${styles.Middle} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.Card} ${styles.Middle6} `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <img src={person} alt="Karen" />
                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} ${styles.Middle} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.Card} ${styles.Middle7} `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <img src={person} alt="Karen" />
                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} ${styles.Middle} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                    </div>
                </div>
            </div>




            <p className={styles.HeadingOne2}>Encargados del proyecto</p>
            <div className={`${styles.Card} ${styles.Middle8} `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <img src={person} alt="Karen" />
                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} ${styles.Middle} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.Card} ${styles.Middle9} `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <img src={person} alt="Karen" />
                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} ${styles.Middle} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.Card} ${styles.Middle10} `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <img src={person} alt="Karen" />
                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} ${styles.Middle} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.Card} ${styles.Middle11} `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <img src={person} alt="Karen" />
                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} ${styles.Middle} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.Card} ${styles.Middle12} `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <img src={person} alt="Karen" />
                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} ${styles.Middle} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.Card} ${styles.Middle13} `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <img src={person} alt="Karen" />
                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} ${styles.Middle} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.Card} ${styles.Middle14} `}>
                <div className={styles.Front}>
                    <div className={styles.FrontContent}>
                        <p className={styles.Title1}>Karen Rocio Macias Ávila</p>
                        <div className={styles.TagContainer}>
                            <p className={styles.Tag}>Programmer</p>
                        </div>
                        <img src={person} alt="Karen" />
                        <GiClick className={styles.Click} />
                    </div>
                </div>
                <div className={styles.Back}>
                    <div className={`${styles.BackContent} ${styles.Middle} `}>
                        <p className={styles.Title2}>About me</p>
                        <p className={styles.Text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className={styles.Text}>Luctus maecenas id eu tellus, egestas pellentesque ridiculus.</p>
                        <p className={styles.Text}>Egestas lobortis habitant a, nunc per morbi consequat, parturient sollicitudin.</p>
                        <p className={styles.Text}>Torquent etiam iaculis lacus mattis semper, hendrerit curabitur nibh dignissim.</p>
                        <p className={styles.Text}>Dictumst arcu cubilia porta habitant pretium, ullamcorper proin mus vestibulum.</p>
                        <p className={styles.Title2}>My social apps</p>
                        <div className={styles.Icons}>
                            <a href="#"><HiOutlineMail /></a>
                            <a href="#"><ImLinkedin /></a>
                            <a href="#"><FaResearchgate /></a>
                        </div>
                        </div>
            </div>
                    </div> */}

        </div>
    );
}

export default Karen;