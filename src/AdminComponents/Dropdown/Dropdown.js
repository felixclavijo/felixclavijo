import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./Dropdown.scss";

// prettier-ignore
function Dropdown({ id, title, desc }) {

    const expcol = (e) => {
        // for (var i = 0; i < coll.length; i++) {
        //     coll[i].addEventListener("click", function() {
                e.target.classList.toggle("active");
                var content = e.target.nextElementSibling;
                if (content.style.maxHeight){
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
        //     });
        // }
    }

    return (
        <div className="dropdown">
            <div id={id} className="collapsible" onClick={expcol}>
                <div>
                    <span className="id_span">{id}</span> {title}
                </div>
                <div className="side_icons">
                    <button className="btn icon_style" onClick={() => console.log('clicked here')}><FontAwesomeIcon icon="trash" /></button>
                    <FontAwesomeIcon icon="angle-down" />
                </div>
            </div>
            <div className="content">
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default Dropdown;
