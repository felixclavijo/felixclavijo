import React, { useEffect, useState } from "react";
import "./ModalGallery.scss";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

// prettier-ignore
function ModalGallery({ data, modal, setModal, imageindex=0, setImageIndex }) {

    const [move, setMove] = useState(imageindex !== undefined ? window.innerWidth / 2 - (500*imageindex) : 0)
    // console.log(move, imageindex,  window.innerWidth / 2 - (500*imageindex))

    const ChangeImage = (direction) => {
        var myEl = parseInt(document.getElementsByClassName('box_main')[0].style.transform.replace(/[^\d.\W]|[()]/g, ''))
        if(direction === 'left') {
            if(imageindex !== 0) {
                var val1 = myEl + 500
                document.getElementsByClassName('box_main')[0].style.transform = 'translateX('+val1+'px)'
                setImageIndex(imageindex-1)
                setMove(val1)
            }
        } else {
            if(data.length-1 !== imageindex) {
                var val2 = myEl - 500
                document.getElementsByClassName('box_main')[0].style.transform = 'translateX('+val2+'px)'
                setImageIndex(imageindex+1)
                setMove(val2)
            }
        }
    }

    const imagechange = (ind, e, i) => {
        var ele = parseInt(document.getElementsByClassName('box_main')[0].style.transform.replace(/[^\d.\W]|[()]/g, ''))
        var cal = window.innerWidth / 2
        var final = ele - cal
        // console.log(ele - final - 250, (500*ind))
        // console.log(ele, cal, final, 250)
        setMove(ele - final - 250 - (500*ind))

        var all_inside = document.getElementsByClassName("overlay_img_big")
        var all_col = document.getElementsByClassName('overlay_container')[0]
        var img_all = document.getElementsByClassName('img_all')
        var all_img = document.getElementsByClassName('overlay_bg')
        if(e !== undefined) {
			if(e.target.clientHeight < document.getElementsByClassName('overlay_container')[0].clientHeight) {
				e.target.style.height = '100%'
				e.target.style.width = null
			} else {
				e.target.style.width = '100%'
				e.target.style.height = null
			}
			if(e.target.clientHeight < document.getElementsByClassName('overlay_container')[0].clientHeight) {
				e.target.style.width = null
				e.target.style.height = '100%'
			}
			if(e.target.clientWidth < document.getElementsByClassName('overlay_container')[0].clientWidth) {
				e.target.style.width = '100%'
				e.target.style.height = null
			}

            for(var t=0; t < img_all.length; t++) {
                // console.log(img_all[ind].clientHeight, all_inside[ind].clientHeight)
                if(img_all[t].clientHeight < all_inside[t].clientHeight) {
                    all_inside[t].style.height = '100%'
                    all_inside[t].style.width = null
                } else {
                    all_inside[t].style.width = '100%'
                    all_inside[t].style.height = null
                }
                if(img_all[t].clientWidth < all_inside[t].clientWidth) {
                    all_inside[t].style.width = '100%'
                    all_inside[t].style.height = null
                }
			}
		} else {
			for(var j=0; j < all_img.length; j++) {
                // console.log(all_col.clientWidth, all_img[j].clientWidth)
				if(all_col.clientWidth === all_img[j].clientWidth) {
                    if(all_col.clientHeight > all_img[j].clientHeight) {
                        all_img[j].style.height = '100%'
                        all_img[j].style.width = null
                        all_inside[j].style.height = '100%'
                        all_inside[j].style.width = null
                    } else {
                        all_img[j].style.width = '100%'
                        all_img[j].style.height = null
                        all_inside[j].style.width = '100%'
                        all_inside[j].style.height = null
                    }
                } else {
                    if(all_col.clientWidth > all_img[j].clientWidth) {
                        all_img[j].style.width = '100%'
                        all_img[j].style.height = null
                        all_inside[j].style.width = '100%'
                        all_inside[j].style.height = null
                    }
                }
			}
            for(var q=0; q < img_all.length; q++) {
                if(img_all[q].clientHeight < all_inside[q].clientHeight) {
                    all_inside[q].style.height = '100%'
                    all_inside[q].style.width = null
                } else {
                    all_inside[q].style.width = '100%'
                    all_inside[q].style.height = null
                }
                if(img_all[q].clientWidth < all_inside[q].clientWidth) {
                    all_inside[q].style.width = '100%'
                    all_inside[q].style.height = null
                }
			}
		}
    }

    useEffect(() => {
        
        var ele = parseInt(document.getElementsByClassName('box_main')[0].style.transform.replace(/[^\d.\W]|[()]/g, ''))
        var cal = window.innerWidth / 2
        var final = ele - cal
        // console.log(ele - final - 250, (500*ind))
        // console.log(ele, cal, final, 250)
        setMove(ele - final - 250 - (500*imageindex))

        window.addEventListener('resize', () => imagechange(imageindex))
        return () => window.removeEventListener('resize',  () => imagechange(imageindex))
    }, [imageindex])

    return (
        <>
            <div className={`overlay_modal ${modal ? 'show' : ''}`}>
                {/* <span className="dismiss">X</span> */}
                <div className="overlay_container" onClick={() => setModal(false)}>
                {
                    data?.map((gallery_img, i) => 
                        imageindex === i
                        ? <img src={gallery_img.image} alt="bigger pic" className="overlay_bg img_active" key={i} onLoad={(e) => imagechange(imageindex, e, i)} />
                        : <img src={gallery_img.image} alt="bigger pic" className="overlay_bg" key={i} onLoad={(e) => imagechange(imageindex, e, i)} />
                    )
                }
                </div>
                <div className="arrows">
                    <button className="btn_arrow">
                        <BiLeftArrow className="icon" onClick={() => ChangeImage('left')} />
                    </button>
                    <button className="btn_arrow">
                        <BiRightArrow className="icon" onClick={() => ChangeImage('right')} />
                    </button>
                </div>
                <div className="overlay_img_container" onClick={() => setModal(false)}>
                    <div className="box_main" style={{transform: "translateX("+move+"px)"}}>
                        {
                            data?.map((gallery_img, i) => 
                                <div className={`img_all ${imageindex === i ? 'big' : 'small'}`} key={i}>
                                    <img src={gallery_img.image} alt="bigger pic" key={i} className='overlay_img_big' />
                                </div>
                            )
                        }
                    </div>
                    {/* <div className="overlay_img_main">
                        {
                            data?.map((gallery_img, i) => 
                                1 === i
                                ? <img src={gallery_img.image} alt="bigger pic" key={i} className="overlay_img_big" />
                                : null
                            )
                        }
                    </div>
                    <div className="overlay_img_left">
                        {
                            data?.map((gallery_img, i) => 
                                1 <= i
                                ? null
                                : <img src={gallery_img.image} alt="bigger pic" key={i} className="overlay_img_small" />
                            )
                        }
                    </div>
                    <div className="overlay_img_right">
                        {
                            data?.map((gallery_img, i) => 
                                1 >= i
                                ? null
                                : <img src={gallery_img.image} alt="bigger pic" key={i} className="overlay_img_small" />
                            )
                        }
                    </div> */}
                </div>


            </div>
        </>
    );
}
export default ModalGallery;
