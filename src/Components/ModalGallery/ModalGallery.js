import React, { useEffect, useRef, useState } from "react";
import "./ModalGallery.scss";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

// prettier-ignore
function ModalGallery({ data, modal, setModal, imageindex }) {

    const [img_index, setImgIndex] = useState(0)
    const [move, setMove] = useState(img_index !== undefined ? window.innerWidth / 2 - (500*img_index) : 0)
    // console.log(move, img_index, imageindex,  window.innerWidth / 2 - (500*0))

    const loop = useRef(true)

    const ChangeImage = (direction) => {
        var myEl = parseInt(document.getElementsByClassName('box_main')[0].style.transform.replace(/[^\d.\W]|[()]/g, ''))
        var small_he = document.getElementsByClassName("small")[0]?.clientHeight
        // console.log(small_he)
        if(direction === 'left') {
            if(img_index !== 0) {
                var val1 = myEl + small_he
                document.getElementsByClassName('box_main')[0].style.transform = 'translateX('+val1+'px)'
                setImgIndex(img_index-1)
                setMove(val1)
            }
        } else {
            if(data.length-1 !== img_index) {
                var val2 = myEl - small_he
                document.getElementsByClassName('box_main')[0].style.transform = 'translateX('+val2+'px)'
                setImgIndex(img_index+1)
                setMove(val2)
            }
        }
    }

    const imagechange = (ind, e, i) => {
        // if(ind) {
            var ele = parseInt(document.getElementsByClassName('box_main')[0]?.style.transform.replace(/[^\d.\W]|[()]/g, ''))
            var small = document.getElementsByClassName("small")[0]?.clientHeight
            var extra = small < 300 ? 50 : 0
            var cal = window.innerWidth / 2
            var final = ele - cal
            // console.log(ele, final, (small/2+extra), (small*ind), extra, small, window.innerWidth)
            setMove(ele - final - (small/2+extra) - (small*ind))
        // }

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
        if(loop.current || img_index !== undefined) {
            if(document.getElementsByClassName("big")[0]) {
                var ele = parseInt(document.getElementsByClassName('box_main')[0].style.transform.replace(/[^\d.\W]|[()]/g, ''))
                var small_2 = document.getElementsByClassName("big")[0]?.clientHeight
                var extra_2 = small_2 < 300 ? 50 : 0
                var cal = window.innerWidth / 2
                var final = ele - cal
                // console.log(ele - final - (small_2/2+extra_2) - (small_2*img_index))
                setMove(ele - final - (small_2/2+extra_2) - (small_2*img_index))
                loop.current = false
            }
        }

        window.addEventListener('resize', () => imagechange(img_index))
        return () => window.removeEventListener('resize',  () => imagechange(img_index))
    }, [img_index, imageindex])

    return (
        <>
            <div className={`overlay_modal ${modal ? 'show' : ''}`}>
                <div className="overlay_container" 
                    onClick={() => {
                        setImgIndex(0)
                        setModal(false)
                    }}
                >
                {
                    data?.map((gallery_img, i) => 
                        img_index === i
                        ? <img src={gallery_img} alt="bigger pic" className="overlay_bg img_active" key={i} onLoad={(e) => imagechange(img_index, e, i)} />
                        : <img src={gallery_img} alt="bigger pic" className="overlay_bg" key={i} onLoad={(e) => imagechange(img_index, e, i)} />
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
                <div className="overlay_img_container" 
                    onClick={() => {
                        setImgIndex(0)
                        setModal(false)
                    }}
                >
                    <div className="box_main" style={{transform: "translateX("+move+"px)"}}>
                        {
                            data?.map((gallery_img, i) => 
                                <div className={`img_all ${img_index === i ? 'big' : 'small'}`} key={i}>
                                    <img src={gallery_img} alt="bigger pic" key={i} className='overlay_img_big' />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default ModalGallery;
