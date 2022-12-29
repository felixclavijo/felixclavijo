import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./CategoryInput.scss";

// prettier-ignore
function CategoryInput({ add=false, ...props }) {
    return (
        <div className="categoriesinput">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-center title_box">{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</div>
                    <div className="col p-0 d-flex align-items-center justify-content-center input_box">
                        <input {...props} className="w-100 h-100" />
                        <div className="icon_box">
                            <FontAwesomeIcon icon={add ? "plus" : "minus"} className="icon_style" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryInput;
