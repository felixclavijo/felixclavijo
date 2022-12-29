import React, { useCallback, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

import "./SidebarAdmin.scss";
import { connect } from "react-redux";
import {
    DeleteImage,
    UpdateData,
    UploadImg,
} from "../../AdminFunctions/AdminFunctions";

// prettier-ignore
function SidebarAdmin({ sidebarshow, setSidebarShow, ...props }) {

    const { admin, onlineAdmin, prevAdmin, prevAdminUpdate, onlineAdminInsert } = props
    // console.log(admin, prevAdmin)
    
    const [saveprogress, setSaveProgress] = useState(false)
    const [publishprogress, setPublishProgress] = useState(false)

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
                            <button className="btn" disabled={_.isEqual(prevAdmin, admin) || saveprogress}
                                onClick={async() => {
                                    setSaveProgress(true)
                                    if(typeof admin?.home.hero.backgroundImg === 'object') {
                                        let path = `Home/Hero/BackgroundImage`
                                        let fullpath = path+'/'+admin?.home.hero.backgroundImg.name
                                        await DeleteImage(path)
                                        let url = await UploadImg(admin?.home.hero.backgroundImg, fullpath)
                                        admin.home.hero.backgroundImg = url
                                    }
                                    if(typeof admin?.home.hero.logoImg === 'object') {
                                        let path = `Home/Hero/LogoImg`
                                        let fullpath = path+'/'+admin?.home.hero.logoImg.name
                                        await DeleteImage(path)
                                        let url = await UploadImg(admin?.home.hero.logoImg, fullpath)
                                        admin.home.hero.logoImg = url
                                    }
                                    localStorage.setItem('admin', JSON.stringify(admin))
                                    localStorage.setItem('prevAdmin', JSON.stringify(admin))
                                    prevAdminUpdate(admin)
                                    setSaveProgress(false)
                                }}
                            >
                                {
                                    saveprogress
                                    ? <div className="d-flex justify-content-center">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    : <span>Save</span>
                                }
                            </button>
                            {/* <button className="btn" disabled={JSON.stringify(onlineAdmin) === JSON.stringify(admin)}> */}
                            <button className="btn" disabled={_.isEqual(onlineAdmin, admin) || publishprogress}
                                onClick={async () => {
                                    setPublishProgress(true)
                                    // console.log(admin)
                                    await UpdateData(admin, "home")
                                    onlineAdminInsert(admin)
                                    prevAdminUpdate(admin)
                                    setPublishProgress(false)
                                }}
                            >
                                {
                                    publishprogress
                                    ? <div className="d-flex justify-content-center">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    : <span>Publish</span>
                                }
                            </button>
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

const mapStateToProps = (state) => {
    return {
        admin: state.admin,
        prevAdmin: state.prevAdmin,
        onlineAdmin: state.onlineAdmin,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        prevAdminUpdate: (val) => {
            dispatch({
                type: "PREVADMIN",
                item: val,
            });
        },
        adminInsert: (val) => {
            dispatch({
                type: "ADMIN",
                item: val,
            });
        },
        onlineAdminInsert: (val) => {
            dispatch({
                type: "ONLINEADMIN",
                item: val,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarAdmin);
