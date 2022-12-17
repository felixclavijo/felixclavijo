import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./Employee.scss";

// prettier-ignore
function Employee({ name, image, role, resume, anim }) {

    return (
        <div className={`employee ${anim}`}>
            <div className="employee_img_container">
                <img src={image} alt="employee_img" className="employee_img" />
            </div>
            <div className="employee_details">
                <p className="text-center m-0 px-3" style={{fontWeight: '700', fontSize: 20}}>{name}</p>
                <p className="text-center" style={{fontSize: 18}}>{role}</p>
            </div>
            <a href={resume} className="download_btn" download>
                <FontAwesomeIcon icon="download" fontSize={22} />
            </a>
        </div>
    );
}

export default Employee;
