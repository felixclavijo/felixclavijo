import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { navigation_data } from "../../Data/Navigation_data";
import ModalContact from "./../ModalContact/ModalContact";

import "./Navigation.scss";

// prettier-ignore
function Navigation() {

    const { theme, setTheme, pathname, setPathname } = useContext(ThemeContext)

    return (
        <div className="front">
            <nav className={`navbar navbar-expand-lg background-theme`}>
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <img src={require('../../assets/Removal-623 1.png')} style={{ height: 70, borderRadius: 5, marginRight: 5 }} alt="Logo" />
                        <div className="d-flex flex-column">
                            <img src={theme === 'light' ? require('../../assets/Light-FELIX CLAVIJO.png') : require('../../assets/Dark-FELIX CLAVIJO.png')} style={{ width: 100, borderRadius: 5, marginBottom: 5 }} alt="Logo" />
                            <img src={theme === 'light' ? require('../../assets/Light-ARQUITECTURA.png') : require('../../assets/Dark-ARQUITECTURA.png')} style={{ width: 80, borderRadius: 5 }} alt="Logo" />
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon="bars" className="text-theme" />
                        {/* <span className="navbar-toggler-icon"></span> */}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                navigation_data?.map((navigation, i) =>
                                    <li className="nav-item" key={i}>
                                        <Link to={navigation.path} className={`nav-link text-theme ${pathname === navigation.path ? 'active primary-theme' : ''}`} onClick={() => setPathname(navigation.path)}>
                                            {navigation.title}
                                        </Link>
                                    </li>
                                )
                            }
                            <li className="nav-item">
                                <button className="button-theme" data-bs-toggle="modal" data-bs-target="#contactModal">Contact Us</button>
                            </li>
                            <li className="nav-item">
                                <button className="border-theme bg-transparent" style={{ width: 35, height: 35, borderRadius: 20 }} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                                    {
                                        theme === 'light'
                                        ? <FontAwesomeIcon icon="sun" className='text-theme' />
                                        : <FontAwesomeIcon icon="moon" className='text-theme'/>
                                    }
                                </button>
                            </li>
                        </ul>
                    </div>
                
                </div>
            </nav>
            <ModalContact/>
        </div>
    );
}

export default Navigation;
