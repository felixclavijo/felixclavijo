import React, { useCallback, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SidebarAdmin.scss";

// prettier-ignore
function SidebarAdmin({ sidebarshow, setSidebarShow }) {

    const sidebarupdate = useCallback(() => {
        if(window.innerWidth < 900) {
            setSidebarShow(false)
        } else {
            setSidebarShow(true)
        }
    }, [setSidebarShow])

    useEffect(() => {
        window.addEventListener('resize', sidebarupdate)

        return () => {
            window.removeEventListener('resize', sidebarupdate)
        }
    }, [sidebarupdate])
    return (
        <div className="sidebaradmin">
            <div className={!sidebarshow ? "nav-resize" : "nav-resize page-with-navbar"}>
                <div className="mobile-nav">
                    <button 
                        className="mobile-nav-btn"
                        onClick={() => setSidebarShow(!sidebarshow)}
                    >
                        <FontAwesomeIcon icon='bars' />
                    </button>
                    <div className="nav-logo">
                        <div className="btn-box">
                            <button className="btn">Save</button>
                            <button className="btn">Publish</button>
                        </div>
                        <img src={require('../../assets/Removal-623 1.png')} alt="nav-logo" className="main_logo" />
                    </div>
                </div>
            </div>
            <nav className={sidebarshow ? "" : "navbar2"}>
                <div>
                    <div className="logo">
                        <img src={require('../../assets/Removal-623 1.png')} alt="logo" className="main_logo" />
                        <img src={require('../../assets/Light-FELIX CLAVIJO.png')} alt="main_name" className="mb-2" />
                        <img src={require('../../assets/Light-ARQUITECTURA.png')} alt="sub_name" />
                    </div>
                    <div className="links nav-top">
                        <NavLink to='/felixclavijoadmin/home' className="nav-link">
                            <div className="icon_box">
                                <FontAwesomeIcon icon='home' fontSize={18} />
                            </div>
                            <div className="d-flex align-items-center">
                                <span>Home</span>
                            </div>
                        </NavLink>
                        <NavLink to='/felixclavijoadmin/gallery' className="nav-link">
                            <div className="icon_box">
                                <FontAwesomeIcon icon="grip-vertical" fontSize={18} />
                            </div>
                            <div className="d-flex align-items-center">
                                <span>Gallery</span>
                            </div>
                        </NavLink>
                        <NavLink to='/felixclavijoadmin/news' className="nav-link">
                            <div className="icon_box">
                                <FontAwesomeIcon icon="book-open" fontSize={15} />
                            </div>
                            <div className="d-flex align-items-center">
                                <span>News</span>
                            </div>
                        </NavLink>
                        <NavLink to='/felixclavijoadmin/devpro' className="nav-link">
                            <div className="icon_box">
                                <FontAwesomeIcon icon="feather-pointed" fontSize={18} />
                            </div>
                            <div className="d-flex align-items-center">
                                <span>DevPro</span>
                            </div>
                        </NavLink>
                        <NavLink to='/felixclavijoadmin/aboutus' className="nav-link">
                            <div className="icon_box">
                                <FontAwesomeIcon icon="person" fontSize={25} />
                            </div>
                            <div className="d-flex align-items-center">
                                <span>About Us</span>
                            </div>
                        </NavLink>
                    </div>
                </div>
                {/* <div>
                    <NavLink to="/logout"  className="nav-link">
                        <div className="icon_box">
                            <FontAwesomeIcon icon="right-from-bracket" fontSize={25} />
                        </div>
                        <div className="d-flex align-items-center">
                            <span>Logout</span>
                        </div>
                    </NavLink>
                </div> */}
            </nav>
            <Outlet />
        </div>
    );
}

export default SidebarAdmin;
