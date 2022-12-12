import React from "react";

import "./SubTitle.scss";

// prettier-ignore
function SubTitle({ title, desc }) {
    return (
        <div className="subtitle_top mb-3">
            <h2 className="subtitle_title">{title}</h2>
            <p className="subtitle_desc">{desc}</p>
        </div>
    );
}

export default SubTitle;
