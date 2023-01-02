import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { services_data } from "../../Data/Services_data";

import "./Services.scss";
import { connect } from "react-redux";

// prettier-ignore
function Services(props) {

    const { onlineAdmin } = props
    
    return (
        <div className="services padding-whole-theme">
            <div className="container-fluid">
                <div className="row">
                    {
                        onlineAdmin?.home.services?.map((service, i) => 
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

const mapStateToProps = (state) => {
    return {
        onlineAdmin: state.onlineAdmin,
    };
};

export default connect(mapStateToProps)(Services);
