import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { services_data } from "../../Data/Services_data";

import "./Services.scss";

// prettier-ignore
function Services() {
    
    return (
        <div className="services padding-whole-theme">
            <div className="container-fluid">
                <div className="row">
                    {
                        services_data?.map((service, i) => 
                            <div className="col-md-4 FadeLeft" key={i}>
                                <div className="d-flex align-items-center justify-content-center my-2">
                                    <FontAwesomeIcon icon='circle-check' className="check_icon" />
                                    <h4 className="text-theme mx-2">{service}</h4>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Services;
