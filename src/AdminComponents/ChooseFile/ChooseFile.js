import React from "react";

import "./ChooseFile.scss";

// prettier-ignore
function ChooseFile(props) {
    return (
        <div className="choosefile">
            <span>{props.name}</span>
            <label htmlFor="fileUpload">Choose</label>
            <input type="file" id="fileUpload" style={{ display: 'none' }}/>
        </div>
    );
}

export default ChooseFile;
