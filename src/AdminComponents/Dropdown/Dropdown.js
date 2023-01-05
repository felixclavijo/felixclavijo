import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./Dropdown.scss";

// prettier-ignore
function Dropdown({ id, title, comp }) {

    const expcol = (e) => {
        e.target.classList.toggle("active");
        var content = e.target.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

    return (
        <div className="dropdown">
            <div id={id} className="collapsible" onClick={expcol}>
                <div>
                    <span className="id_span">{id}.</span> {title}
                </div>
                <div className="side_icons">
                    <button className="icon_style" onClick={() => console.log('clicked here')}><FontAwesomeIcon icon="trash" /></button>
                    <FontAwesomeIcon icon="angle-down" />
                </div>
            </div>
            <div className="content">
                {comp}
            </div>
        </div>
    );
}

export default Dropdown;
