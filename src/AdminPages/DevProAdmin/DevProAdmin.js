import React from "react";

import "./DevProAdmin.scss";

// prettier-ignore
function DevProAdmin({ sidebarshow }) {
    return (
        <div className={!sidebarshow ? "page" : "page page-with-navbar"}>
            <div className="title">
                <h3>DevPro</h3>
                <hr className="line_hr" />
            </div>
        </div>
    );
}

export default DevProAdmin;
