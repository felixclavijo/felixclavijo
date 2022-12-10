import React from "react";
import "./ModalGallery.scss";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function ModalGallery({ modalg, setModalg, tempImageSrc }) {
    const CloseModalg = (e) => {
        setModalg(false);
    };

    return (
        <>
            <div className="overlay_modal " onClick={CloseModalg}>
                <span className="dismiss">X</span>
                <div>
                    <img src={tempImageSrc} alt="bigger pic" />
                    <div className="overlay-arrows_left">
                        <BiLeftArrow className="icon" />
                    </div>
                    <div className="overlay-arrows_right">
                        <BiRightArrow className="icon" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default ModalGallery;
