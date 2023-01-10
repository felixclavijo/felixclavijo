import React, { useEffect } from "react";
import "./NewsDisplay.scss";

// prettier-ignore
function NewsDisplay({ data, reverse=false, setImgp }) {

    const image_resize3 = (e, i) => {
        if(e.target.clientHeight) {
            if(document.getElementsByClassName('col_resize')[i]) {
                if(e.target.clientHeight < document.getElementsByClassName('col_resize')[i].clientHeight) {
                    e.target.style.height = '100%'
                    e.target.style.width = null
                } else {
                    e.target.style.width = '100%'
                    e.target.style.height = null
                }
                if(e.target.clientHeight < document.getElementsByClassName('col_resize')[i].clientHeight) {
                    e.target.style.width = null
                    e.target.style.height = '100%'
                }
                if(e.target.clientWidth < document.getElementsByClassName('col_resize')[i].clientWidth) {
                    e.target.style.width = '100%'
                    e.target.style.height = null
                }
            }
		} else {
            var all_col = document.getElementsByClassName('col_resize')
            var all_img = document.getElementsByClassName('newsdisplay_img')
            // console.log(all_col, all_img)
            for(var j=0; j < all_col.length; j++) {
                if(all_col[j].clientHeight > all_img[j].clientHeight) {
                    all_img[j].style.height = '100%'
                    all_img[j].style.width = null
                } else {
                    all_img[j].style.width = '100%'
                    all_img[j].style.height = null
                }
                if(all_col[j].clientHeight > all_img[j].clientHeight) {
                    all_img[j].style.width = null
                    all_img[j].style.height = '100%'
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
    }

    useEffect(() => {
        window.addEventListener('resize', image_resize3)
        return () => window.removeEventListener('resize', image_resize3)
    }, [])

    return (
        <div className="newsdisplay">
            <div className="container-fluid">
			    <div className="grid">
                    {
                        data?.map((item, i) => 
                            (i+1)%3 !== 0
                            ? <div className="item1 col_resize" key={i} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={e => setImgp(item)}>
                                {/* <div className={`newsdisplay_details bg-danger h-100 ${i%2 === 0 ? 'FadeLeft' : 'FadeRight'}`} style={{ top: reverse ? i%2 === 0 ? '150px' : '0px' : i%2 !== 0 ? '150px' : '0px' }}> */}
                                <div className={`newsdisplay_details ${i%2 === 0 ? 'FadeLeft' : 'FadeRight'}`} style={{ marginTop: reverse ? i%2 === 0 ? '150px' : '0px' : i%2 !== 0 ? '150px' : '0px' }}>
                                    <div className="newsdisplay_img_container">
                                        <img src={item.image[0]} alt="newsdisplay" className="newsdisplay_img" onLoad={(e) => image_resize3(e, i)} />
                                    </div>
                                    <div className="newsdisplay_name">
                                        <h2>{item.title}</h2>
                                    </div>
                                </div>
                            </div>
                            : <div className="item2 news_commercial FadeIn" key={i} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={e => setImgp(item)}>
                                <div className="overlay_box_com"></div>
                                <img src={item.image[0]} alt="new_keys" className="new_img" onLoad={(e) => image_resize3(e, i)} />
                                <h1>{item.title}</h1>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default NewsDisplay;
