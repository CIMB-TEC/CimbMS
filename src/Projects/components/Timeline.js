import React from 'react';
import "./scss/style.css";
import Link from "@chakra-ui/core/dist/Link";
import Button from "@chakra-ui/core/dist/Button";

let TimelineItem = (props) => {
    // const { isOpen, onOpen, onClose } = useDisclosure();
    const [showResults, setShowResults] = React.useState(false);
    const onClick = () => setShowResults(!showResults);
    return (
        <li className="timeline-item" onClick={onClick}>
            <div className="timeline-info">
                <span>{props.date}</span>
            </div>
            <div className="timeline-marker"/>
            <div className="timeline-content">
                <h3 className="timeline-title">{props.title}</h3>
                {showResults ? <Details description={props.description} poster={props.poster}/> : null}
            </div>
        </li>
    );

}
let Details = (props) => {
    return (
        <div className="timeline-description">
            <p dangerouslySetInnerHTML={{__html: props.description}}/>
            {/*<Image src={props.images[0]}/>*/}
            {/*<Button onClick={onOpen}>Open Modal</Button>*/}
            {/*<Modal isOpen={isOpen} onClose={onClose}>*/}
            {/*    <ModalOverlay />*/}
            {/*    <ModalContent>*/}
            {/*        <ModalCloseButton />*/}
            {/*        <ModalBody>*/}
            {/*            <p>This is the body</p>*/}
            {/*        </ModalBody>*/}
            {/*    </ModalContent>*/}
            {/*</Modal>*/}
            <Button>
                <Link href={props.poster}>Descargar Poster</Link>
            </Button>
        </div>
    )
}

let Timeline = (props) => {
    let items = [];
    props.items.forEach((item) => {
        let date = item.date;
        let notFirst = false;
        return (
            item.projects.forEach((project) => {
                notFirst ? date = "" : null;
                items.push(
                    <TimelineItem date={date} title={project.title} description={project.desc}
                                  images={project.images} poster={project.poster}/>
                )
                notFirst = true;
            })
        )
    })
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
                        {items}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Timeline;
