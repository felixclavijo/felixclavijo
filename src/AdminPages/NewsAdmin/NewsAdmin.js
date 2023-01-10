import React, { useEffect } from "react";
import { connect } from "react-redux";
import ChooseFile from "../../AdminComponents/ChooseFile/ChooseFile";
import InputArea from "../../AdminComponents/InputArea/InputArea";
import Inputbox from "../../AdminComponents/Inputbox/Inputbox";
import { CheckImage, readURL } from "../../AdminFunctions/AdminFunctions";
import Categories from "../../AdminComponents/CategoryInput/CategoryInput";

import "./NewsAdmin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// prettier-ignore
function NewsAdmin({ sidebarshow, ...props }) {

    const { admin, adminInsert } = props
    const active_project = [1,2,3,4]

    const removeCat = (id) => {
        // admin?.home.services.splice(id, 1)
        var removeupd = {
            ...admin,
            news: {
                ...admin.news,
                productservices: admin.news.productservices.filter((el, i) => i !== id),
            }
        }
        adminInsert(removeupd)
    }

    const galleryImg = (e, i) => {
		if(e.target.clientHeight) {
            if(e.target.clientHeight > document.getElementsByClassName('gallery_pro')[i].clientHeight) {
				e.target.style.height = '100%'
				e.target.style.width = null
			} else {
				e.target.style.width = '100%'
				e.target.style.height = null
			}
			if(e.target.clientWidth < document.getElementsByClassName('gallery_pro')[i].clientWidth) {
				e.target.style.width = '100%'
				e.target.style.height = null
			}
		} else {
			var all_col = document.getElementsByClassName('gallery_pro')
			var all_img = document.getElementsByClassName('gallery_img2')
			for(var j=0; j < all_col.length; j++) {
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
		}
	}

    useEffect(() => {
        window.addEventListener('resize', galleryImg)
        
        return () => window.removeEventListener('resize', galleryImg)
    }, [])

    return (
        <div className={`newsadmin ${!sidebarshow ? "page" : "page page-with-navbar"}`}>
            <div className="title">
                <h3>News</h3>
                <hr className="line_hr" />
            </div>
            {/* ----------------- News Phrase -------------------- */}
            <div className="newsphrase_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md">
                            <div className="phrase_title">
                                <Inputbox name="title" type='text' defaultValue={admin?.news.phrase.title} placeholder="Type Here" 
                                    onChange={(e) => 
                                        adminInsert({
                                            ...admin,
                                            news: {
                                                ...admin.news,
                                                phrase: {
                                                    ...admin.news.phrase,
                                                    title: e.target.value
                                                }
                                            }
                                        })
                                    } 
                                />
                            </div>
                            <InputArea name='Phrase Description' type='text' defaultValue={admin?.news.phrase.description} placeholder='Type Here' rows={5}
                                onChange={(e) => {
                                    adminInsert({
                                        ...admin,
                                        news: {
                                            ...admin.news,
                                            phrase: {
                                                ...admin.news.phrase,
                                                description: e.target.value
                                            }
                                        }
                                    })
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------- News image Details -------------------- */}
            <div className="imagedetails_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md p-0">
                            <div className="image_box">
                                <img id="imagestore" src={typeof admin?.news.imagestore.image === 'object' ? readURL(admin?.news.imagestore.image, "imagestore") : admin?.news.imagestore.image} alt="imagestore" className="w-100" />
                                <p className="text-center">
                                    {admin?.news.imagestore.description}
                                </p>
                            </div>
                        </div>
                        <div className="col-md">
                            <ChooseFile name="Select Image" id="imgstore"
                                onChange={(e) => {
                                    var val = CheckImage(e)
                                    if(val !== null) {
                                        var imageupd = {
                                            ...admin,
                                            news: {
                                                ...admin.news,
                                                imagestore: {
                                                    ...admin.news.imagestore,
                                                    image: val
                                                }
                                            } 
                                        }
                                        adminInsert(imageupd)
                                    }
                                }}
                            />
                            <InputArea name='Description' type='text' defaultValue={admin?.news.imagestore.description} placeholder='Type Here' rows={5} 
                                onChange={(e) => {
                                    adminInsert({
                                        ...admin,
                                        news: {
                                            ...admin.news,
                                            imagestore: {
                                                ...admin.news.imagestore,
                                                description: e.target.value
                                            }
                                        }
                                    })
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------- Product Services -------------------- */}
            <div className="productservice_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md p-0">
                            <div className="productservice_box">
                                <div className="services padding-whole-theme productservice_admin">
                                    <div className="container-fluid">
                                        <ul>
                                            {
                                                admin?.news.productservices.map((pro, index) => 
                                                    <li key={index}>{pro}</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="d-flex justify-content-end">
                                <button className="btn add_btn"
                                    onClick={(e) => {
                                        // admin.home.services.push("")
                                        var addupd = {
                                            ...admin,
                                            news: {
                                                ...admin.news,
                                                productservices: [...admin.news.productservices, ""],
                                            }
                                        }
                                        adminInsert(addupd)
                                    }} 
                                >Add</button>
                            </div>
                            {
                                admin?.news.productservices.map((pro, i) => 
                                    <Categories name={`p${i+1}`} id={i} type='text' defaultValue={pro} placeholder="Type Here" key={i} removeCat={removeCat} 
                                        onChange={(e) => {
                                            var updinside = {
                                                ...admin,
                                                news: {
                                                    ...admin.news,
                                                    productservices: admin?.news.productservices.map((u, index) => index === i ? e.target.value : u),
                                                }
                                            }
                                            adminInsert(updinside)
                                        }}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------- Key on Hand -------------------- */}
            <div className="keyonhand_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md p-0">
                            <div className="keyonhand_box">
                                <h2>{admin?.news.keyonhand.title}</h2>
                                <hr className="line_details" />
                                <p>{admin?.news.keyonhand.description}</p>
                            </div>
                        </div>
                        <div className="col-md">
                            <Inputbox name="title" type='text' defaultValue={admin?.news.keyonhand.title} placeholder="Type Here" 
                                onChange={(e) => 
                                    adminInsert({
                                        ...admin,
                                        news: {
                                            ...admin.news,
                                            keyonhand: {
                                                ...admin.news.keyonhand,
                                                title: e.target.value
                                            }
                                        }
                                    })
                                } 
                            />
                            <InputArea name='Description' type='text' defaultValue={admin?.news.keyonhand.description} placeholder='Type Here' rows={5}
                                onChange={(e) => {
                                    adminInsert({
                                        ...admin,
                                        news: {
                                            ...admin.news,
                                            keyonhand: {
                                                ...admin.news.keyonhand,
                                                description: e.target.value
                                            }
                                        }
                                    })
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------- Project to Display -------------------- */}
            <div className="projectdisplay_section">
                <h5>Select Projects to Display</h5>
                <div className="container-fluid">
                    <div className="grid">
                        {
                            admin?.projects.data.map((d, i) => 
                                <div className="col-md gallery_pro p-1" key={i}>
                                    <div className="overlay">
                                        {
                                            active_project.includes(d.id)
                                            ? <>
                                                <div className="overlay_active"></div>
                                                <div className="check_box">
                                                    <FontAwesomeIcon icon='circle-check' className="check_icon" />
                                                </div>
                                            </>
                                            : null
                                        }
                                        <div className="img_container">
                                            <img src={d.image[0]} alt="gallery" className="gallery_img2" onLoad={(e) => galleryImg(e, i)}/>
                                        </div>
                                        <div className="gallery_text">
                                            <h3 className="title">{d.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        admin: state.admin,
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsAdmin);
