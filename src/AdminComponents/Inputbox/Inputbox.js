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
                        <input name={props.name} type={props.type} defaultValue={props.defaultValue} placeholder={props.placeholder} onChange={props.onChange} className="w-100 h-100" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inputbox;
