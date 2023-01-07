import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";

import { readURL } from "../../AdminFunctions/AdminFunctions";

import "./ImageSlider.scss";

// prettier-ignore
function ImageSlider({ id, images }) {

    const slideIndex = useRef(1);

    const showSlides = (n) => {
        let i;
        let slides = document.getElementsByClassName("mySlides"+id);
        let dots = document.getElementsByClassName("dot"+id);
        if (n > slides.length) {
            slideIndex.current = 1
        }
        if (n < 1) {
            slideIndex.current = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex.current-1].style.display = "flex";
        dots[slideIndex.current-1].classList.add("active")
    }

    // Next/previous controls
    const plusSlides = (n) => {
        slideIndex.current = slideIndex.current + n
        showSlides(slideIndex.current);
    }

    // Thumbnail image controls
    const currentSlide = (n) => {
        slideIndex.current = n
        showSlides(n);
    }

    return (
        <div className="imageslider">
            {/* <!-- Slideshow container --> */}
            <div className="slideshow-container">
                {/* <!-- Full-width images with number and caption text --> */}
                {
                    images?.length === 0
                    ? <div className="d-flex justify-content-center align-items-center">No Images</div>
                    : images?.map((image, index) => 
                        index === 0
                        ? <div className={`mySlides mySlides${id} fade1`} key={index} style={{ display: "flex" }}>
                            {/* <div className="numbertext">{index+1} / {images.length}</div> */}
                            <img id={'slider'+id+index} src={typeof image === 'object' ? readURL(image, 'slider'+id+index) : image} className="image_style" alt={`side${index}`} />
                            {/* <div className="text">Caption Text</div> */}
                        </div>
                        : <div className={`mySlides mySlides${id} fade1`} key={index} style={{ display: "none" }}>
                            {/* <div className="numbertext">{index+1} / {images.length}</div> */}
                            <img id={'slider'+id+index} src={typeof image === 'object' ? readURL(image, 'slider'+id+index) : image} className="image_style" alt={`side${index}`} />
                            {/* <div className="text">Caption Text</div> */}
                        </div>
                    )
                }

                {/* <div className="mySlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src={images[1]} style="width:100%" alt="side2" />
                    <div className="text">Caption Two</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src={images[2]} style="width:100%" alt="side3" />
                    <div className="text">Caption Three</div>
                </div> */}

                {/* <!-- Next and previous buttons --> */}
                <button type="button" className="prev" onClick={() => plusSlides(-1)}>
                    <FontAwesomeIcon icon="angle-left" className="icon_lr" />
                </button>
                <button type="button" className="next" onClick={() => plusSlides(1)}>
                    <FontAwesomeIcon icon="angle-right" className="icon_lr" />
                </button>
            </div>
            <br />

            {/* <!-- The dots/circles --> */}
            <div style={{textAlign: "center"}}>
                {
                    images?.map((im, index) => 
                        index === 0
                        ? <span key={index} className={`dot dot${id} active`} onClick={() => currentSlide(index)}></span>
                        : <span key={index} className={`dot dot${id}`} onClick={() => currentSlide(index)}></span>
                    )
                }
                {/* <span className="dot" onClick="currentSlide(2)"></span>
                <span className="dot" onClick="currentSlide(3)"></span> */}
            </div>
        </div>
    );
}

export default ImageSlider;
