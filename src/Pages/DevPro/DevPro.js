import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import SingleNews from "../../Components/SingleNews/SingleNews";
import SubTitle from "../../Components/SubTitle/SubTitle";
import { ThemeContext } from "../../context/ThemeContext";
import { AnimationFade, AnimationIn } from "../../styles/animations/fadein";

import "./DevPro.scss";

// prettier-ignore
function DevPro(props) {

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
        <div className="devpro padding-whole-theme">
            <SubTitle 
                title={onlineAdmin?.devpro.phrase.title}
                desc={onlineAdmin?.devpro.phrase.description}
            />
            <div className="devpro_features">
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-md">
                            <div className="devpro_img_container d-flex justify-content-center">
                                <img src={require('../../assets/Group 20.png')} alt="news_icons" className="devpro_img" />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="devpro_img_container d-flex justify-content-center">
                                <img src={require('../../assets/Group 21.png')} alt="news_icons" className="devpro_img" />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="devpro_img_container d-flex justify-content-center">
                                <img src={require('../../assets/Group 22.png')} alt="news_icons" className="devpro_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news_all">
                {
                    onlineAdmin?.devpro.data.map((devpro, i) => 
                        i%2 === 0
                        ? <SingleNews id={devpro.id} image={devpro.image} title={devpro.title} desc={devpro.description} reverse={true} key={i} />
                        : <SingleNews id={devpro.id} image={devpro.image} title={devpro.title} desc={devpro.description} key={i} />
                    )
                }
                {/* <SingleNews id={news_data[1].id} image={news_data[1].image} title={news_data[1].title} desc={news_data[1].desc} /> */}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        onlineAdmin: state.onlineAdmin,
    };
};

export default connect(mapStateToProps)(DevPro);
