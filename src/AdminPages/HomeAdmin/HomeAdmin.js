import React from "react";

import "./HomeAdmin.scss";

// prettier-ignore
function HomeAdmin({ sidebarshow }) {
    return (
        <div className={`homeadmin ${!sidebarshow ? "page" : "page page-with-navbar"}`}>
            <div className="title">
                <h3>Home</h3>
                <hr className="line_hr" />
            </div>
        </div>
    );
}

export default HomeAdmin;
