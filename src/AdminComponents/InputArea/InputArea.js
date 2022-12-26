import React from "react";

import "./InputArea.scss";

// prettier-ignore
function InputArea(props) {
    return (
        <div className="inputarea">
            {
                props.name === 'Phrase'
                ? <h4 className="text-center">{props.name}</h4>
                : <h6 style={{ fontWeight: '700'}}>{props.name}</h6>
            }
            <textarea {...props} />
        </div>
    );
}

export default InputArea;
