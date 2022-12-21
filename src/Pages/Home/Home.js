import React, { useContext, useEffect } from "react";
import Features from "../../Components/Features/Features";

import Hero from "../../Components/Hero/Hero";
import ImagesDisplay from "../../Components/ImagesDisplay/ImagesDisplay";
import Services from "../../Components/Services/Services";
import { ThemeContext } from "../../context/ThemeContext";
import { features_data } from "../../Data/Features_data";
import { AnimationFade, AnimationIn } from "../../styles/animations/fadein";

import "./Home.scss";

// prettier-ignore
function Home() {

    const { setApp_height } = useContext(ThemeContext)

    useEffect(() => {
        AnimationFade('FadeLeft')
        AnimationFade('FadeRight')
        AnimationIn('LeftIn')
        setApp_height(document.getElementsByClassName('App')[0].clientHeight)
        // AnimationIn('LeftOut')
    }, [setApp_height])
    
    return (
        <div className="home">
            <Hero />
            <Services />
            <div className="padding-whole-theme">
                <div className="side_border">
                    <h1 className="text-theme LeftIn">Diseñando lugares que inspiran alegría y bienestar desde 1935.</h1>
                </div>
            </div>
            <Features image={features_data[0].image} video={features_data[0].video} title={features_data[0].title} desc={features_data[0].desc} />
            <ImagesDisplay />
            <Features image={features_data[1].image} video={features_data[1].video} title={features_data[1].title} desc={features_data[1].desc} reverse={true} />
        </div>
    );
}

export default Home;
