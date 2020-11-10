import React from 'react';
import Timeline from './components/Timeline';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

let es_strings = require("./strings/domo.html.json");
let en_strings = require("./strings/domo-eng.html.json");
let title = "Domótica Emocional"

let description = '<++>';

//SPACE FOR i18n here
let strings = es_strings;

let DomoticPage= () => {
    return (
        // TODO REMOVE THEME PROV
        <>
                <Navbar/>
                <Timeline items={strings} title={title} description={description}/>
                <Footer/>
        </>
    )
}


export default DomoticPage;
