import React, { useContext, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

import "./ImagesDisplay.scss";

// prettier-ignore
function ImagesDisplay(props) {

    const { onlineAdmin } = props

    const { setPathname } = useContext(ThemeContext)

    const image_resize = (e, i) => {
        // if(e.target.clientHeight) {
		// 	if(e.target.clientHeight > document.getElementsByClassName('img_wrapper')[i].clientHeight) {
		// 		e.target.style.height = '100%'
		// 		e.target.style.width = null
		// 	} else {
		// 		e.target.style.width = '100%'
		// 		e.target.style.height = null
		// 	}
		// 	// if(e.target.clientHeight < document.getElementsByClassName('img_wrapper')[i].clientHeight) {
		// 	// 	e.target.style.width = null
		// 	// 	e.target.style.height = '100%'
		// 	// }
		// 	if(e.target.clientWidth < document.getElementsByClassName('img_wrapper')[i].clientWidth) {
		// 		e.target.style.width = '100%'
		// 		e.target.style.height = null
		// 	}
		// } else {
            var all_col = document.getElementsByClassName('img_wrapper')
			var all_img = document.getElementsByClassName('img_img')
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
		// }
    }

    useEffect(() => {
        window.addEventListener('resize', image_resize)
        return () => window.removeEventListener('resize', image_resize)
    }, [])

    return (
        <div className="imagesdisplay padding-whole-theme">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md">
                        <Link to='/gallery' onClick={() => setPathname('/gallery')}>
                            <div className="image_container">
                                <div className="title">
                                    <h2>{onlineAdmin?.home.imageDisplay[0].title}</h2>
                                </div>
                                <div className="img_wrapper">
                                    <img src={onlineAdmin?.home.imageDisplay[0].image} alt="display" className="img_img" onLoad={(e) => image_resize(e, 0)}/>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md">
                        <Link to='/devpro' onClick={() => setPathname('/devpro')}>
                            <div className="image_container">
                                <div className="title">
                                    <h2>{onlineAdmin?.home.imageDisplay[1].title}</h2>
                                </div>
                                <div className="img_wrapper">
                                    <img src={onlineAdmin?.home.imageDisplay[1].image} alt="display" className="img_img" onLoad={(e) => image_resize(e, 1)} />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        onlineAdmin: state.onlineAdmin,
    };
};

export default connect(mapStateToProps)(ImagesDisplay);
