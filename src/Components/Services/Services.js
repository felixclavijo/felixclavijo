import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
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
                            <div className="col-md-4" key={i}>
                                <div className="d-flex align-items-center my-2">
                                    <FontAwesomeIcon icon='circle-check' className="check_icon" />
                                    <h3 className="text-theme mx-2">{service}</h3>
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
