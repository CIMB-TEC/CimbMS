import React from 'react';
import DivulgationSite from './Divulgation/DivulgationSite'
import Menu from "./components/Menu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {ThemeProvider, CSSReset, Text} from "@chakra-ui/core"
import Footer from "./components/Footer";
import mono from "./theme";
import Navbar from "./components/Navbar";
import Skeleton from "./Main/MainSite";
import Slider from "react-slick";

class BlogSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <div>
                    <Text size="xl">CAMANA</Text>
                    <img src="https://picsum.photos/200/300"/>
                    rec                    
                </div>
            </Slider>
        );
    }
}
function LandingPage() {


    return (
        <div>
            <ThemeProvider theme={mono}>
                <Navbar />
                <Menu />
                <BlogSlider />
                <Footer/>
            </ThemeProvider>
        </div>
    );

};

export default LandingPage;

