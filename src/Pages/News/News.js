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

// prettier-ignore
function News() {
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
                <h2 className="FadeIn">¡ Inverti en el mundo de las construcciones !</h2>
                <p className="FadeIn">Invertí en desarrollos de la más alta calidad, de forma transparente y profesional</p>
                <div className="hr_bottom RightIn">
                    <hr className="line_bottom" />
                </div>
            </div>
            <div className="keys_on_hand">
                <img src={require('../../assets/NewsImg.png')} alt="new_keys" className="new_img FadeIn" />
                <div className="details">
                    <p className="text-center">
                        Nos tomamos cada proyecto como un desafío, y buscamos que el cliente sea parte activa en el desarrollo de la idea para brindarles 
                        un servicio totalmente personalizado
                    </p>
                    <div className="py-4">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <ul>
                                        <li className="FadeLeft">Evaluación de Proyectos / Estudios de Factibilidad.</li>
                                        <li className="FadeLeft">Proyectos y Pliegos Licitatorios.</li>
                                        <li className="FadeLeft">Estimaciones de Costos y Tiempos de ejecución de Obras</li>
                                        <li className="FadeLeft">Evaluación Técnica - Económica de Ofertas de Construcción</li>
                                        <li className="FadeLeft">Gestión y Aprobación Municipal</li>
                                        <li className="FadeLeft">Dirección y Administración de Obras</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <h2 className="FadeIn">LLAVE EN MANO</h2>
                                    <hr className="line_details FadeIn" />
                                    <p className="FadeIn">
                                        Trabajamos también bajo la modalidad “llave en mano” donde nos encargamos de las 
                                        diferentes fases del proceso, desde el inicio proyectual hasta la entrega final de la obra terminada.
                                    </p>
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
                    <div className="overlay_box_com" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={e => { setImgp({
                                  key: null,
                                  img:require('../../assets/ImagesGallery/test2.png')
                                });
                              }}></div>
                    <img src={require('../../assets/ImagesGallery/test2.png')} alt="new_keys" className="new_com_img" onLoad={image_resize2} />
                    <h1>Galeria comercial</h1>
                </div>
 
                <NewsDisplay data={projects_data} setImgp={setImgp} />
            </div>
            <ModalProject imgp={imgp} />
        </div>
    );
}

export default News;
