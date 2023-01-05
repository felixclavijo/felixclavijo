import React from "react";

import "./GalleryAdmin.scss";
import Accordion from "../../AdminComponents/Acoordion/Acoordion";
import { gallery_data } from "../../Data/Gallery_data";
import Dropdown from "../../AdminComponents/Dropdown/Dropdown";

// prettier-ignore
function GalleryAdmin({ sidebarshow }) {
    const returnProject = () => {
        return <div>EmployeeManagement</div>;
    };

    return (
        <div className={`galleryadmin ${!sidebarshow ? "page" : "page page-with-navbar"}`}>
            <div className="title">
                <h3>Gallery</h3>
                <hr className="line_hr" />

                <div>
                    <button className="btn" onClick={() => returnProject()}>
                        Add project
                    </button>
                    {
                        gallery_data?.map((gallery, index) =>
                            <Dropdown key={index} id={gallery.id} title={gallery.title} comp={<Accordion gallery={gallery} />} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default GalleryAdmin;
