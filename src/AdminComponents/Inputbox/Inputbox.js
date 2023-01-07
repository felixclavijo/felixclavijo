import React from "react";

import "./Inputbox.scss";

// prettier-ignore
function Inputbox(props) {
    return (
        <div className={ "inputbox"} style={{margin : "15px 0px" }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 d-flex align-items-center justify-content-center title_box">{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</div>
                    <div className="col p-0 d-flex align-items-center justify-content-center input_box">
                        <input 
                            name={props.name} 
                            type={props.type} 
                            value={props.value} 
                            defaultValue={props.defaultValue} 
                            placeholder={props.placeholder} 
                            onChange={props.onChange} 
                            onBlur={props.handleBlur}
                            className="w-100 h-100" />
                    </div>
                </div>
                {props.error && props.touched && <div className="text-danger text-start">{props.error}</div>}
            </div>
        </div>
    );
}

export default Inputbox;
