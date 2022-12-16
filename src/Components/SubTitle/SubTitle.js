import React from "react";

import "./SubTitle.scss";

// prettier-ignore
function SubTitle({ title, desc, txt_decoration }) {
    return (
        <div className="subtitle_top mb-3">
         
            <h2 className= {txt_decoration ? "subtitle_title" :  "subtitle_title_decoration" } >{title}</h2>
            <p className="subtitle_desc">{desc}</p>
        </div>
    );
}

export default SubTitle;
