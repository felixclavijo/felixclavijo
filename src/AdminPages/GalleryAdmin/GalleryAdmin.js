import React from "react";

import "./GalleryAdmin.scss";
import Accordion from "../../AdminComponents/Acoordion/Acoordion";
import Dropdown from "../../AdminComponents/Dropdown/Dropdown";
import AddProject from "../../AdminComponents/AddProject/AddProject";
import { connect } from "react-redux";

// prettier-ignore
function GalleryAdmin({ sidebarshow, ...props }) {

    const { admin } = props

    return (
        <div className={`galleryadmin ${!sidebarshow ? "page" : "page page-with-navbar"}`}>
            <div className="title">
                <h3>Gallery</h3>
                <hr className="line_hr" />

                <div>
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#addproject">
                        Add project
                    </button>
                    <AddProject />
                    {
                        admin?.projects.data.map((gallery, index) =>
                            <Dropdown key={index} id={gallery.id} title={gallery.title} comp={<Accordion gallery={gallery} />} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin,
    };
};

export default connect(mapStateToProps)(GalleryAdmin);
