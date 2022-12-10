import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "./Features.scss";

// prettier-ignore
function Features({ image, title, desc, reverse=false }) {

    const [changing, setChanging] = useState(true)

    const { setImg_height } = useContext(ThemeContext)

    const interChange = () => {
        if(window.innerWidth < 768) {
            setChanging(false)
        } else {
            setChanging(true)
        }
    }

    const handleImg = (e) => {
        setImg_height(e.target.clientHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', interChange)
        
        return () => window.removeEventListener('resize', interChange)
    }, [])
    return (
        <div className="features padding-whole-theme">
            <div className="container-fluid">
                <div className="row">
                    <div className={`col-md  d-flex justify-content-center ${reverse && changing ? 'flex-column' : ''}`}>
                        {
                            reverse && changing
                            ? <div className="FadeLeft">
                                <h1 >{title}</h1>
                                <hr className="line_hr" />
                                <span>{desc}</span>
                            </div>
                            : <div className="features_wrapper FadeLeft">
                                <img src={require('../../assets/Images/WhatsApp Image 2022-12-08 at 6.05.50 PM.jpeg')} alt="features" className="features_img" onLoad={handleImg} />
                            </div>
                            
                        }
                    </div>
                    <div className={`col-md  d-flex justify-content-center ${reverse && changing ? '' : 'flex-column'}`}>
                        {
                            reverse && changing
                            ? <div className="features_wrapper FadeRight">
                                <img src={require('../../assets/Images/WhatsApp Image 2022-12-08 at 6.05.50 PM (1).jpeg')} alt="features" className="features_img" />
                            </div>
                            : <div className="FadeRight">
                                <h1>{title}</h1>
                                <hr className="line_hr" />
                                <span>{desc}</span>
                            </div>
                            
                        }
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Features;
