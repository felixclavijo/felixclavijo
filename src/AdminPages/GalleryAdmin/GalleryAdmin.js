import React from "react";

import "./GalleryAdmin.scss";
import Accordion from "../../AdminComponents/Acoordion/Acoordion";
// prettier-ignore
function GalleryAdmin({ sidebarshow }) {
    return (
        <div className={`galleryadmin ${!sidebarshow ? "page" : "page page-with-navbar"}`}>
            <div className="title">
                <h3>Gallery</h3>
                <hr className="line_hr" />


                <div>
                <button className="btn">Add project</button>
                <Accordion/>
                <Accordion/>
                </div>
            </div>
        </div>
    );
}

export default GalleryAdmin;
