import React from "react";

import "./DevProAdmin.scss";

// prettier-ignore
function DevProAdmin({ sidebarshow }) {
    return (
        <div className={!sidebarshow ? "page" : "page page-with-navbar"}>
            <h3>DevProAdmin</h3>
        </div>
    );
}

export default DevProAdmin;
