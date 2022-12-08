import React from "react";

import "./Hero.scss";

// prettier-ignore
function Hero() {
    return (
        <div className="hero">
            <div className="hero_wrapper">
                <img src={require('../../assets/Images/WhatsApp Image 2022-12-08 at 6.05.47 PM (1).jpeg')} alt="Hero" className="hero_img" />
            </div>
            <div className="hero_title">
                <img src={require('../../assets/5.png')} style={{ height: 150, borderRadius: 5, marginRight: 5 }} alt="Logo" />
                <h1>FELIX <span className="format_clavijo">CLAVIJO</span></h1>
                <p className="text-center">Somos un estudio de arquitectura que ha evolucionando hasta convertirse en una empresa pensada por y para inversores.</p>
            </div>
            <div className="mouse">
                <div className="mouse_outer"></div>
                <div className="mouse_scrollwheel"></div>
            </div>
        </div>
    );
}

export default Hero;
