import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";

import "./Dropdown.scss";

// prettier-ignore
function Dropdown({ id, title, comp, ...props }) {

    const { admin, adminInsert } = props

    const expcol = (e) => {
        e.target.classList.toggle("active");
        if(e.target.nextElementSibling) e.target.nextElementSibling.classList.toggle("active")
        var content = null;
        if(e.target.nextElementSibling) content = e.target.nextElementSibling.nextElementSibling;
        if(content) {
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        }
    }

    const removeProject = () => {
        var adminupd = {
            ...admin,
            projects: {
                ...admin.projects,
                data: admin.projects.data.filter((ele, i) => i+1 !== id)
            }
        }
        adminInsert(adminupd)
    }

    return (
        <div className="dropdown">
            <div id={id} className="collapsible" onClick={expcol}>
                <span className="id_span">{id}.&nbsp;</span> {title}
            </div>
            <div className="side_icons">
                <button type="button" className="icon_style" onClick={removeProject}><FontAwesomeIcon icon="trash" /></button>
                <FontAwesomeIcon icon="angle-down" />
            </div>
            <div className="content">
                {comp}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        adminInsert: (val) => {
            dispatch({
                type: "ADMIN",
                item: val,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
