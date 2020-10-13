import React from 'react';
import "./scss/style.css";

let TimelineItem = (date, title, description) => {
    return (
        <li className="timeline-item">
            <div className="timeline-info">
                <span>{date}</span>
            </div>
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <h3 className="timeline-title">{title}</h3>
                <p>{description}</p>
            </div>
        </li>
    )

}

let Timeline = (items, title, description) => {
    return (
        <>
        <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"/>
            <script
                src="https://code.jquery.com/jquery-3.5.1.min.js"
                integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                crossOrigin="anonymous"></script>

            <div className="container-fluid">
            <div className="col-md-12 example-title">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
                <ul className="timeline timeline-centered">
                    {
                        items.map(item => {
                            return (TimelineItem(item.date, item.title, item.description))
                        }
                    )
                    }
                </ul>
            </div>
        </div></>
    )
}

export default  Timeline;
