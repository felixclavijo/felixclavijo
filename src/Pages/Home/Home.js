import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import Features from "../../Components/Features/Features";

import Hero from "../../Components/Hero/Hero";
import ImagesDisplay from "../../Components/ImagesDisplay/ImagesDisplay";
import Services from "../../Components/Services/Services";
import { ThemeContext } from "../../context/ThemeContext";
// import { features_data } from "../../Data/Features_data";
import { AnimationFade, AnimationIn } from "../../styles/animations/fadein";

import "./Home.scss";

// prettier-ignore
function Home(props) {

    const { onlineAdmin } = props

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
                    <h1 className="text-theme LeftIn">{onlineAdmin?.home.phrase}</h1>
                </div>
            </div>
            <Features id="feature1" image={onlineAdmin?.home.features[0].image} video={onlineAdmin?.home.features[0].video} title={onlineAdmin?.home.features[0].title} desc={onlineAdmin?.home.features[0].desc} />
            <ImagesDisplay />
            <Features id="feature2" image={onlineAdmin?.home.features[1].image} video={onlineAdmin?.home.features[1].video} title={onlineAdmin?.home.features[1].title} desc={onlineAdmin?.home.features[1].desc} reverse={true} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        onlineAdmin: state.onlineAdmin,
    };
};

export default connect(mapStateToProps)(Home);
