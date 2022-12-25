import React from "react";

import "./AboutUsAdmin.scss";

// prettier-ignore
function AboutUsAdmin({ sidebarshow }) {
    return (
        <div className={!sidebarshow ? "page" : "page page-with-navbar"}>
            <h3>AboutUsAdmin</h3>
        </div>
    );
}

export default AboutUsAdmin;
