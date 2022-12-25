import React from "react";

import "./HomeAdmin.scss";

// prettier-ignore
function HomeAdmin({ sidebarshow }) {
    return (
        <div className={!sidebarshow ? "page" : "page page-with-navbar"}>
            <h3>HomeAdmin</h3>
        </div>
    );
}

export default HomeAdmin;
