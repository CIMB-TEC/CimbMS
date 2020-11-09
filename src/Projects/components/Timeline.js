import 'react-app-polyfill/stable';
import React from 'react';
import "./scss/style.css";

let TimelineItem = (props) => {
    return (
        <li className="timeline-item">
            <div className="timeline-info">
                <span>{props.date}</span>
            </div>
            <div className="timeline-marker"/>
            <div className="timeline-content">
                <h3 className="timeline-title">{props.title}</h3>
            </div>
            <div className="timeline-description">
                <p>{props.description}</p>
                <a>Descargar Poster</a>
            </div>
        </li>
    )

}

let Timeline = (props) => {
    return (
        <>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
            <script
                src="https://code.jquery.com/jquery-3.5.1.min.js"
                integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                crossOrigin="anonymous"/>

            <div className="container-fluid">
                <div className="col-md-12 example-title">
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-12">
                    <ul className="timeline timeline-split">
                        {
                            props.items.map(item => {
                                return (
                                    <TimelineItem date={item.date} title={item.title} description={item.desc1} />
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Timeline;
