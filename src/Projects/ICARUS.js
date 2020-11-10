import React from 'react';
import Timeline from './components/Timeline';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

let es_strings = require("./strings/icarus.html.json");
let en_strings = require("./strings/icarus.html.json");

let description = '';

//SPACE FOR i18n here
let strings = es_strings;

let ICARUSPage = () => {
    return (
        <>
                <Navbar/>
                <Timeline items={strings} title="ICARUS" description={description}/>
                <Footer/>
        </>
    )
}


export default ICARUSPage;
