import React from "react";

import "./GalleryAdmin.scss";

// prettier-ignore
function GalleryAdmin({ sidebarshow }) {
    return (
        <div className={!sidebarshow ? "page" : "page page-with-navbar"}>
            <h3>GalleryAdmin</h3>
        </div>
    );
}

export default GalleryAdmin;
