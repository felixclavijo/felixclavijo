import React, { useEffect, useState } from "react";
// import { ThemeContext } from "../../context/ThemeContext";

import "./SingleNews.scss";

// prettier-ignore
function SingleNews({ id, image, title, desc, reverse=false }) {

    const [changing, setChanging] = useState(true)

    // const { setImg_height } = useContext(ThemeContext)

    const interChange = (e) => {
        if(window.innerWidth < 768) {
            setChanging(false)
        } else {
            setChanging(true)
        }

        if(e.target.clientHeight !== undefined) {
			if(e.target.clientHeight < document.getElementsByClassName('news_wrapper')[0].clientHeight) {
				e.target.style.height = '100%'
				e.target.style.width = null
			} else {
				e.target.style.width = '100%'
				e.target.style.height = null
			}
			if(e.target.clientHeight < document.getElementsByClassName('news_wrapper')[0].clientHeight) {
				e.target.style.width = null
				e.target.style.height = '100%'
			}
			if(e.target.clientWidth < document.getElementsByClassName('news_wrapper')[0].clientWidth) {
				e.target.style.width = '100%'
				e.target.style.height = null
			}
		}
    }

    // const handleImg = (e) => {
    //     setImg_height(e.target.clientHeight)
    // }

    useEffect(() => {
        if(document.getElementsByClassName('news_wrapper') !== undefined) {
            var wrapper = document.getElementsByClassName('news_wrapper')[0]
            var all_img = document.getElementsByClassName('news_img')
            for(var i=0; i < all_img.length; i++) {
                if(all_img[i].clientHeight < wrapper.clientHeight) {
                    all_img[i].style.height = '100%'
                    all_img[i].style.width = null
                } else {
                    all_img[i].style.width = '100%'
                    all_img[i].style.height = null
                }
                if(all_img[i].clientHeight < wrapper.clientHeight) {
                    all_img[i].style.width = null
                    all_img[i].style.height = '100%'
                }
                if(all_img[i].clientWidth < wrapper.clientWidth) {
                    all_img[i].style.width = '100%'
                    all_img[i].style.height = null
                }
            }
		}
        
        window.addEventListener('resize', interChange)
        
        return () => window.removeEventListener('resize', interChange)
    }, [])

    return (
        <div className="singlenews">
            <div className="container-fluid">
                <div className="row">
                    <div className={`${reverse ? 'col-md-5' : 'col-md-7'}  d-flex justify-content-center ${reverse && changing ? 'flex-column' : ''}`}>
                        {
                            reverse && changing
                            ? <div className="FadeLeft my-4">
                                <h1><span className="news_id">{id}.</span> {title}</h1>
                                {/* <hr className="line_hr" /> */}
                                <span style={{fontSize: 18}}>{desc}</span>
                            </div>
                            : <div className="news_wrapper FadeLeft">
                                <img src={image} alt="news" className="news_img" onLoad={interChange} />
                            </div>
                            
                        }
                    </div>
                    <div className={`${reverse ? 'col-md-7' : 'col-md-5'}  d-flex justify-content-center ${reverse && changing ? '' : 'flex-column'}`}>
                        {
                            reverse && changing
                            ? <div className="news_wrapper FadeRight">
                                <img src={image} alt="news" className="news_img" onLoad={interChange} />
                            </div>
                            : <div className="FadeRight my-4">
                                <h1><span className="news_id">{id}.</span> {title}</h1>
                                {/* <hr className="line_hr" /> */}
                                <span style={{fontSize: 18}}>{desc}</span>
                            </div>
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleNews;
