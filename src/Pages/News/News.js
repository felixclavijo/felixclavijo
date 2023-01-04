import React, { useContext, useEffect, useState } from "react";
import NewsDisplay from "../../Components/NewsDisplay/NewsDisplay";
import { ThemeContext } from "../../context/ThemeContext";
import { projects_data } from "../../Data/Projects_data";
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

    const[imgp, setImgp] = useState({key:null, img:''});
    const { setApp_height } = useContext(ThemeContext)

    useEffect(() => {
        AnimationFade('FadeLeft')
        AnimationFade('FadeRight')
        AnimationIn('LeftIn')
        AnimationIn('RightIn')
        FadeIn('FadeIn')
        setApp_height(document.getElementsByClassName('App')[0].clientHeight)
    }, [setApp_height])

    const image_resize2 = () => {
        var all_col2 = document.getElementsByClassName('news_commercial')
        var all_img2 = document.getElementsByClassName('new_com_img')
        var p=0
        // for(var p=0; p < all_col2.length; p++) {
            // console.log(all_col[j].clientHeight, all_img[j].clientHeight)
            if(all_col2[p].clientHeight > all_img2[p].clientHeight) {
                all_img2[p].style.height = '100%'
                all_img2[p].style.width = null
            } else {
                all_img2[p].style.width = '100%'
                all_img2[p].style.height = null
            }
            if(all_col2[p].clientWidth > all_img2[p].clientWidth) {
                all_img2[p].style.width = '100%'
                all_img2[p].style.height = null
            }
        // }
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
                <img src={onlineAdmin?.news.imagestore.image} alt="new_keys" className="new_img FadeIn" />
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
                <img src={require('../../assets/Hero.png')} alt="new_keys" className="new_img" />
                <div className="keys_projects">
                    <h1>PROYECTOS</h1>
                    <NewsDisplay data={projects_data} reverse={true} setImgp={setImgp}/>
                </div>
                <div className="news_commercial FadeIn">
                    <div className="overlay_box_com"></div>
                    <img src={require('../../assets/ImagesGallery/test2.png')} alt="new_keys" className="new_com_img" onLoad={image_resize2} />
                    <h1>Galeria comercial</h1>
                </div>
 
                <NewsDisplay data={projects_data} setImgp={setImgp} />
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
