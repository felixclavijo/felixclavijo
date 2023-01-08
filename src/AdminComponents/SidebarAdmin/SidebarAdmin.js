import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

import "./SidebarAdmin.scss";
import { connect } from "react-redux";
import {
    DeleteImage,
    DeleteSingleImage,
    GetDocuments,
    UpdateData,
    UploadImg,
} from "../../AdminFunctions/AdminFunctions";

// prettier-ignore
function SidebarAdmin({ sidebarshow, setSidebarShow, ...props }) {

    const { admin, adminInsert, onlineAdmin, prevAdmin, prevAdminUpdate, onlineAdminInsert } = props
    // console.log(admin?.home.services, prevAdmin?.home.services, onlineAdmin?.home.services)
    
    const [saveprogress, setSaveProgress] = useState(false)
    const [publishprogress, setPublishProgress] = useState(false)

    const sidebarupdate = useCallback(() => {
        if(window.innerWidth < 900) {
            setSidebarShow(false)
        } else {
            setSidebarShow(true)
        }
    }, [setSidebarShow])

    const loop = useRef(true)

    useEffect(() => {

        if(onlineAdmin === null && loop.current) {
            window.addEventListener('resize', sidebarupdate)

            // GetDocuments().then(data => {
            //     onlineAdminInsert(data)
            //     // console.log(data)
            // })
            
            if(localStorage.getItem('admin') === null) {
                GetDocuments().then(data => {
                    console.log(data)
                    adminInsert(data)
                    onlineAdminInsert(data)
                    prevAdminUpdate(data)
                    localStorage.setItem('admin', JSON.stringify(data))
                })
            } else {
                adminInsert(JSON.parse(localStorage.getItem('admin')))
                if(localStorage.getItem('prevAdmin') === null) {
                    prevAdminUpdate(JSON.parse(localStorage.getItem('admin')))
                    localStorage.setItem('prevAdmin', localStorage.getItem('admin'))
                } else {
                    prevAdminUpdate(JSON.parse(localStorage.getItem('prevAdmin')))
                }
            }
            // console.log(alldata)
            loop.current = false
        }

        return () => {
            window.removeEventListener('resize', sidebarupdate)
        }
    }, [sidebarupdate, onlineAdmin, adminInsert, onlineAdminInsert, prevAdminUpdate])

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
                            {/* {console.log(JSON.parse(localStorage.getItem('admin')).home.services.length, JSON.parse(localStorage.getItem('prevAdmin')).home.services.length)} */}
                            <button className="btn" disabled={_.isEqual(prevAdmin, admin) || saveprogress}
                                onClick={async() => {
                                    setSaveProgress(true)
                                    if(typeof admin?.home.hero.backgroundImg === 'object') {
                                        let path = `Home/Hero/BackgroundImage`
                                        await DeleteImage(path)
                                        let fullpath = path+'/'+admin?.home.hero.backgroundImg.name
                                        let url = await UploadImg(admin?.home.hero.backgroundImg, fullpath)
                                        admin.home.hero.backgroundImg = url
                                    }
                                    if(typeof admin?.home.hero.logoImg === 'object') {
                                        let path = `Home/Hero/LogoImg`
                                        await DeleteImage(path)
                                        let fullpath = path+'/'+admin?.home.hero.logoImg.name
                                        let url = await UploadImg(admin?.home.hero.logoImg, fullpath)
                                        admin.home.hero.logoImg = url
                                    }
                                    for(var j=0; j < admin?.home.features.length; j++) {
                                        // console.log(typeof admin?.home.features[j].image === 'object' && typeof admin?.home.features[j].video === 'object')
                                        if(typeof admin?.home.features[j].image === 'object' && typeof admin?.home.features[j].video === 'object') {
                                            let path = `Home/Features/${j+1}`
                                            await DeleteImage(path)
                                            if(admin?.home.features[j].image !== null) {
                                                let fullpath = path+'/'+admin?.home.features[j].image.name
                                                let url = await UploadImg(admin?.home.features[j].image, fullpath)
                                                admin.home.features[j].image = url
                                            } else {
                                                let fullpath = path+'/'+admin?.home.features[j].video.name
                                                let url = await UploadImg(admin?.home.features[j].video, fullpath)
                                                admin.home.features[j].video = url
                                            }
                                        }
                                    }
                                    for(var p=0; p < admin?.home.imageDisplay.length; p++) {
                                        // console.log(typeof admin?.home.features[j].image === 'object' && typeof admin?.home.features[j].video === 'object')
                                        if(typeof admin?.home.imageDisplay[p].image === 'object') {
                                            let path = `Home/ImageDisplay/${p+1}`
                                            await DeleteImage(path)
                                            let fullpath = path+'/'+admin?.home.imageDisplay[p].image.name
                                            let url = await UploadImg(admin?.home.imageDisplay[p].image, fullpath)
                                            admin.home.imageDisplay[p].image = url
                                        }
                                    }
                                    if(admin?.projects.data.length < onlineAdmin?.projects.data.length) {
                                        var admin_id = admin?.projects.data.map(pro => pro.id)
                                        var filtered_project = onlineAdmin?.projects.data.filter(ele => !admin_id.includes(ele.id))
                                        console.log(filtered_project)
                                        for(var f=0; f < filtered_project.length; f++) {
                                            let path = `Projects/${filtered_project[f].title}`
                                            await DeleteImage(path)
                                        }
                                    } else {
                                        for(var r=0; r < admin?.projects.data.length; r++) {
                                            // console.log(typeof admin?.home.features[j].image === 'object' && typeof admin?.home.features[j].video === 'object')
                                            var adminImg_filter = admin?.projects.data[r].image.filter(ele => typeof ele !== 'object')
                                            var admin_len = adminImg_filter.length
                                            var onlineAdmin_len = onlineAdmin?.projects.data[r] ? onlineAdmin?.projects.data[r].image.length : 0
                                            if(admin_len < onlineAdmin_len) {
                                                var filter_val = _.difference(onlineAdmin?.projects.data[r].image, adminImg_filter)
                                                for(var b=0; b < filter_val.length; b++) {
                                                    var image_name = filter_val[b].split("%2F")[2].split("?")[0].replace(/%20/g, " ")
                                                    let path = `Projects/${onlineAdmin?.projects.data[r].title}/${image_name}`
                                                    await DeleteSingleImage(path)
                                                }
                                                // if(adminImg_filter.length !== admin?.projects.data[r].image.length) {
                                                let path = `Projects/${admin?.projects.data[r].title}`
                                                for(var l=0; l < admin?.projects.data[r].image.length; l++) {
                                                    if(typeof admin?.projects.data[r].image[l] === 'object') {
                                                        let fullpath = path+'/'+admin?.projects.data[r].image[l].name
                                                        let url = await UploadImg(admin?.projects.data[r].image[l], fullpath)
                                                        admin.projects.data[r].image[l] = url
                                                    }
                                                }
                                                // }
                                            } else {
                                                let path = `Projects/${admin?.projects.data[r].title}`
                                                for(var u=0; u < admin?.projects.data[r].image.length; u++) {
                                                    if(typeof admin?.projects.data[r].image[u] === 'object') {
                                                        let fullpath = path+'/'+admin?.projects.data[r].image[u].name
                                                        let url = await UploadImg(admin?.projects.data[r].image[u], fullpath)
                                                        admin.projects.data[r].image[u] = url
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if(typeof admin?.news.imagestore.image === 'object') {
                                        let path = `News/Imagestore`
                                        await DeleteImage(path)
                                        let fullpath = path+'/'+admin?.news.imagestore.image.name
                                        let url = await UploadImg(admin?.news.imagestore.image, fullpath)
                                        admin.news.imagestore.image = url
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
                                    await UpdateData(admin, "news")
                                    await UpdateData(admin, "devpro")
                                    await UpdateData(admin, "projects")
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
