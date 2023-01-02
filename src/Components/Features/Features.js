import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import "./Features.scss";

// prettier-ignore
function Features({ id, image, video, title, desc, reverse=false }) {

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

    function readURL(input, id) {
        if (input) {
            var reader = new FileReader();
        
            reader.onload = function (e) {
                document.getElementById(id).src = e.target.result;
            };
        
            reader.readAsDataURL(input);
        }
    }

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
                                {
                                    image === null
                                    ? <video className="features_img" onLoad={handleImg} id={id} loop muted autoPlay>
                                        <source src={typeof video === 'object' ? readURL(video, id) : video} type="video/mp4" />
                                    </video>
                                    : <img src={typeof image === 'object' ? readURL(image, id) : image} alt="features" className="features_img" id={id} onLoad={handleImg} />
                                }
                            </div>
                            
                        }
                    </div>
                    <div className={`col-md  d-flex justify-content-center ${reverse && changing ? '' : 'flex-column'}`}>
                        {
                            reverse && changing
                            ? <div className="features_wrapper FadeRight">
                                {
                                    image === null
                                    ? <video className="features_img" onLoad={handleImg} id={id} loop muted autoPlay>
                                        <source src={typeof video === 'object' ? readURL(video, id) : video} type="video/mp4"/>
                                    </video>
                                    : <img src={typeof image === 'object' ? readURL(image, id) : image} alt="features" className="features_img" id={id} onLoad={handleImg} />
                                }
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
