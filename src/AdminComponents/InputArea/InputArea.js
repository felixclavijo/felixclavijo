import React from "react";

import "./InputArea.scss";

// prettier-ignore
function InputArea(props) {
    return (
        <div className="inputarea">
            {
                props.name === 'Phrase'
                ? <h4 className="text-center">{props.name}</h4>
                : <h6 className="text-start" style={{ fontWeight: '700'}}>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h6>
            }
            <textarea 
                name={props.name} 
                type={props.type} 
                value={props.value} 
                defaultValue={props.defaultValue} 
                onChange={props.onChange} 
                onBlur={props.handleBlur}
                placeholder={props.placeholder} 
                rows={props.rows}
            />
            {props.error && props.touched && <div className="text-danger text-start">{props.error}</div>}
        </div>
    );
}

export default InputArea;
