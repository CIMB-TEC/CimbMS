import React from 'react';
import styles from './JorgeStyles.module.scss'
import CardPurple from './components/cardPurple'
import CardLblue from './components/cardLblue'
import CardTab from './components/cardTab'

function Jorge() {
    return (
    
    <div className={styles.wrapper}> 
        <h1 className={styles.heading}>
            Postgrado
        </h1>
        <div className={styles.containerPostgrado}>
            <div className={styles.cardLblue}>
                <CardLblue 
                    Titulo = "Admas"
                    Texto = "El proyecto Advanced Driver Monitoring for Assistance System (ADMAS) consta en la creación de un nuevo sistema de asistencia al conductor que asista de forma eficiente a un conducto estado psico-fisiológico. 
                    Pretende aumentar la autonomía de un automóvil común a uno semi-autonomo."
                    enlace = "#"
                    enlaceTitulo = "Read More"
                />
            </div>
            <div className={styles.cardLblue}>
                <CardLblue 
                    Titulo = "Domótica Emocional"
                    Texto = "El proyecto busca la fundamentación y desarrollo de un espacio habitable en donde se pueda modular el estado anímico del usuario a partir del control de las variables ambientales y de la inserción de estímulos preprogramados positivos"
                    enlace = "#"
                    enlaceTitulo = "Read More"
                />
            </div>
            <div className={styles.cardLblue}>
                <CardLblue 
                    Titulo = "Exodux"
                    Texto = "El proyecto busca ayudar a las personas cuyas funciones motrices se encuentren deterioradas, o bien, se les dificulte realizar tareas sencillas del dia a dia, como caminar. 
                    Esto en conjunto con el hecho de que la población de adultos mayores está en constante crecimiento, hace del tema de debilidad muscular una gran oportunidad para trabajar."
                    enlace = "#"
                    enlaceTitulo = "Read More"
                />
            </div>
        </div>
        <h1 className={styles.heading2}>
            Pregrado
        </h1>
        <div className={styles.containerPregrado}>
            <div className={styles.cardPurple}>
                <CardPurple 
                    Titulo = "Agricultura Acústica"
                    Texto = "El proyecto busca desarrollar un espacio completamente autónomo y aislado para el estudio del crecimiento vegetal, donde las condiciones del entorno puedan ser monitoreadas de manera constante, así como alteradas de ser necesario para el desarrollo de diferentes especímenes de plantas."
                    enlace = "#"
                    enlaceTitulo = "Read More"
                />
            </div>
            <div className={styles.cardPurple}>
                <CardPurple 
                    Titulo = "Vehículos Inteligentes"
                    Texto = "El proyecto busca desarrollar una plataforma para un vehículo todo terreno, completamente eléctrico e instrumentado. 
                    Buscando la aplicación de algoritmos inteligentes y fusión de sensores para el procesamiento y con ellos generar sistemas de seguridad para la asistencia a la conducción."
                    enlace = "#"
                    enlaceTitulo = "Read More"
                />
            </div>
        </div>
        <div className={styles.containerTab}>
            <div className={styles.cardTab}>
                <CardTab
                    TituloT0 = "Inteligencia Artificial"
                    TextoT0 = "Eros mauris tincidunt litora varius nec porta feugiat magna, sollicitudin est eu curabitur torquent fringilla ullamcorper commodo, hac tempor tellus in odio accumsan auctor. Curae porttitor ultricies mi sem libero blandit litora ante suspendisse magnis, netus eu sed fames mattis hendrerit ad bibendum montes gravida, sodales convallis class pellentesque mus scelerisque erat sociosqu pharetra. Libero conubia quisque condimentum cursus curae nostra sociosqu nibh sapien donec, ac natoque ultrices sagittis elementum nam auctor penatibus ridiculus mollis suspendisse, parturient erat turpis orci ultricies enim neque tristique habitasse. Sagittis conubia nullam mi pharetra etiam ac consequat orci, commodo sed justo turpis quisque nascetur sociis per, ligula pulvinar varius pellentesque torquent proin ridiculus."
                    TituloT1 = "Mecatrónica"
                    TextoT1 = "Eros mauris tincidunt litora varius nec porta feugiat magna, sollicitudin est eu curabitur torquent fringilla ullamcorper commodo, hac tempor tellus in odio accumsan auctor. Curae porttitor ultricies mi sem libero blandit litora ante suspendisse magnis, netus eu sed fames mattis hendrerit ad bibendum montes gravida, sodales convallis class pellentesque mus scelerisque erat sociosqu pharetra. Libero conubia quisque condimentum cursus curae nostra sociosqu nibh sapien donec, ac natoque ultrices sagittis elementum nam auctor penatibus ridiculus mollis suspendisse, parturient erat turpis orci ultricies enim neque tristique habitasse. Sagittis conubia nullam mi pharetra etiam ac consequat orci, commodo sed justo turpis quisque nascetur sociis per, ligula pulvinar varius pellentesque torquent proin ridiculus."
                    TituloT2 = "Energía"
                    TextoT2 = "LoEros mauris tincidunt litora varius nec porta feugiat magna, sollicitudin est eu curabitur torquent fringilla ullamcorper commodo, hac tempor tellus in odio accumsan auctor. Curae porttitor ultricies mi sem libero blandit litora ante suspendisse magnis, netus eu sed fames mattis hendrerit ad bibendum montes gravida, sodales convallis class pellentesque mus scelerisque erat sociosqu pharetra. Libero conubia quisque condimentum cursus curae nostra sociosqu nibh sapien donec, ac natoque ultrices sagittis elementum nam auctor penatibus ridiculus mollis suspendisse, parturient erat turpis orci ultricies enim neque tristique habitasse. Sagittis conubia nullam mi pharetra etiam ac consequat orci, commodo sed justo turpis quisque nascetur sociis per, ligula pulvinar varius pellentesque torquent proin ridiculus.rem"
                    TituloT3 = "Comunicación"
                    TextoT3 = "Eros mauris tincidunt litora varius nec porta feugiat magna, sollicitudin est eu curabitur torquent fringilla ullamcorper commodo, hac tempor tellus in odio accumsan auctor. Curae porttitor ultricies mi sem libero blandit litora ante suspendisse magnis, netus eu sed fames mattis hendrerit ad bibendum montes gravida, sodales convallis class pellentesque mus scelerisque erat sociosqu pharetra. Libero conubia quisque condimentum cursus curae nostra sociosqu nibh sapien donec, ac natoque ultrices sagittis elementum nam auctor penatibus ridiculus mollis suspendisse, parturient erat turpis orci ultricies enim neque tristique habitasse. Sagittis conubia nullam mi pharetra etiam ac consequat orci, commodo sed justo turpis quisque nascetur sociis per, ligula pulvinar varius pellentesque torquent proin ridiculus."
                    TituloT4 = "Bioinstrumentación"
                    TextoT4 = "Eros mauris tincidunt litora varius nec porta feugiat magna, sollicitudin est eu curabitur torquent fringilla ullamcorper commodo, hac tempor tellus in odio accumsan auctor. Curae porttitor ultricies mi sem libero blandit litora ante suspendisse magnis, netus eu sed fames mattis hendrerit ad bibendum montes gravida, sodales convallis class pellentesque mus scelerisque erat sociosqu pharetra. Libero conubia quisque condimentum cursus curae nostra sociosqu nibh sapien donec, ac natoque ultrices sagittis elementum nam auctor penatibus ridiculus mollis suspendisse, parturient erat turpis orci ultricies enim neque tristique habitasse. Sagittis conubia nullam mi pharetra etiam ac consequat orci, commodo sed justo turpis quisque nascetur sociis per, ligula pulvinar varius pellentesque torquent proin ridiculus."
                />
            </div>
        </div>
        
    </div>);
}

export default Jorge;