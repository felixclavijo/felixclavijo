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
                            ? <div className="FadeLeft my-4">
                                <h1>{title}</h1>
                                <hr className="line_hr" />
                                <span>{desc}</span>
                            </div>
                            : <div className="features_wrapper FadeLeft">
                                <img src={image} alt="features" className="features_img" onLoad={handleImg} />
                            </div>
                            
                        }
                    </div>
                    <div className={`col-md  d-flex justify-content-center ${reverse && changing ? '' : 'flex-column'}`}>
                        {
                            reverse && changing
                            ? <div className="features_wrapper FadeRight">
                                <img src={image} alt="features" className="features_img" />
                            </div>
                            : <div className="FadeRight my-4">
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
