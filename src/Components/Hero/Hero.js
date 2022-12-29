import React from "react";
import { connect } from "react-redux";

import "./Hero.scss";

// prettier-ignore
function Hero(props) {

    const { onlineAdmin } = props

    return (
        <div className="hero">
            <div className="hero_wrapper">
                <img src={onlineAdmin?.home.hero.backgroundImg} alt="Hero" className="hero_img" />
            </div>
            <div className="hero_title">
                <img src={onlineAdmin?.home.hero.logoImg} style={{ height: 150, borderRadius: 5, marginRight: 5 }} alt="Logo" />
                <h1>
                    {
                        onlineAdmin?.home.hero.title.split(' ').map((t, i) => 
                            i%2
                            ? <span className="format_clavijo" key={i}> {t} </span>
                            : t
                        )
                    }
                </h1>
                <p className="text-center">{onlineAdmin?.home.hero.phrase}</p>
            </div>
            <div className="mouse">
                <div className="mouse_outer"></div>
                <div className="mouse_scrollwheel"></div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        onlineAdmin: state.onlineAdmin,
    };
};

export default connect(mapStateToProps)(Hero);
