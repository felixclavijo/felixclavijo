import React from "react";

import "./AboutUsAdmin.scss";

// prettier-ignore
function AboutUsAdmin({ sidebarshow }) {
    return (
        <div className={!sidebarshow ? "page" : "page page-with-navbar"}>
            <div className="title">
                <h3>About Us</h3>
                <hr className="line_hr" />
            </div>
        </div>
    );
}

export default AboutUsAdmin;
