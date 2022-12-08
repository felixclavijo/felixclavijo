import React, { useEffect, useState } from "react";

import "./Features.scss";

// prettier-ignore
function Features({ image, title, desc, reverse=false }) {

    const [changing, setChanging] = useState(true)

    const interChange = () => {
        if(window.innerWidth < 768) {
            setChanging(false)
        } else {
            setChanging(true)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', interChange)
    }, [])
    return (
        <div className="features padding-whole-theme">
            <div className="container-fluid">
                <div className="row">
                    <div className={`col-md  d-flex justify-content-center ${reverse && changing ? 'flex-column' : ''}`}>
                        {
                            reverse && changing
                            ? <>
                                <h1>{title}</h1>
                                <hr className="line_hr" />
                                <span>{desc}</span>
                            </>
                            : <div className="features_wrapper">
                                <img src={require('../../assets/Images/WhatsApp Image 2022-12-08 at 6.05.50 PM.jpeg')} alt="features" className="features_img" />
                            </div>
                            
                        }
                    </div>
                    <div className={`col-md  d-flex justify-content-center ${reverse && changing ? '' : 'flex-column'}`}>
                        {
                            reverse && changing
                            ? <div className="features_wrapper">
                                <img src={require('../../assets/Images/WhatsApp Image 2022-12-08 at 6.05.50 PM.jpeg')} alt="features" className="features_img" />
                            </div>
                            : <>
                                <h1>Analizamos cada caso</h1>
                                <hr className="line_hr" />
                                <span>Arreglamos una reunion para hablar del proyecto, ideas, propuestas, etc</span>
                            </>
                            
                        }
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default Features;
