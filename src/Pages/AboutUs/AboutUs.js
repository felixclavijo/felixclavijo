import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { AnimationFade, AnimationIn } from "../../styles/animations/fadein";

import Employee from "../../Components/Employee/Employee";
import SubTitle from "../../Components/SubTitle/SubTitle";
import { aboutus } from "../../Data/aboutus_data";

import "./AboutUs.scss";

// prettier-ignore
function AboutUs() {

    const { setApp_height } = useContext(ThemeContext)

    useEffect(() => {
        AnimationFade('FadeLeft')
        AnimationFade('FadeRight')
        AnimationIn('LeftIn')
        setApp_height(document.getElementsByClassName('App')[0].clientHeight)
        // AnimationIn('LeftOut')
    }, [setApp_height])

    return (
        <div className="aboutus">
            <SubTitle
                title="Nuestro Equipo"
                desc="owin nwoifnoiw inoiwe pqpqp njv wiefwo fwnoe woiwnf oiniop pqeione oqwimdwe  owifwei oewifoiw o qwpdpwqd dbvfru bwqoowef ieiwpfpwjpfwpjf" 
            />
            <div className="container-fluid">
                <div className="row">
                    {
                        aboutus?.map((emp, i) =>
                            i%2 === 0
                            ? <div className="col-md-6 d-flex justify-content-center align-items-center" key={i}>
                                <Employee name={emp.name} image={emp.image} role={emp.role} anim="FadeLeft" />
                            </div>
                            : <div className="col-md-6 d-flex justify-content-center align-items-center" key={i}>
                                <Employee name={emp.name} image={emp.image} role={emp.role} anim="FadeRight" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
