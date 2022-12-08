import React from "react";
import Features from "../../Components/Features/Features";

import Hero from "../../Components/Hero/Hero";
import ImagesDisplay from "../../Components/ImagesDisplay/ImagesDisplay";
import Services from "../../Components/Services/Services";
import { features_data } from "../../Data/Features_data";

import "./Home.scss";

// prettier-ignore
function Home() {
    
    return (
        <div className="home">
            <Hero />
            <Services />
            <div className=" padding-whole-theme">
                <h1 className="text-theme side_border">Diseñando lugares que inspiran alegría y bienestar desde 1935.</h1>
            </div>
            <Features image={features_data[0].image} title={features_data[0].title} desc={features_data[0].desc} />
            <ImagesDisplay />
            <Features image={features_data[1].image} title={features_data[1].title} desc={features_data[1].desc} reverse={true} />
        </div>
    );
}

export default Home;
