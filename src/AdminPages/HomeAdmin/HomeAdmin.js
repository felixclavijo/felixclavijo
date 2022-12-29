import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Categories from "../../AdminComponents/CategoryInput/CategoryInput";
import ChooseFile from "../../AdminComponents/ChooseFile/ChooseFile";
import InputArea from "../../AdminComponents/InputArea/InputArea";
import Inputbox from "../../AdminComponents/Inputbox/Inputbox";
import Features from "../../Components/Features/Features";
// import { admin } from "../../Data/Admin_data";
import { features_data } from "../../Data/Features_data";
import { services_data } from "../../Data/Services_data";

import { CheckImage, GetDocuments } from "../../AdminFunctions/AdminFunctions";

import "./HomeAdmin.scss";
import { connect } from "react-redux";

// prettier-ignore
function HomeAdmin({ sidebarshow, ...props }) {

    const { admin, onlineAdmin, adminInsert, onlineAdminInsert, prevAdminUpdate } = props

    const image_resize = (e, i) => {
        // if(e.target.clientHeight) {
		// 	if(e.target.clientHeight > document.getElementsByClassName('img_wrapper')[i].clientHeight) {
		// 		e.target.style.height = '100%'
		// 		e.target.style.width = null
		// 	} else {
		// 		e.target.style.width = '100%'
		// 		e.target.style.height = null
		// 	}
		// 	// if(e.target.clientHeight < document.getElementsByClassName('img_wrapper')[i].clientHeight) {
		// 	// 	e.target.style.width = null
		// 	// 	e.target.style.height = '100%'
		// 	// }
		// 	if(e.target.clientWidth < document.getElementsByClassName('img_wrapper')[i].clientWidth) {
		// 		e.target.style.width = '100%'
		// 		e.target.style.height = null
		// 	}
		// } else {
            var all_col = document.getElementsByClassName('img_wrapper')
			var all_img = document.getElementsByClassName('img_img')
			for(var j=0; j < all_col.length; j++) {
                // console.log(all_col[j].clientHeight, all_img[j].clientHeight)
				if(all_col[j].clientHeight > all_img[j].clientHeight) {
					all_img[j].style.height = '100%'
					all_img[j].style.width = null
				} else {
					all_img[j].style.width = '100%'
					all_img[j].style.height = null
				}
				if(all_col[j].clientWidth > all_img[j].clientWidth) {
					all_img[j].style.width = '100%'
					all_img[j].style.height = null
				}
			}
		// }
    }

    const loop = useRef(true)

    useEffect(() => {
        // localStorage.removeItem('admin')
        if(onlineAdmin === null && loop.current) {
            window.addEventListener('resize', image_resize)
            // adminInsert(GetDocuments())

            GetDocuments().then(data => {
                onlineAdminInsert(data)
                // console.log(data)
            })
            
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
        return () => window.removeEventListener('resize', image_resize)
    }, [onlineAdmin, adminInsert, prevAdminUpdate, onlineAdminInsert])

    function readURL(input, id) {
        if (input) {
            var reader = new FileReader();
        
            reader.onload = function (e) {
                document.getElementById(id).src = e.target.result;
            };
        
            reader.readAsDataURL(input);
        }
    }

    return (
        <div className={`homeadmin ${!sidebarshow ? "page" : "page page-with-navbar"}`}>
            <div className="title">
                <h3>Home</h3>
                <hr className="line_hr" />
            </div>
            {/* ----------------- Hero -------------------- */}
            <div className="hero_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md p-0">
                            <div className="hero_box">
                                <div className="hero hero_admin">
                                    <div className="hero_wrapper">
                                        <img id="backgroundImg" src={typeof admin?.home.hero.backgroundImg === 'object' ? readURL(admin?.home.hero.backgroundImg, "backgroundImg") : admin?.home.hero.backgroundImg} alt="Hero" className="hero_img" />
                                    </div>
                                    <div className="hero_title">
                                        <img id="logoImg" src={typeof admin?.home.hero.logoImg === 'object' ? readURL(admin?.home.hero.logoImg, "logoImg") : admin?.home.hero.logoImg} style={{ height: 70, borderRadius: 5, marginRight: 5 }} alt="Logo" />
                                        <h5>
                                            {
                                                admin?.home.hero.title.split(' ').map((t, i) => 
                                                    i%2
                                                    ? <span className="format_clavijo" key={i}> {t} </span>
                                                    : t
                                                )
                                            }
                                        </h5>
                                        <p className="text-center" style={{fontSize: 10, maxWidth: "350px"}}>{admin?.home.hero.phrase}</p>
                                    </div>
                                    <div className="mouse">
                                        <div className="mouse_outer"></div>
                                        <div className="mouse_scrollwheel"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <ChooseFile name="Background Image" id="bgimg" 
                                onChange={(e) => {
                                    var val = CheckImage(e)
                                    if(val !== null) {
                                        let upd = {
                                            ...admin,
                                            home: {
                                                ...admin.home,
                                                hero: {
                                                    ...admin.home.hero, 
                                                    backgroundImg: val
                                                }
                                            } 
                                        }
                                        adminInsert(upd)
                                    }
                                }} 
                            />
                            <ChooseFile name="Logo Image" id="logoimg" 
                                onChange={(e) => {
                                    var val = CheckImage(e)
                                    if(val !== null) {
                                        let upd = {
                                            ...admin,
                                            home: {
                                                ...admin.home,
                                                hero: {
                                                    ...admin.home.hero, 
                                                    logoImg: val
                                                }
                                            } 
                                        }
                                        adminInsert(upd)
                                    }
                                }} 
                            />
                            <Inputbox name="title" type='text' defaultValue={admin?.home.hero.title} placeholder="Type Here" 
                                onChange={(e) => 
                                    adminInsert({
                                        ...admin,
                                        home: {
                                            ...admin.home,
                                            hero: {
                                                ...admin.home.hero, 
                                                title: e.target.value
                                            }
                                        } 
                                    })
                                } 
                            />
                            <Inputbox name="phrase" type='text' defaultValue={admin?.home.hero.phrase} placeholder="Type Here" 
                                onChange={(e) => 
                                    adminInsert({
                                        ...admin, 
                                        home: {
                                            ...admin.home,
                                            hero: {
                                                ...admin.home.hero, 
                                                title: e.target.value
                                            }
                                        } 
                                    })
                                } 
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------- Category -------------------- */}
            <div className="category_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md p-0">
                            <div className="service_box">
                                <div className="services padding-whole-theme service_admin">
                                    <div className="container-fluid">
                                        <div className="row">
                                            {
                                                services_data?.map((service, i) => 
                                                    <div className="col-md-4 FadeLeft" key={i}>
                                                        <div className="d-flex align-items-center justify-content-center my-2">
                                                            <FontAwesomeIcon icon='circle-check' className="check_icon" />
                                                            <h6 className="text-theme mx-2">{service}</h6>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            {
                                services_data?.map((ser, i) => 
                                    <Categories name={`c${i+1}`} type='text' defaultValue={ser} placeholder="Type Here" key={i}/>
                                )
                            }
                            <Categories name="new" type='text' placeholder="Type Here" add={true} />
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------- Phrase -------------------- */}
            <div className="phrase_section">
                <InputArea name='Phrase' type='text' defaultValue='Diseñando lugares que inspiran alegría y bienestar desde 1935.' placeholder='Type Here' rows={5} />
            </div>
            {/* ----------------- Feature 1 -------------------- */}
            <div className="feature_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md p-0">
                            <div className="feature_box">
                                <Features image={features_data[0].image} video={features_data[0].video} title={features_data[0].title} desc={features_data[0].desc} />
                            </div>
                        </div>
                        <div className="col-md">
                            <ChooseFile name="Select Image" />
                            <Inputbox name="title" type='text' defaultValue={features_data[0].title} placeholder="Type Here" />
                            <InputArea name='Description' type='text' defaultValue={features_data[0].desc} placeholder='Type Here' rows={5} />
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------- ImageDisplay -------------------- */}
            <div className="imagedisplay_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md p-0">
                            <div className="imagedisplay_box">
                                <div className="imagesdisplay padding-whole-theme">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md">
                                                    <div className="image_container">
                                                        <div className="title">
                                                            <h4>ARQUITECTURA</h4>
                                                        </div>
                                                        <div className="img_wrapper">
                                                            <img src={require('../../assets/Images/WhatsApp Image 2022-12-08 at 6.05.48 PM.jpeg')} alt="display" className="img_img" onLoad={(e) => image_resize(e, 0)}/>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div className="col-md">
                                                    <div className="image_container">
                                                        <div className="title">
                                                            <h4>DESARROLLO</h4>
                                                        </div>
                                                        <div className="img_wrapper">
                                                            <img src={require('../../assets/Images/WhatsApp Image 2022-12-08 at 6.05.47 PM.jpeg')} alt="display" className="img_img" onLoad={(e) => image_resize(e, 1)} />
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <Inputbox name="title" type='text' defaultValue='ARQUITECTURA' placeholder="Type Here" />
                            <ChooseFile name="Select Image" />
                            <Inputbox name="title" type='text' defaultValue='DESARROLLO' placeholder="Type Here" />
                            <ChooseFile name="Select Image" />
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------- Feature 2 -------------------- */}
            <div className="feature_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md p-0">
                            <div className="feature_box">
                                <Features image={features_data[1].image} video={features_data[1].video} title={features_data[1].title} desc={features_data[1].desc} />
                            </div>
                        </div>
                        <div className="col-md">
                            <ChooseFile name="Select Image" />
                            <Inputbox name="title" type='text' defaultValue={features_data[1].title} placeholder="Type Here" />
                            <InputArea name='Description' type='text' defaultValue={features_data[1].desc} placeholder='Type Here' rows={5} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin,
        onlineAdmin: state.onlineAdmin,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        adminInsert: (val) => {
            dispatch({
                type: "ADMIN",
                item: val,
            });
        },
        prevAdminUpdate: (val) => {
            dispatch({
                type: "PREVADMIN",
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeAdmin);
