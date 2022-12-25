import React from "react";

import "./GalleryAdmin.scss";

// prettier-ignore
function GalleryAdmin({ sidebarshow }) {
    return (
        <div className={!sidebarshow ? "page" : "page page-with-navbar"}>
            <div className="title">
                <h3>Gallery</h3>
                <hr className="line_hr" />
            </div>
        </div>
    );
}

export default GalleryAdmin;
