import React, { useContext, useEffect, useState } from "react";
import NewsDisplay from "../../Components/NewsDisplay/NewsDisplay";
import { ThemeContext } from "../../context/ThemeContext";
import {
    AnimationFade,
    AnimationIn,
    FadeIn,
} from "../../styles/animations/fadein";
import ModalProject from "../../Components/ModalProject/ModalProject";
import "./News.scss";
import { connect } from "react-redux";

// prettier-ignore
function News(props) {

    const { onlineAdmin }= props

    const[imgp, setImgp] = useState();
    const { setApp_height } = useContext(ThemeContext)

    useEffect(() => {
        AnimationFade('FadeLeft')
        AnimationFade('FadeRight')
        AnimationIn('LeftIn')
        AnimationIn('RightIn')
        FadeIn('FadeIn')
        setApp_height(document.getElementsByClassName('App')[0].clientHeight)
    }, [setApp_height])

    const image_resize2 = (e, i) => {
        if(e.target.clientHeight) {
			if(e.target.clientHeight < document.getElementsByClassName('center_image')[i].clientHeight) {
				e.target.style.height = '100%'
				e.target.style.width = null
			} else {
				e.target.style.width = '100%'
				e.target.style.height = null
			}
			if(e.target.clientHeight < document.getElementsByClassName('center_image')[i].clientHeight) {
				e.target.style.width = null
				e.target.style.height = '100%'
			}
			if(e.target.clientWidth < document.getElementsByClassName('center_image')[i].clientWidth) {
				e.target.style.width = '100%'
				e.target.style.height = null
			}
		} else {
            var all_col3 = document.getElementsByClassName('center_image')
            var all_img3 = document.getElementsByClassName('new_img')
            // var p=0
            // console.log('Height', all_col3[0].clientHeight > all_img3[0].clientHeight, all_col3[0].clientHeight, all_img3[0].clientHeight)
            // console.log('Width', all_col3[0].clientWidth > all_img3[0].clientWidth, all_col3[0].clientWidth, all_img3[0].clientWidth)
            for(var p=0; p < all_col3.length; p++) {
                if(all_col3[p].clientHeight > all_img3[p].clientHeight) {
                    all_img3[p].style.height = '100%'
                    all_img3[p].style.width = null
                } else {
                    all_img3[p].style.width = '100%'
                    all_img3[p].style.height = null
                }
                if(all_col3[p].clientHeight > all_img3[p].clientHeight) {
                    all_img3[p].style.width = null
                    all_img3[p].style.height = '100%'
                }
                if(all_col3[p].clientWidth > all_img3[p].clientWidth) {
                    all_img3[p].style.width = '100%'
                    all_img3[p].style.height = null
                }
            }
        }
    }

    useEffect(() => {
        window.addEventListener('resize', image_resize2)
        return () => window.removeEventListener('resize', image_resize2)
    }, [])

    return (
        <div className="news">
            <div className="news_pharse_container">
                <div className="hr_top LeftIn">
                    <hr className="line_top" />
                </div>
                <h2 className="FadeIn">{onlineAdmin?.news.phrase.title}</h2>
                <p className="FadeIn">{onlineAdmin?.news.phrase.description}</p>
                <div className="hr_bottom RightIn">
                    <hr className="line_bottom" />
                </div>
            </div>
            <div className="keys_on_hand">
                <div className="center_image">
                    <div className="back_cont">
                        <img src={onlineAdmin?.news.imagestore.image} alt="new_keys" className="new_img FadeIn" onLoad={(e) => image_resize2(e, 0)} />
                    </div>
                </div>
                <div className="details">
                    <p className="text-center">{onlineAdmin?.news.imagestore.description}</p>
                    <div className="py-4">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <ul>
                                        {
                                            onlineAdmin?.news.productservices.map((pro, index) => 
                                                <li key={index}>{pro}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h2 className="FadeIn">{onlineAdmin?.news.keyonhand.title}</h2>
                                    <hr className="line_details FadeIn" />
                                    <p className="FadeIn">{onlineAdmin?.news.keyonhand.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center_image">
                    <div className="back_cont">
                        <img src={require('../../assets/Hero.png')} alt="new_keys" className="new_img" onLoad={(e) => image_resize2(e, 1)} />
                    </div>
                </div>
                <div className="keys_projects">
                    <h1>PROYECTOS</h1>
                    <NewsDisplay data={onlineAdmin?.projects.data} reverse={true} setImgp={setImgp}/>
                </div>
 
                {/* <NewsDisplay data={projects_data} setImgp={setImgp} /> */}
            </div>
            <ModalProject imgp={imgp} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        onlineAdmin: state.onlineAdmin,
    };
};

export default connect(mapStateToProps)(News);
