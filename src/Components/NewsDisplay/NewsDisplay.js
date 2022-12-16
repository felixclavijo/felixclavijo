import React, { useEffect } from "react";

import "./NewsDisplay.scss";

// prettier-ignore
function NewsDisplay({ data, reverse=false }) {

    const image_resize = (e, i) => {
        var all_col = document.getElementsByClassName('newsdisplay_img_container')
        var all_img = document.getElementsByClassName('newsdisplay_img')
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

        var all_col2 = document.getElementsByClassName('news_commercial')
        var all_img2 = document.getElementsByClassName('new_img')
        for(var p=0; p < all_col2.length; p++) {
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
        }
    }

    useEffect(() => {
        window.addEventListener('resize', image_resize)
        return () => window.removeEventListener('resize', image_resize)
    }, [])

    return (
        <div className="newsdisplay">
            <div className="container-fluid">
                <div className="row">
                    {
                        data?.map((item, i) => 
                            <div className="col-md-6" key={i}>
                                <div className={`newsdisplay_details ${i%2 === 0 ? 'FadeLeft' : 'FadeRight'}`} style={{ top: reverse ? i%2 === 0 ? '150px' : '0px' : i%2 !== 0 ? '150px' : '0px' }}>
                                    <div className="newsdisplay_img_container">
                                        <img src={item.img} alt="newsdisplay" className="newsdisplay_img" onLoad={image_resize} />
                                    </div>
                                    <div className="newsdisplay_name">
                                        <h2>{item.name}</h2>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default NewsDisplay;
