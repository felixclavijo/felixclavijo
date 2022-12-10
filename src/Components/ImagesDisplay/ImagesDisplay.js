import React from "react";

import "./ImagesDisplay.scss";

// prettier-ignore
function ImagesDisplay() {
    return (
        <div className="imagesdisplay padding-whole-theme">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md">
                        <div className="image_container">
                            <div className="title">
                                <h2>ARQUITECTURA</h2>
                            </div>
                            <div className="img_wrapper">
                                <img src={require('../../assets/Images/WhatsApp Image 2022-12-08 at 6.05.48 PM.jpeg')} alt="display" className="img_img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="image_container">
                            <div className="title">
                                <h2>DESARROLLO</h2>
                            </div>
                            <div className="img_wrapper">
                            <img src={require('../../assets/Images/WhatsApp Image 2022-12-08 at 6.05.47 PM.jpeg')} alt="display" className="img_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImagesDisplay;
