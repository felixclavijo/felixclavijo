import React from "react";

import "./NewsAdmin.scss";

// prettier-ignore
function NewsAdmin({ sidebarshow }) {
    return (
        <div className={!sidebarshow ? "page" : "page page-with-navbar"}>
            <h3>NewsAdmin</h3>
        </div>
    );
}

export default NewsAdmin;
