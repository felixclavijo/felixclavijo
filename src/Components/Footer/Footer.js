import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { navigation_data } from "../../Data/Navigation_data";

import "./Footer.scss";

// prettier-ignore
function Footer() {

    const { pathname, setPathname } = useContext(ThemeContext)

    return (
        <div className="footer background-theme text-theme">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg col_margin">
                        <img src={require('../../assets/Felix Clavijo 1.png')} alt='footerLogo' style={{ borderRadius: 5 }} className="image_style" />
                        <p className="my-4">Diseñamos personas inspiradas Experiencias que crean positivo cambio en la vida de las personas.</p>
                        <div className="image_align">
                            <img src={require('../../assets/QR-code-obituary.svg.webp')} alt='footerLogo' style={{ height: 90, borderRadius: 5 }} />
                        </div>
                    </div>
                    <div className="col-lg col_margin">
                        <span style={{ fontSize: 25, fontWeight: 600 }}>Useful Links</span>
                        <ul>
                            {
                                navigation_data?.map((nav, i) => 
                                    <li key={i}>
                                        <Link to={nav.path} className={`nav-link text-theme ${pathname === nav.path ? 'active' : ''}`} onClick={() => setPathname(nav.path)}>
                                            {nav.title}
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="col-lg col_margin">
                        <span style={{ fontSize: 25, fontWeight: 600 }}>Información</span>
                        <div className="container-fluid">
                            <div className="row my-3">
                                <div className="col-2">
                                    <FontAwesomeIcon icon="location-dot" className="text-theme" style={{ fontSize: 20 }} />
                                </div>
                                <div className="col-10">
                                    <span>Nazca 366, Flores, CABA</span>
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col-2">
                                    <FontAwesomeIcon icon="envelope" className="text-theme" style={{ fontSize: 20 }} />
                                </div>
                                <div className="col-10">
                                    <span>felixclavijo@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg col_margin">
                        <span style={{ fontSize: 25, fontWeight: 600 }}>Redes sociales</span>
                        <div className="d-flex my-3">
                            <div className="icon-theme mx-1">
                                <FontAwesomeIcon icon="fa-brands fa-instagram" />
                            </div>
                            <div className="icon-theme mx-1">
                                <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                            </div>
                            <div className="icon-theme mx-1">
                                <FontAwesomeIcon icon="fa-brands fa-whatsapp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
