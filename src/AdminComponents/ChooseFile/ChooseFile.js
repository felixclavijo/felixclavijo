import React from "react";

import "./ChooseFile.scss";

// prettier-ignore
function ChooseFile(props) {
    return (
        <>
            <div className="choosefile">
                <span>{props.name}</span>
                <label htmlFor={props.id}>Choose</label>
                <input type="file" id={props.id} onChange={props.onChange} style={{ display: 'none' }}/>
            </div>
            <div id={`error${props.id}`} style={{color: 'red', fontWeight: '500', display: 'none'}}>File Size more than 500KB</div>
        </>
    );
}

export default ChooseFile;
