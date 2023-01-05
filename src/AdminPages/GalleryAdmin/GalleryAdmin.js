import React from "react";

import "./GalleryAdmin.scss";
import Accordion from "../../AdminComponents/Acoordion/Acoordion";
// prettier-ignore
function GalleryAdmin({ sidebarshow }) {


const returnProject= ()=>{
 return (
            <div>
              EmployeeManagement
            </div>
          );
    }



    return (
        <div className={`galleryadmin ${!sidebarshow ? "page" : "page page-with-navbar"}`}>
            <div className="title">
                <h3>Gallery</h3>
                <hr className="line_hr" />


                <div>
                <button className="btn" onClick={()=>returnProject()}>Add project</button>
                <Accordion name={"Project 1"}/>
       
                </div>
            </div>
        </div>
    );
}

export default GalleryAdmin;
