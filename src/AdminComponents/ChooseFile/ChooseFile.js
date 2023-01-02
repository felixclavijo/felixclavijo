import React from "react";

import "./ChooseFile.scss";

// prettier-ignore
function ChooseFile({ ...props}) {
    return (
        <>
            <div className="choosefile">
                <span>{props.name}</span>
                <label htmlFor={props.id}>Choose</label>
                <input type="file" id={props.id} onChange={props.onChange} style={{ display: 'none' }}/>
            </div>
            <div id={`videoerror${props.id}`} style={{color: 'red', fontWeight: '500', display: 'none'}}>Video File Size more than 3MB</div>
            <div id={`imageerror${props.id}`} style={{color: 'red', fontWeight: '500', display: 'none'}}>Image File Size more than 500KB</div>
            <div id={`imgerror${props.id}`} style={{color: 'red', fontWeight: '500', display: 'none'}}>File is not an Image</div>
            <div id={`imgandviderror${props.id}`} style={{color: 'red', fontWeight: '500', display: 'none'}}>File is not an Image or video</div>
        </>
    );
}

export default ChooseFile;
