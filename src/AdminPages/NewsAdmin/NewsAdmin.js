import React from "react";

import "./NewsAdmin.scss";

// prettier-ignore
function NewsAdmin({ sidebarshow }) {
    return (
        <div className={!sidebarshow ? "page" : "page page-with-navbar"}>
            <div className="title">
                <h3>News</h3>
                <hr className="line_hr" />
            </div>
        </div>
    );
}

export default NewsAdmin;
