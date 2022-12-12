import React, { useContext, useEffect } from "react";
import SingleNews from "../../Components/SingleNews/SingleNews";
import SubTitle from "../../Components/SubTitle/SubTitle";
import { ThemeContext } from "../../context/ThemeContext";
import { news_data } from "../../Data/News_data";
import { AnimationFade, AnimationIn } from "../../styles/animations/fadein";

import "./News.scss";

// prettier-ignore
function News() {

    const { setApp_height } = useContext(ThemeContext)

    useEffect(() => {
        AnimationFade('FadeLeft')
        AnimationFade('FadeRight')
        AnimationIn('LeftIn')
        setApp_height(document.getElementsByClassName('App')[0].clientHeight)
        // AnimationIn('LeftOut')
    }, [setApp_height])

    return (
        <div className="news padding-whole-theme">
            <SubTitle 
                title="NUESTRA PROPUESTA PARA VOS !" 
                desc="Brindamos un amplio servicio de arquitectura acompañando a nuestros clientes en todo el proceso 
                de la obra, desde el comienzo en la concepción de la misma hasta una vez finalizada y ya en uso. Presentes 
                desde la etapa inicial en la  coordinando las visitas necesarias hasta la elección definitiva." 
            />
            <div className="news_features">
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-md">
                            <div className="news_img_container d-flex justify-content-center">
                                <img src={require('../../assets/Group 20.png')} alt="news_icons" className="news_img" />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="news_img_container d-flex justify-content-center">
                                <img src={require('../../assets/Group 21.png')} alt="news_icons" className="news_img" />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="news_img_container d-flex justify-content-center">
                                <img src={require('../../assets/Group 22.png')} alt="news_icons" className="news_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news_all">
                {
                    news_data?.map((news, i) => 
                        i%2 === 0
                        ? <SingleNews id={news.id} image={news.image} title={news.title} desc={news.desc} reverse={true} key={i} />
                        : <SingleNews id={news.id} image={news.image} title={news.title} desc={news.desc} key={i} />
                    )
                }
                {/* <SingleNews id={news_data[1].id} image={news_data[1].image} title={news_data[1].title} desc={news_data[1].desc} /> */}
            </div>
        </div>
    );
}

export default News;
